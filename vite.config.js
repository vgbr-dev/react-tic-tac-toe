/**
 * @file Contains `vite` configuration file.
 * @module viteConfig
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT THIRD PARTIES MODULES
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Vite configuration.
 *
 * @typedef {import('vite').UserConfig} UserConfig
 */

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

/**
 * Vite configuration.
 *
 * @see {@link https://vitejs.dev/config/ UserConfig}
 * @type {UserConfig}
 */
const viteConfig = defineConfig({
  plugins: [react()],
});

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default viteConfig;
