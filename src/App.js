import { useEffect, useState } from "react";
import { Container } from "react-bootstrap";
import NavBar from "./components/Navbar";
import axios from "axios";
import MoviesList from "./components/MoviesList";
import MovieDetails from "./components/MovieDetails";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  const [movies, setMovies] = useState([]);
  const [pageCount, setPageCount] = useState(0);

  // Function to fetch all movies from the API
  const fetchMovies = async () => {
    const response = await axios.get(
      "https://api.themoviedb.org/3/movie/popular?language=ar&api_key=21d917d552f976b8efe2e20c7c413729"
    );
    setMovies(response.data.results);
    setPageCount(response.data.total_pages);
  };

  // Function to fetch movies for a specific page from the API
  const fetchMoviesPage = async (page) => {
    const response = await axios.get(
      `https://api.themoviedb.org/3/movie/top_rated?language=en-US&api_key=21d917d552f976b8efe2e20c7c413729&page=${page}`
    );
    setMovies(response.data.results);
    setPageCount(response.data.total_pages);
  };

  useEffect(() => {
    // Fetch all movies when the component mounts for the first time
    fetchMovies();
  }, []);

  // Function to search movies based on a given word
  const searchMovie = async (word) => {
    if (word === "") {
      // If the search word is empty, fetch all movies
      fetchMovies();
    } else {
      // Fetch movies based on the search word from the API
      const response = await axios.get(
        `https://api.themoviedb.org/3/search/movie?include_adult=false&api_key=21d917d552f976b8efe2e20c7c413729&query=${word}`
      );
      setMovies(response.data.results);
      setPageCount(response.data.total_pages);
    }
  };

  return (
    <div className="bg-dark text-light text-center ">
      {/* Render the Navbar component with the searchMovie function as a prop */}
      <NavBar searchMovie={searchMovie} />
      <Container className="py-5 ">
        <BrowserRouter>
          <Routes>
            {/* Route for the main page, render the MoviesList component with movies, fetchMoviesPage, and pageCount as props */}
            <Route
              path="/"
              element={
                <MoviesList
                  movies={movies}
                  fetchMoviesPage={fetchMoviesPage}
                  pageCount={pageCount}
                />
              }
            />
            {/* Route for individual movie details */}
            <Route path="/movie/:id" element={<MovieDetails />} />
          </Routes>
        </BrowserRouter>
      </Container>
    </div>
  );
}

export default App;
