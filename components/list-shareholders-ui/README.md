# @bbva-web-components/list-shareholders-ui

## Package info

### Package installation

Installation using NPM

```bash
npm install @bbva-web-components/list-shareholders-ui
```

### Entry points & exports

- index.js (default)
  - ListShareholdersUi (Class)
- list-shareholders-ui.js 
  - list-shareholders-ui (Custom Element)


## ListShareholdersUi (Class) list-shareholders-ui (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { ListShareholdersUi } from '@bbva-web-components/list-shareholders-ui';

class ExampleElement extends ListShareholdersUi {
  ...
}
```

Use the custom element (defined globally):

```js
import '@bbva-web-components/list-shareholders-ui/list-shareholders-ui.js';
```

```html
<list-shareholders-ui ...>
  ...
</list-shareholders-ui>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component ...

Example:

```html
  <list-shareholders-ui></list-shareholders-ui>
```

### Properties

- **business** (attribute: business): boolean = false
    If true, you only show the list of companies. If false, it shows the complete listing. Default is false
- **dataManagerHost** (attribute: dataManagerHost): string = ""
    url to be passed as data manager host values

### Events

- **eventName**: CustomEvent
