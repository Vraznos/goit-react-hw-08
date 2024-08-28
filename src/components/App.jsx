import { useState } from "react";
import Navigation from "../components/Navigation/Navigation.jsx";

import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import MoviePage from "../temp_page_petrol/MoviesPage/MoviesPage.jsx";

const MovieDetailPage = lazy(() =>
  import("../temp_page_petrol/MovieDetailsPage/MovieDetailsPage.jsx")
);
const HomePage = lazy(() =>
  import("../temp_page_petrol/HomePage/HomePage.jsx")
);

function App() {
  return (
    <>
      <Navigation />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="movies" element={<MoviePage />} />
          <Route path="movies/:movieId/*" element={<MovieDetailPage />} />
        </Routes>
      </Suspense>
    </>
  );
}

export default App;
