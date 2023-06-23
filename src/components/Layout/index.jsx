/**
 * @file Contains `Layout` React stateless component.
 * @module Layout
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import { Outlet } from 'react-router-dom';

// » IMPORT COMPONENTS
import TitleBar from '../common/TitleBar';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Layout` stateless component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Layout = () => (
  <React.Fragment key="Layout">
    <TitleBar appName="TIC TAC TOE" />
    <div id="app">
      <Outlet />
    </div>
  </React.Fragment>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Layout;
