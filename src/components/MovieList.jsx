import React, { useState, useEffect } from "react";
import MovieCard from "./MovieCard";
import "./MovieList.css";
import { useParams } from "react-router-dom";
const MovieList = (props) => {
  const [movieList, setMovieList] = useState([]);
  const { type } = useParams();

  useEffect(() => {
    getData();
  }, []);

  useEffect(() => {
    getData();
  }, [type]);

  const getData = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${
        type ? type : "popular"
      }?api_key=88104c3e62d6f76eddb6a4a1c439abcf&language=en-US&page=1`
    )
      .then((res) => res.json())
      .then((data) => setMovieList(data.results));
  };

  return (
    <div className="movie_list">
      <h2 className="list_title">{(type ? type : "popular").toUpperCase()}</h2>
      <div className="list_card">
        {movieList.map((movie, id) => (
          <MovieCard key={id} movie={movie} />
        ))}
      </div>
    </div>
  );
};

export default MovieList;
