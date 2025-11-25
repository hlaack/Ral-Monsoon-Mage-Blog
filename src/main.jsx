import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import Decklist from "./pages/Decklist.jsx";
import NotFound from "./pages/NotFound.jsx";
import Layout from "./pages/Layout.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Layout />,
		errorElement: <NotFound />,
		children: [
			{index: true, element: <HomePage /> },
			{path: 'decklist', element: <Decklist /> },
		]
	},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
