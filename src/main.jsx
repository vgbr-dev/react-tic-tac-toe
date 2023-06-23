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

// » IMPORT CSS STYLES
import './styles/reset.css';
import './styles/styles.css';

// » IMPORT APP COMPONENT
import App from './App';

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `root` it is a `HTMLElement`, where the `ReactDOM.render` application
 * will be inserted when the `.render` method is called and enables.
 *
 * @type {HTMLElement}
 */
const rootElement = document.getElementById('root');

// ━━ RENDERER ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » MAIN RENDERER PROCESS
ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
);
