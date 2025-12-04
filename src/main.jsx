import React from 'react';
import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import App from './App';
import Lojas from './pages/Lojas.jsx';
import Cardapio from './pages/Cardapio.jsx';
import './styles.css';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/lojas",
    element: <Lojas />,
  },
  {
    path: "/cardapio",
    element: <Cardapio />,
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
);
