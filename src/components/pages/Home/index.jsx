/**
 * @file Contains `Home` React stateless component.
 * @module Home
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';

// » IMPORT COMPONENTS
import Header from '../../common/Header';
import Game from '../../common/Game';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Home` stateless component.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Home = () => (
  <React.Fragment key="Home">
    <Header />
    <Game />
  </React.Fragment>
);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Home;
