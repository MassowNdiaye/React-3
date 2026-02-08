import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import "./MovieDetail.css";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const URL = "https://api.themoviedb.org/3";
const IMAGE_URL = "https://image.tmdb.org/t/p/w500";

const MovieDetail = () => {
  const { id } = useParams(); // Get movie ID from URL params
  const [movie, setMovie] = useState(null); // Creating a state variable initially null

  useEffect(() => {
    // Fetch movie details when component mounts
    const fetchMovie = async () => {
      try {
        const res = await fetch(`${URL}/movie/${id}?api_key=${API_KEY}`);
        const data = await res.json();
        setMovie(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchMovie();
  }, [id]);

  if (!movie) return <p>Loading...</p>;

  return (
    <div className="detail-container">
      <Link to="/"> Back to Search Page</Link>
      <h1>
        {/* Keeping the first 4 numbers of the release day*/}
        {movie.title} ({movie.release_date ? movie.release_date.slice(0, 4) : "N/A"}) 
      </h1>
      <img
        src={
          movie.poster_path
            ? `${IMAGE_URL}${movie.poster_path}`
            : "https://via.placeholder.com/500x750"
        }
        alt={movie.title}
      />
      <p>
        <strong>Genres:</strong> {movie.genres.map((g) => g.name).join(", ")}
      </p>
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>
      <p>
        <strong>Rating:</strong> {movie.vote_average} / 10
      </p>
      <p>
        <strong>Runtime:</strong> {movie.runtime} minutes
      </p>
    </div>
  );
};

export default MovieDetail;
