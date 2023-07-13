import React from 'react';
import { Link } from 'react-router-dom';

export const ErrorPage = () => {
  return (
    <>
      <p>404 Page not found</p>
      <Link to="/home">Home</Link>
    </>
  );
};
