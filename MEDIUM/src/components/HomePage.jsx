import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY; // Allow use of environment variable for API key on Vite

const URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w200";

const SearchMovie = () => {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!query) return;

    try {
      const res = await fetch(
        `${URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`,
      );
      const data = await res.json();
      setMovies(data.results || []);
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="home-container">
      <h1> Search Your Movie:</h1>
      <form className="search-form" onSubmit={handleSearch}>
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search movies..."
        />
        <button type="submit">Search</button>
      </form>

      <div className="movies-grid">
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div className="movie-card" key={movie.id}>
              <Link to={`/movie/${movie.id}`}>
                <img
                  src={
                    movie.poster_path
                      ? `${IMAGE_URL}${movie.poster_path}`
                      : "https://via.placeholder.com/200x300"
                  }
                  alt={movie.title}
                />
                <h4>
                  {movie.title} ({movie.release_date?.slice(0, 4)})
                </h4>
              </Link>
            </div>
          ))
        ) : (
          <p>Enter a movie title to see the list of films.</p>
        )}
      </div>
    </div>
  );
};

export default SearchMovie;
