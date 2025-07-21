import React, { useEffect, useState } from "react";
import "../style/MovieList.css";
import MovieCard from "./MovieCard";
import axios from "axios";
import FilterGroup from "./FilterGroup";
import _ from "lodash";

function MovieList({ type, title }) {
  const [movies, setMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://api.themoviedb.org/3/movie/${type}?api_key=6562cce4ac5e40c995ea182c43d35559`
        );
        const data = response.data?.results || [];
        setMovies(data);
        setFilteredMovies(data);
      } catch (error) {
        console.error("Failed to fetch movies:", error.message);
      }
    };

    fetchData();
  }, [type]);

  const handleFilter = (rating) => {
    if (rating === minRating) {
      setMinRating(0);
      setFilteredMovies(movies);
    } else {
      setMinRating(rating);
      const filtered = movies.filter((movie) => movie.vote_average >= rating);
      setFilteredMovies(filtered);
    }
  };

  const handleSort = (e) => {
    const { name, value } = e.target;
    setSort((prev) => ({ ...prev, [name]: value }));
  };

  useEffect(() => {
    if (sort.by === "default") return;

    const sorted = _.orderBy(filteredMovies, [sort.by], [sort.order]);
    setFilteredMovies(sorted);
  }, [sort]);

  return (
    <section className="movie_list" id={type}>
      <header className="movie_list_header">
        <h2 className="movie_list_heading">{title}</h2>

        <div className="movie_list_fs">
          <FilterGroup
            ratings={[8, 7, 6]}
            minRating={minRating}
            handleFilter={handleFilter}
          />

          <select
            className="movie_sorting"
            name="by"
            value={sort.by}
            onChange={handleSort}
          >
            <option value="default">Sort By</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>

          <select
            className="movie_sorting"
            name="order"
            value={sort.order}
            onChange={handleSort}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filteredMovies.map((movie) => (
          <MovieCard key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}

export default MovieList;
