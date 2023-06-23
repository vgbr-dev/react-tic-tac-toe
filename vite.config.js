/**
 * @file Contains `vite` configuration file.
 * @module viteConfig
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import pkg from './package.json';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Vite configuration.
 *
 * @typedef {import('vite').UserConfig} UserConfig
 */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `homepage` value from the package.json file.
 *
 * @type {string}
 */
const { homepage } = pkg;

/**
 * The GitHub repository URL in the format: https://github.com/<USERNAME>/<REPO>
 *
 * @type {string}
 */
const repoUrl = homepage.replace('#readme', '/');

/**
 * The repository name of the GitHub repository.
 *
 * @type {string}
 */
const repoName = `/${repoUrl.match(/https?:\/\/github.com\/[^/]+\/([^/]+)/)[1]}/`;

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Vite configuration.
 *
 * @see {@link https://vitejs.dev/config/ UserConfig}
 * @type {UserConfig}
 */
const viteConfig = defineConfig({
  plugins: [react()],
  base: repoName,
});

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default viteConfig;
