import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';
import {
  createBrowserRouter,
  RouterProvider,
  Link,
  Outlet,
} from 'react-router-dom';

const App = () => {
  return (
    <>
      <div className="container">
        <Menu />
        <main>
          <Home />
        </main>
      </div>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
