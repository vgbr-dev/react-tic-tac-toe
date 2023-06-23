/**
 * @file Contains `Header` React stateless component.
 * @module Header
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';

// » IMPORT COMPONENTS
import SVGLogo from '../../svg/SVGLogo';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Header` stateless component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Header = () => (
  <header className="app-header">
    <h1 className="app-header--title">TIC TAC TOE</h1>
    <figure className="app-header--figure">
      <SVGLogo className="app-header--logo" />
    </figure>
  </header>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Header;
