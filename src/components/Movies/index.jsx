import React from "react";
import { MovieList } from "../MovieList";
import { Outlet } from "react-router-dom";
import "./style.css";

export const Movies = () => {
  return (
    <>
      <div className="movies">
        

        <div className="movies-container">
          <MovieList />

          <Outlet />
        </div>
      </div>
    </>
  );
};
