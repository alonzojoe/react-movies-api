import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const fetchMoviesHandler = async () => {
    setLoading(true);
    const response = await fetch(`https://swapi.dev/api/films`);
    const data = await response.json();

    const transformedData = data.results.map((data) => {
      return {
        id: data.episode_id,
        title: data.title,
        openingText: data.opening_crawl,
        releaseDate: data.release_date,
      };
    });
    setMovies(transformedData);
    setLoading(false);
  };

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        {!loading && movies.length === 0 && <p>No Movies Available</p>}
        {!loading ? (
          <MoviesList movies={movies} />
        ) : (
          <p>Fetching Data Please Wait....</p>
        )}
        {}
      </section>
    </>
  );
}

export default App;
