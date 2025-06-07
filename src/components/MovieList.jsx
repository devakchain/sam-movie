import React, { useEffect, useState } from "react";
import "../style/MovieList.css";
import MovieCard from "./MovieCard";
import axios from "axios";
import FilterGroup from "./FilterGroup";
import _ from "lodash";

function MovieList({ type, title }) {
  const [movies, setMovies] = useState([]);
  const [filtersMovie, setFiltersMovie] = useState([]);
  const [minRating, setMinRating] = useState(0);
  const [sort, setSort] = useState({
    by: "default",
    order: "asc",
  });

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await axios.get(
          `https://api.themoviedb.org/3/movie/${type}?api_key=6562cce4ac5e40c995ea182c43d35559`
        );
        setMovies(data.data?.results);
        setFiltersMovie(data.data?.results);
      } catch (error) {
        console.log(error.message);
      }
    };
    getData();
  }, [type]);

  function handleFilter(rate) {
    if (rate === minRating) {
      setMinRating(0);
      setFiltersMovie(movies);
    } else {
      setMinRating(rate);

      const filter = movies.filter((movie) => movie.vote_average >= rate);
      setFiltersMovie(filter);
    }
  }

  function handleSort(e) {
    const { name, value } = e.target;

    setSort((prev) => {
      return { ...prev, [name]: value };
    });
  }

  useEffect(() => {
    if (sort.by !== "default") {
      const sortMovies = _.orderBy(filtersMovie, [sort.by], [sort.order]);
      setFiltersMovie(sortMovies);
    }
  }, [sort]);

  return (
    <section className="movie_list" id={type}>
      <header className="movie_list_header">
        <h2 className="movie_list_heading">{title}</h2>

        <div className="movie_list_fs">
          <FilterGroup
            minRating={minRating}
            handleFilter={handleFilter}
            ratings={[8, 7, 6]}
          />
          <select
            className="movie_sorting"
            name="by"
            onChange={handleSort}
            value={sort.by}
          >
            <option value="default">SortBy</option>
            <option value="release_date">Date</option>
            <option value="vote_average">Rating</option>
          </select>
          <select
            className="movie_sorting"
            name="order"
            onChange={handleSort}
            value={sort.value}
          >
            <option value="asc">Ascending</option>
            <option value="desc">Descending</option>
          </select>
        </div>
      </header>

      <div className="movie_cards">
        {filtersMovie.map((movie) => {
          return <MovieCard key={movie.id} movie={movie} />;
        })}
      </div>
    </section>
  );
}

export default MovieList;
