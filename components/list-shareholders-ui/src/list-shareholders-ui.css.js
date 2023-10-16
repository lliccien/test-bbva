import { css, unsafeCSS } from 'lit-element';
import * as foundations from '@bbva-web-components/bbva-foundations-styles';

export default css`
:host {
  display: block;
  box-sizing: border-box;
}

:host([hidden]), [hidden] {
  display: none !important;
}

*, *::before, *::after {
  box-sizing: inherit;
}

.info {
  margin: 1rem 0;
  text-align: center;
}

.notification {
  margin: 10px;
  padding: 5px;
  background-color: aqua;
}
`;
