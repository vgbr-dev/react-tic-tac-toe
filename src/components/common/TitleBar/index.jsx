/**
 * @file Contains `TitleBar` React stateful component.
 * @module TitleBar
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import { PropTypes } from 'prop-types';

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `TitleBar` stateful component.
 *
 * @component
 * @param {object} props - The component's properties.
 * @param {OnSubmit} props.appName - The application name.
 * @returns {JSX.Element} The rendered component.
 */
const TitleBar = ({ appName }) => (
  <nav className="titlebar">
    <section className="titlebar__app">
      <span className="titlebar__app-icon">&#xE700;</span>
      <span className="titlebar__app-name">{appName}</span>
    </section>
    <section className="titlebar__buttons">
      <button className="titlebar__button" type="button" title="minimize">
        &#xE921;
      </button>
      <button className="titlebar__button" type="button" title="maximize">
        &#xE922;
      </button>
      <button className="titlebar__button titlebar__button--close" type="button" title="close">
        &#xE8BB;
      </button>
    </section>
  </nav>
);

TitleBar.propTypes = {
  appName: PropTypes.string.isRequired,
};

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default TitleBar;
