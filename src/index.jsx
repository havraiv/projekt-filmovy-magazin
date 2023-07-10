import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import { Menu } from './components/Menu';
import { Home } from './pages/Home';

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
