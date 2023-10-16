import { LitElement } from 'lit-element';

/**
 * ![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)
 *
 * This component Data Manager
 *
 */
export class ListShareholdersDm extends LitElement {
  static get properties() {
    return {
      /**
       * Receives the url of the service to be consumed
       */
      host: {
        type: String,
      },
    };
  }

  constructor() {
    super();
    this.host = '';
  }

  /**
   * Get the data from the external service and generate an event with the response.
   */
  async getData() {
    try {
      const response = await fetch(this.host);
      if (!response.ok) {
        throw new Error(`Error HTTP: ${response.status}`);
      }
      const data = await response.json();
      /**
       * Fired when this response is Ok
       * @event
       */
      this._fireEvent('data-success', data);
    } catch (error) {
      /**
       * Fired when this response is not Ok
       * @event
       */
      this._fireEvent('data-error', { error: error.message });
    }
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
}
