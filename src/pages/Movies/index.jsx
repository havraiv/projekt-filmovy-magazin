import React from 'react';
import './style.css';
import { MovieList } from '../MovieList';

export const Movies = () => {
  return (
    <div className="movies">
      <h1>Movies</h1>

      <div className="movies-container">
        <MovieList />
      </div>
    </div>
  );
};
