import React from 'react';
import MovieCard from '../components/MovieCard';

function Movies() {
  const movies = [
    { id: 1, title: 'Movie 1', releaseDate: '2022-01-01' },
    { id: 2, title: 'Movie 2', releaseDate: '2022-02-01' },
    { id: 3, title: 'Movie 3', releaseDate: '2022-03-01' },
  ];

  return (
    <div>
      <h1>Movies</h1>
      <ul>
        {movies.map((movie) => (
          <li key={movie.id}>
            <MovieCard movie={movie} />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Movies;