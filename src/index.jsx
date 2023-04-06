import React from "react";
import { createRoot } from "react-dom/client";
import "./style.css";
import { Home } from "./components/Home";
import { Articles } from "./components/Articles";
import { Movies } from "./components/Movies";
import { Reviews } from "./components/Reviews";
import { Menu } from "./components/Menu";
import { Movie } from "./components/Movie";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import error from "./images/error.png"

const App = () => {
  return (
    <div className="container">
      <Menu />

      <main>
        <Outlet />
      </main>
    </div>
  );
};

export const ErrorPage = () => {
  return (
    <main className="container">
      <img src={error} className="error"></img>
    </main>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/reviews",
        element: <Reviews />,
      },
      {
        path: "/articles",
        element: <Articles />,
      },
      {
        path: "/movies",
        element: <Movies />,
        children: [
          {
            path: "/movies/:movieId",
            element: <Movie />,
          },
        ],
      },
    ],
  },
]);

createRoot(document.querySelector("#app")).render(
  <RouterProvider router={router} />
);
