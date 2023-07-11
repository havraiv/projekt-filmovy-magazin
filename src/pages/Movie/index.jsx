import React from 'react';
import movies from '../../movie-database.js';
import { useParams } from 'react-router';

export const Movie = () => {
  const { id } = useParams();
  const moviesData = movies.find((movie) => movie.id === Number(id));

  return (
    <div className="movie">
      {/* <img src="https://github.com/Czechitas-podklady-WEB/projekt-filmovy-magazin/raw/main/html-vzor/images/pulp-fiction.jpg" alt="Pulp Fiction"> */}

      <h2>{moviesData.title}</h2>

      <p>{moviesData.storyline}</p>
    </div>
  );
};
