import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import { Reviews } from './pages/Reviews';
import { Articles } from './pages/Articles';
import { Movies } from './pages/Movies';
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  useLocation,
} from 'react-router-dom';

const App = () => {
  const location = useLocation();
  return (
    <>
      <div className="container">
        <Menu />
        <main>{location.pathname === '/' ? <Home /> : <Outlet />}</main>
      </div>
    </>
  );
};
const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    // errorElement: <ErrorPage />,
    children: [
      {
        path: 'home',
        element: <Home />,
      },
      {
        path: 'reviews',
        element: <Reviews />,
      },
      {
        path: 'articles',
        element: <Articles />,
      },
      {
        path: 'movies',
        element: <Movies />,
      },
    ],
  },
]);
createRoot(document.querySelector('#app')).render(
  <RouterProvider router={router} />,
);
