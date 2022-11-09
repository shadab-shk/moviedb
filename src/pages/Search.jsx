import React, { useState, useEffect, useRef } from "react";
import MovieCard from "../components/MovieCard";
import "./Search.css";

const Search = () => {
  const [search, setSearch] = useState(undefined);
  const [movieList, setMovieList] = useState([]);
  const SearchValue = useRef();
  //   let val = search(SearchValue.current.value);
  const searchMovie = (movieName) => {
    fetch(
      `https://api.themoviedb.org/3/search/movie?api_key=88104c3e62d6f76eddb6a4a1c439abcf&language=en-US&query=${movieName}&page=1&include_adult=false`
    )
      .then((res) => res.json())
      //   .then((val) => console.log(val));
      .then((val) => setMovieList(val.results));
    // console.log(e.target.value);
    // console.log(setSearch);
  };
  useEffect(() => {
    if (search !== undefined) {
      searchMovie(search);
    }
  }, [search]);

  return (
    <>
      <div className="container">
        <h1>Search Movies Here</h1>
      </div>
      <div className="container my-2">
        {/* <nav className="navbar navbar-light "> */}
        <div className="d-flex justify-content-around">
          <div className="d-flex ">
            <div className="p-2">
              <input
                className="form-control my-2 mr-lg-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
                ref={SearchValue}
                // value={query}
                // onChange={searchMovie}
              />
            </div>
            <div className="p-2">
              <button
                className="btn btn-outline-success my-2 my-sm-2"
                // type="submit"
                onClick={() => {
                  console.log(SearchValue.current.value.toString());
                  setSearch(SearchValue.current.value.toString());
                  //   searchMovie();
                }}
              >
                Search
              </button>
            </div>
          </div>
        </div>

        {/* <MovieList></MovieList> */}
      </div>
      <div className="movie_list">
        <div className="movie_list">
          <div className="list_card">
            {movieList.map((movie, id) => (
              <MovieCard key={id} movie={movie} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};
export default Search;
