/**
 * @file Contains `GameStateManager` class for managing the localStorage API.
 *
 * @description This module provides a class that simplifies the usage of the
 * localStorage API. It allows you to easily store, retrieve, and remove data
 * from the browser's local storage using a specified key.
 *
 * The `GameStateManager` class handles common operations and error handling,
 * providing a convenient interface for working with local storage.
 *
 * @module GameStateManager
 */

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Error messages associated with different scenarios related to the
 * usage of `GameStateManager`.
 *
 * @private
 * @typedef  {object} GameStateManagerErrors
 * @property {string} LOCAL_STORAGE_UNSUPPORTED          - Error message when localStorage is not supported in the browser.
 * @property {string} MISSING_GAME_NAME_PARAMETER        - Error message when the "gameName" parameter is missing.
 * @property {string} INVALID_GAME_NAME_PARAMETER        - Error message when the "gameName" parameter is not a string.
 * @property {string} INVALID_FORMAT_GAME_NAME_PARAMETER - Error message when the "gameName" parameter has an invalid format.
 * @property {string} MISSING_DEFAULT_STATE_PARAMETER    - Error message when the "defaultState" parameter is missing.
 * @property {string} INVALID_DEFAULT_STATE_PARAMETER    - Error message when the "defaultState" parameter is not an object.
 * @property {string} MISSING_UPDATED_STATE_PARAMETER    - Error message when the "updatedState" parameter is missing.
 * @property {string} INVALID_UPDATED_STATE_PARAMETER    - Error message when the "updatedState" parameter is not an object.
 * @property {string} SET_GAME_STATE_FAILED              - Error message when setting the game state in localStorage fails.
 * @property {string} DELETE_GAME_STATE_FAILED           - Error message when deleting the game state from localStorage fails.
 * @property {string} CLEAR_STORAGE_FAILED               - Error message when clearing the local storage fails. */

// ━━ CONSTANTS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * Regular expression to validate the format of an object key name.
 *
 * The keyNameRegexp ensures that the object key name follows
 * these restrictions:
 *
 * - Must start with a letter, underscore (_) or dollar sign ($).
 * - Subsequent characters can be letters, digits, underscores, or dollar signs.
 * - No whitespace or special characters are allowed.
 *
 * @private
 * @type {RegExp}
 */
const keyNameRegexp = /^[a-zA-Z_$][a-zA-Z0-9_$]*$/;

/**
 * Error messages associated with different scenarios related to the
 * usage of `GameStateManager`.
 *
 * @private
 * @type {GameStateManagerErrors}
 */
const ERRORS = {
  LOCAL_STORAGE_UNSUPPORTED: 'LocalStorage is not supported in this browser.',
  MISSING_GAME_NAME_PARAMETER: 'Missing "gameName" parameter.',
  INVALID_GAME_NAME_PARAMETER: 'Invalid "gameName" parameter, must be a string.',
  INVALID_FORMAT_GAME_NAME_PARAMETER: 'Invalid format for "gameName" parameter.',
  MISSING_DEFAULT_STATE_PARAMETER: 'Missing "defaultState" parameter.',
  INVALID_DEFAULT_STATE_PARAMETER: 'Invalid "defaultState" parameter, must be an object.',
  MISSING_UPDATED_STATE_PARAMETER: 'Missing "updatedState" parameter.',
  INVALID_UPDATED_STATE_PARAMETER: 'Invalid "updatedState" parameter, must be an object.',
  SET_GAME_STATE_FAILED: 'Failed to set the game state in localStorage.',
  DELETE_GAME_STATE_FAILED: 'Failed to delete the game state from localStorage.',
  CLEAR_STORAGE_FAILED: 'Failed to clear local storage.',
};

// ━━ MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 *
 *
 * @classdesc A utility class for managing data in the browser's localStorage.
 * Provides methods to store, retrieve, and remove data using the localStorage
 * API. If the localStorage API is not supported or encounters an error, default
 * values are used.
 *
 * @class GameStateManager
 */
