import React from "react";
import MovieCard from "./MovieCard";
import { Row } from "react-bootstrap";
import MoviePagination from "./Pagination";

const MoviesList = ({ movies, fetchMoviesPage, pageCount }) => {
  return (
    <Row>
      {/* Check if there are any movies */}
      {movies.length >= 1 ? (
        // If there are movies, map through the list and render each MovieCard component
        movies.map((movie) => {
          return <MovieCard key={movie.id} Movie={movie} />;
        })
      ) : (
        // If there are no movies, display a message
        <h3 className="fs-1">لا يوجد أي فيلم بهذا الإسم</h3>
      )}
      {/* Display pagination component if there are movies */}
      {movies.length >= 1 ? (
        <MoviePagination
          fetchMoviesPage={fetchMoviesPage}
          pageCount={pageCount}
        />
      ) : null}
    </Row>
  );
};

export default MoviesList;
