import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import HomePage from './pages/HomePage.jsx';
import Decklist from "./pages/Decklist.jsx";
import NotFound from "./pages/NotFound.jsx";

import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

const router = createBrowserRouter([
	{
		path: '/',
		element: <HomePage />,
		errorElement: <NotFound />,
	},
	{
		path: '/decklist',
		element: <Decklist />,
	},
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
