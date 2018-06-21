// @flow
// Module dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

// Starting point component
import App from './components/core/App';

// Constants
import HTML from './constants/elements/html';

// Initialize root HTML element
const root = document.getElementById(HTML.root);

// Validate root element
if (root == null) {
  throw new Error('No root element found');
}

// Render React element into the DOM
ReactDOM.render(<App />, root);

// Service worker
registerServiceWorker();
