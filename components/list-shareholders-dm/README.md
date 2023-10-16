# @bbva-web-components/list-shareholders-dm

## Package info

### Package installation

Installation using NPM

```bash
npm install @bbva-web-components/list-shareholders-dm
```

### Entry points & exports

- index.js (default)
  - ListShareholdersDm (Class)
- list-shareholders-dm.js 
  - list-shareholders-dm (Custom Element)


## ListShareholdersDm (Class) list-shareholders-dm (Custom Element) 

### Extends from

LitElement (lit-element package)

### Usage

Import and extend the class:

```js
import { ListShareholdersDm } from '@bbva-web-components/list-shareholders-dm';

class ExampleElement extends ListShareholdersDm {
  ...
}
```

Use the custom element (defined globally):

```js
import '@bbva-web-components/list-shareholders-dm/list-shareholders-dm.js';
```

```html
<list-shareholders-dm ...>
  ...
</list-shareholders-dm>
```

### Description

![LitElement component](https://img.shields.io/badge/litElement-component-blue.svg)

This component Data Manager

### Properties

- **host** (attribute: host): string = ""
    Receives the url of the service to be consumed

### Events

- **eventName**: CustomEvent

### Methods

- **getData**
    Get the data from the external service and generate an event with the response.
