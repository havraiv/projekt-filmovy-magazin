import React from 'react';
import movies from '../../movie-database.js';
import { useParams } from 'react-router';

export const Movie = () => {
  const { id } = useParams();
  const moviesData = movies.find((movie) => movie.id === Number(id));

  return (
    <div className="movie">
      <img src={`${moviesData.poster}`} alt={`${moviesData.title}`} />

      <h2>{moviesData.title}</h2>

      <p>{moviesData.storyline}</p>
    </div>
  );
};
