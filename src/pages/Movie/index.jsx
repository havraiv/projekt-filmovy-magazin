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
      <p>Year: {moviesData.year}</p>
      <p>Rating: {moviesData.rating}</p>
      <p>Director: {moviesData.director}</p>
      <p>Genre: {moviesData.genre}</p>
      <h3>Cast</h3>
      {moviesData.cast.map((actor) => {
        return (
          <p>
            {actor.name} as {actor.as}
          </p>
        );
      })}
    </div>
  );
};
