import axios from "axios";
import React, { useEffect, useState } from "react";
import { Col, Row } from "react-bootstrap";
import { Link, useParams } from "react-router-dom";

const MovieDetails = () => {
  const [movie, setMovie] = useState({});
  const params = useParams();

  // Function to fetch details of a specific movie from the API
  const fetchMovieDetails = async () => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/${params.id}?language=ar&api_key=21d917d552f976b8efe2e20c7c413729`
    );
    setMovie(response.data);
  };

  useEffect(() => {
    // Fetch movie details when the component mounts for the first time
    fetchMovieDetails();
  }, []);

  return (
    <div className="py-5">
      <Row className="align-items-center">
        <Col md="6" xs="12" sm="12">
          {/* Display movie poster */}
          <img
            className="img-fluid w-50"
            src={`http://image.tmdb.org/t/p/w500/${movie.poster_path}`}
            alt="movie"
          />
        </Col>
        <Col md="6" xs="12" sm="12" className="mt-4 mt-md-0">
          {/* Display movie details */}
          <p className="border-bottom border-secondary fs-2">
            اسم الفيلم : {movie.title}
          </p>
          <p className="border-bottom border-secondary fs-2">
            تاريخ الفيلم : {movie.release_date}
          </p>
          <p className="border-bottom border-secondary fs-2">
            عدد المقيمين : {movie.vote_count}
          </p>
          <p className="border-bottom border-secondary fs-2">
            تقييم الفيلم : {movie.vote_average}
          </p>
        </Col>
      </Row>

      <Row className="justify-content-center ">
        <Col md="12" xs="12" sm="12" className="my-3 ">
          <div className="d-flex align-items-start flex-column">
            {/* Display movie overview or a fallback message */}
            <div>
              <p className="fs-2 border-bottom"> القصة : </p>
            </div>
            <div>
              <p className="fs-4">
                {movie.overview ? (
                  movie.overview
                ) : (
                  <p className="fs-4">
                    لا يوجد وصف لهذا الفيلم لكن اسم الفيلم هو {movie.title} وتم
                    صنعه عام {movie.release_date} وتم تقييمه عدد
                    {movie.vote_count} مرة
                  </p>
                )}
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row className="justify-content-center ">
        <Col
          md="10"
          xs="12"
          sm="12"
          className="mt-2 d-flex justify-content-center"
        >
          {/* Link to go back to the main page */}
          <Link to="/">
            <button className="btn btn-lg btn-secondary mx-2">
              عودة للرئيسية
            </button>
          </Link>
          {/* Display a button to watch the movie if a homepage exists */}
          {movie.homepage && (
            <a href={movie.homepage}>
              <button className="btn btn-lg btn-secondary ">
                مشاهدة الفيلم
              </button>
            </a>
          )}
        </Col>
      </Row>
    </div>
  );
};

export default MovieDetails;
