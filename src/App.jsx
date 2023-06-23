/**
 * @file Entry point of the React application.
 * @module App
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { BrowserRouter as Router } from 'react-router-dom';

// » IMPORT COMPONENTS
import Routes from './router';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `App` component, the main component where the entire `react` application
 * is managed.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const App = () => (
  <Router>
    <Routes />
  </Router>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default App;
