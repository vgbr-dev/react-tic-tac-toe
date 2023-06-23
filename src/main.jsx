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



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
