import React, { useState } from "react";
import MoviesList from "./components/MoviesList";
import "./App.css";

function App() {
  const [movies, setMovies] = useState([]);

  const fetchMoviesHandler = async () => {
    await fetch(`https://swapi.dev/api/films`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        const transformedData = data.results.map((data) => {
          return {
            // ...data,
            id: data.episode_id,
            title: data.title,
            openingText: data.opening_crawl,
            releaseDate: data.release_date,
          };
        });
        setMovies(transformedData);
      })
      .catch((e) => {
        console.log("Error in fetching data:", e);
      });
  };

  return (
    <>
      <section>
        <button onClick={fetchMoviesHandler}>Fetch Movies</button>
      </section>
      <section>
        <MoviesList movies={movies} />
      </section>
    </>
  );
}

export default App;
