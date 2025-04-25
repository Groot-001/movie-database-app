import React from "react";

const MovieCard = ({ movie }) => {
  return (
    <div className="movie-card">
      <h3>{movie.movie}</h3>
      <p><strong>Genre:</strong> {movie.genre}</p>
      <p><strong>Rating:</strong> {movie.rating}</p>
      <p><strong>Release Date:</strong> {movie.releaseDate}</p>
    </div>
  );
};

export default MovieCard;
