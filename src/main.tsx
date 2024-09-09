import React from 'react'
import ReactDOM from 'react-dom/client'
import "@mantine/core/styles.css";
import { MantineProvider } from "@mantine/core";

import './index.css'

import { RouterProvider, createRouter, createHashHistory } from '@tanstack/react-router'

// Import the generated route tree
import { routeTree } from './routeTree.gen'
import { theme } from './theme';

const hashHistory = createHashHistory();

// Create a new router instance
const router = createRouter({ routeTree, history: hashHistory })

// Register the router instance for type safety
declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router
  }
}

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <MantineProvider theme={theme} defaultColorScheme="dark"><RouterProvider router={router} /></MantineProvider>
  </React.StrictMode>,
)
