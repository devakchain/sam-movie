import React from "react";

function FilterGroup({ handleFilter, minRating, ratings }) {
  return (
    <ul className="movie_filter">
      {ratings.map((rating) => {
        return (
          <li
            key={rating}
            className={
              minRating === rating
                ? "movie_filter_item active"
                : "movie_filter_item"
            }
            onClick={() => {
              handleFilter(rating);
            }}
          >
            {rating}+ star
          </li>
        );
      })}
    </ul>
  );
}

export default FilterGroup;
