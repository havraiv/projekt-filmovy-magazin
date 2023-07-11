import React from 'react';
import { Link } from 'react-router-dom';
import movies from '../../movie-database';
import './style.css';

export const MovieList = () => {
  return (
    <nav className="movie-list">
      {movies.map((movie) => {
        return (
          <Link to={`/movie/${movie.id}`} key={movie.id}>
            {movie.title}
          </Link>
        );
      })}
    </nav>
  );

  // <Link to={`/movie/${id}`}>{title}</Link>;
  // title={movie.title} id={movie.id} key={movie.id} />;
};
