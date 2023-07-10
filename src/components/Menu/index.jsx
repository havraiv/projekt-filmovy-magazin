import React from 'react';

export const Menu = () => {
  return (
    <nav className="menu">
      <a href="index.html" className="active">
        Home
      </a>
      <a href="reviews.html">Reviews</a>
      <a href="articles.html">Articles</a>
      <a href="movies.html">Movies</a>
    </nav>
  );
};
