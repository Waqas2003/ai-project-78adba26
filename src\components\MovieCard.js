import React from 'react';

function MovieCard({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>Release Date: {movie.releaseDate}</p>
    </div>
  );
}

export default MovieCard;