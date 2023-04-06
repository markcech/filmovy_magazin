import React from "react";
import { useParams } from "react-router-dom";
import movies from "../../movie-database";

import { ErrorPage } from "../../";
import "./style.css";

export const Movie = () => {
  const { movieId } = useParams();

  const movie = movies.find((movie) => movie.id === Number(movieId));

  return movie ? (
    <>
      <div className="movie" key={movie.id}>
        <img src={movie.poster} alt={movie.title} />
      </div>

      <div className="movieInformations">
        <h2 className="movieTitle">{movie.title}</h2>

        <p>{movie.storyline}</p>

        <p>
          <b>Cast: </b>
        </p>

        {movie.cast.map((actor) => {
          return (
            <p key={actor.as}>
              <a href={actor.url}>
                <i>{actor.name}</i>
              </a>{" "}
              as {actor.as}
            </p>
          );
        })}

        <p>
          <b>Year:</b> {movie.year}
        </p>
        <p>
          <b>
            Rating:{" "}
            <span className={movie.rating >= 8 ? "goodRating" : "badRating"}>
              {movie.rating}
            </span>
          </b>
        </p>
        <p>
          <b>Director: </b>
          {movie.director.map((dir) => {
            return (
              <p key={dir.name}>
                <a href={dir.url}><i>{dir.name}</i> </a>
              </p>
            );
          })}
        </p>
        <p>
          <b>Genre:</b> {movie.genre}
        </p>
      </div>
    </>
  ) : (
    <ErrorPage />
  );
};