class GameStateManager {
  /**
   * Creates an instance of `GameStateManager`.
   *
   * @constructor
   * @param {string} gameName - The key for the localStorage item.
   * @param {*} defaultState - The default value.
   * @throws {Error} If `localStorage` API is not supported in the browser.
   * @throws {ReferenceError} If the key parameter is `undefined`.
   * @throws {ReferenceError} If the key defaults is `undefined`.
   * @throws {TypeError} If the key parameter is not a `string`.
   * @example
   * ```js
   * const gameName = 'METAL_GEARL';
   * const defaultState = {
   *   playerName: 'solid Snake',
   *   live: 100,
   * };
   * const gameStateManager = new GameStateManager(gameName, defaultState);
   * ```
   */
  constructor(gameName, defaultState) {
    if (!GameStateManager.isLocalStorageSupported) {
      throw new Error(ERRORS.LOCAL_STORAGE_UNSUPPORTED);
    }
    if (typeof gameName === 'undefined') {
      throw new ReferenceError(ERRORS.MISSING_GAME_NAME_PARAMETER);
    }
    if (typeof gameName !== 'string') {
      throw new TypeError(ERRORS.INVALID_GAME_NAME_PARAMETER);
    }
    if (!keyNameRegexp.test(gameName)) {
      throw new TypeError(ERRORS.INVALID_FORMAT_GAME_NAME_PARAMETER);
    }
    if (typeof defaultState === 'undefined') {
      throw new ReferenceError(ERRORS.MISSING_DEFAULT_STATE_PARAMETER);
    }
    if (typeof defaultState !== 'object') {
      throw new ReferenceError(ERRORS.INVALID_DEFAULT_STATE_PARAMETER);
    }
    this.gameName = gameName;
    this.defaultState = defaultState;
  }

  /**
   * Retrieves the value associated with the key (gameName) from localStorage.
   *
   * @memberof GameStateManager
   * @returns {*} The value associated with the key, or null if the key doesn't exist or an error occurs.
   * @example
   * ```js
   * const gameState = gameStateManager.get();
   * console.log(gameState); // Output: { playerName: 'solid Snake', live: 100 }
   * ```
   */
  get() {
    try {
      const gameState = JSON.parse(localStorage.getItem(this.gameName));
      return gameState || this.defaultState;
    } catch (error) {
      return this.defaultState;
    }
  }

  /**
   * Sets the value for the key (gameName) in localStorage.
   *
   * @memberof GameStateManager
   * @param {*} updatedState - The value to be stored.
   * @throws {ReferenceError} If the value parameter is undefined.
   * @throws {Error} If there is an error while setting the value in localStorage.
   * @example
   * ```js
   * gameStateManager.set({ playerName: 'solid Snake', live: 80 });
   * const gameState = gameStateManager.get();
   * console.log(gameState); // Output: { playerName: 'solid Snake', live: 80 }
   * ```
   */
  set(updatedState) {
    if (typeof updatedState === 'undefined') {
      throw new ReferenceError(ERRORS.MISSING_UPDATED_STATE_PARAMETER);
    }
    if (typeof updatedState !== 'object') {
      throw new ReferenceError(ERRORS.INVALID_UPDATED_STATE_PARAMETER);
    }

    try {
      localStorage.setItem(this.gameName, JSON.stringify(updatedState));
    } catch (error) {
      throw new Error(`${ERRORS.SET_GAME_STATE_FAILED} ${error.message}`);
    }
  }

  /**
   * Removes the value associated with the key (gameName) from localStorage.
   *
   * @memberof GameStateManager
   * @throws {Error} If there is an error while removing the value from localStorage.
   * @example
   * ```js
   * gameStateManager.remove();
   * const gameState = gameStateManager.get();
   * console.log(gameState); // Output: { playerName: 'solid Snake', live: 100 }
   * ```
   */
  remove() {
    try {
      localStorage.removeItem(this.gameName);
    } catch (error) {
      throw new Error(ERRORS.DELETE_GAME_STATE_FAILED);
    }
  }

  /**
   * Clears all items from localStorage.
   *
   * @static
   * @memberof GameStateManager
   * @throws {Error} If there is an error while clearing the local storage.
   * @example
   * ```js
   * GameStateManager.clearStorage();
   * ```
   */
  static clearStorage() {
    try {
      localStorage.clear();
    } catch (error) {
      throw new Error(ERRORS.CLEAR_STORAGE_FAILED);
    }
  }

  /**
   * Checks if localStorage is supported in the browser.
   *
   * @static
   * @memberof GameStateManager
   * @returns {boolean} Returns `true` if localStorage is supported, `false` otherwise.
   * @example
   * ```js
   * const isSupported = GameStateManager.isLocalStorageSupported;
   * console.log(isSupported); // Output: true or false
   * ```
   */
  static get isLocalStorageSupported() {
    return typeof localStorage !== 'undefined';
  }
}

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default GameStateManager;
