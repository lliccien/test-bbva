import { LitElement, html } from 'lit-element';
import { getComponentSharedStyles } from '@bbva-web-components/bbva-core-lit-helpers';
import '@bbva-web-components/bbva-web-list-item-clip/bbva-web-list-item-clip.js';
import '@bbva-web-components/bbva-web-clip-box/bbva-web-clip-box.js';
import '@bbva-web-components/bbva-web-divider/bbva-web-divider.js';
import '@bbva-web-components/bbva-web-button-default/bbva-web-button-default.js';
import '@bbva-web-components/list-shareholders-dm/list-shareholders-dm.js';
import styles from './list-shareholders-ui.css.js';

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component ...
 *
 * Example:
 *
 * ```html
 *   <list-shareholders-ui></list-shareholders-ui>
 * ```
 */
export class ListShareholdersUi extends LitElement {
  static get properties() {
    return {
      /**
       * If true, you only show the list of companies. If false, it shows the complete listing. Default is false
       */
      business: {
        type: Boolean,
      },
      /**
       * url to be passed as data manager host values
       */
      dataManagerHost: {
        type: String,
      },
      _shareholders: {
        attribute: false,
      },
    };
  }

  constructor() {
    super();
    this.business = false;
    this._shareholders = [];
    this.dataManagerHost = '';
  }

  static get styles() {
    return [
      styles,
      getComponentSharedStyles('list-shareholders-ui-shared-styles'),
    ];
  }

  _listShareholders(acc) {
    const statusLabel = `Participación: ${acc.Porcentaje}`;
    const initials = this._getInitials(acc.Nombre, acc.TipoDocumento);
    return html`
      <bbva-web-list-item-clip
        id="${acc.NIT}-${acc.TipoDocumento}-${acc.Documento}"
        heading="${acc.Nombre}"
        status="${statusLabel}"
        status-variant="success"
        @item-clip-click="${this._handleClickEvent}"
      >
        ${acc.TipoDocumento}: ${acc.Documento}
        <br />
        ${acc.TipoDocumento === 'NIT'
          ? `${acc.CantidadAccionitas} accionistas`
          : ''}
        <bbva-web-clip-box
          slot="image"
          size="l"
          initials="${initials}"
          random-bg=""
        >
        </bbva-web-clip-box>
      </bbva-web-list-item-clip>
      <bbva-web-divider></bbva-web-divider>
    `;
  }

  _listBusiness(acc) {
    if (
      acc.TipoDocumento !== 'NIT' &&
      this._convertPercentToNumber(acc.Porcentaje) < 5
    ) {
      return this._listShareholders(acc);
    }
  }

  _handleClickEvent(e) {
    const [nit, documentType, documentNumber] = e.target.id.split('-');
    /**
     * Fired when item action is clicked
     * @event
     */
    this._fireEvent('shareholder-click', { nit, documentType, documentNumber });
  }

  _getInitials(name, tdc) {
    if (tdc === 'NIT') return 'B';
    return name
      .split(' ')
      .map((work) => work.charAt(0).toUpperCase())
      .join('');
  }

  _convertPercentToNumber(percent) {
    const notPercent = percent.replace('%', '');
    return parseFloat(notPercent);
  }

  _handleData(e) {
    this._shareholders = e.detail;
  }

  firstUpdated() {
    const dataManager = this.shadowRoot.querySelector('list-shareholders-dm');
    dataManager.getData();
  }

  _fireEvent(eventName, details) {
    this.dispatchEvent(
      new CustomEvent(eventName, {
        bubbles: true,
        composed: true,
        detail: details,
      })
    );
  }

  render() {
    return html`
      <list-shareholders-dm
        host="${this.dataManagerHost}"
        @data-success="${this._handleData}"
      ></list-shareholders-dm>
      <div>
        ${this._shareholders
          ? this._shareholders.map((accionista) => {
              return this.business
                ? this._listBusiness(accionista)
                : this._listShareholders(accionista);
            })
          : ''}
      </div>
    `;
  }
}
