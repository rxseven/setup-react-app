// Module dependencies
import React from 'react';
import ReactDOM from 'react-dom';

import registerServiceWorker from './registerServiceWorker';

// Render React element into the DOM
ReactDOM.render(<h1>Welcome to React</h1>, document.getElementById('root'));

// Service worker
registerServiceWorker();
