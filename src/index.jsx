// Module dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

// Starting point component
import App from './components/core/App';

// Render React element into the DOM
ReactDOM.render(<App />, document.getElementById('root'));

// Service worker
registerServiceWorker();
