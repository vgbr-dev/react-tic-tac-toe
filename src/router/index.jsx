/**
 * @file Manage `Router` React component, defines the Routes component, which
 * manages the routing for the React application.
 *
 * @module Routes
 */

// ━━ IMPORT MODULES ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// » IMPORT REACT MODULES
import React from 'react';
import { Navigate, useRoutes } from 'react-router-dom';

// » IMPORT COMPONENT
import Layout from '../components/Layout';
import Home from '../components/pages/Home';

// ━━ TYPE DEFINITIONS ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * An object representing a route in the React Router.
 *
 * @typedef {import('react-router-dom').RouteObject} RouteObject
 */

/**
 * An array of route objects in the React Router.
 *
 * @typedef {Array<RouteObject>} Routes
 */

// ━━ COMPONENT ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
/**
 * The `Router` component manages the routing for the React application.
 *
 * @component
 * @returns {JSX.Element} The rendered component.
 */
const Routes = () =>
  useRoutes([
    {
      path: '/',
      element: <Layout />,
      children: [{ path: '/', element: <Home />, exact: true }],
    },
    { path: '*', element: <Navigate to="/" /> },
  ]);

// ━━ EXPORT MODULE ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
export default Routes;
