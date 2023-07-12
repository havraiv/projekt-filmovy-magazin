import React from 'react';
import { NavLink } from 'react-router-dom';
import movies from '../../movie-database';
import './style.css';

export const MovieList = () => {
  return (
    <nav className="movie-list">
      {movies.map((movie) => {
        return (
          <NavLink
            to={`/movies/${movie.id}`}
            key={movie.id}
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            {movie.title}
          </NavLink>
        );
      })}
    </nav>
  );

  // <Link to={`/movie/${id}`}>{title}</Link>;
  // title={movie.title} id={movie.id} key={movie.id} />;
};
