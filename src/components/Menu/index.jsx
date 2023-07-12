import React from 'react';
import './style.css';
import { NavLink } from 'react-router-dom';

export const Menu = () => {
  return (
    <nav className="menu">
      <NavLink
        to="/home"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Home
      </NavLink>
      <NavLink
        to="/reviews"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Reviews
      </NavLink>
      <NavLink
        to="/articles"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Articles
      </NavLink>
      <NavLink
        to="/movies"
        className={({ isActive }) => (isActive ? 'active' : '')}
      >
        Movies
      </NavLink>
    </nav>
  );
};
