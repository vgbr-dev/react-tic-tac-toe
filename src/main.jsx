/**
 * @file Manage the main renderer process, this file is responsible for
 * rendering the React app in the browser.
 *
 * @requires React
 * @requires ReactDOM
 */
// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import ReactDOM from 'react-dom/client';


// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `root` it is a `HTMLElement`, where the `ReactDOM.render` application
 * will be inserted when the `.render` method is called and enables.
 *
 * @type {HTMLElement}
 */
const rootElement = document.getElementById('root');

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
