import React from "react";

import "./App.css";
import Navbar from "./components/Navbar";
import MovieList from "./components/MovieList";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="app">
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={<MovieList type={"popular"} title={"Popular"} />}
        />
        <Route
          path="/top_rated"
          element={<MovieList type={"top_rated"} title={"Top Rated"} />}
        />
        <Route
          path="/upcoming"
          element={<MovieList type={"upcoming"} title={"Upcoming"} />}
        />
      </Routes>
    </div>
  );
}

export default App;
