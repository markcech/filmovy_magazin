import React from "react";
import movies from "../../movie-database";
import { NavLink } from "react-router-dom";
import "./style.css";

export const MovieList = () => {

  return (
    <nav className="movie-list">
      {movies.map((movie) => (
        <NavLink
          to={`/movies/${movie.id}`}
          className="list_link"
          key={movie.id}
          
        >
          {movie.title}
        </NavLink>
      ))}
    </nav>
  );
};
