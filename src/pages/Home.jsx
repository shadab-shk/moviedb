import { React, useEffect, useState } from "react";
import "./Home.css";
// import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
// import { Carousel } from "react-responsive-carousel";
import { Link } from "react-router-dom";
import Carousel from "react-bootstrap/Carousel";
import MovieList from "../components/MovieList";

const Home = () => {
  const [popularMovies, setPopularMovies] = useState([]);
  useEffect(() => {
    fetch(
      //   "https://api.themoviedb.org/3/movie/550?api_key=88104c3e62d6f76eddb6a4a1c439abcf
      "https://api.themoviedb.org/3/movie/now_playing?api_key=88104c3e62d6f76eddb6a4a1c439abcf&language=en-US&page=1"
    ).then((res) => res.json().then((data) => setPopularMovies(data.results)));
  }, []);

  return (
    <>
      <div className="posterImage">
        <Carousel fade>
          {popularMovies.map((movie, id) => (
            <Carousel.Item key={id} interval={2000}>
              {/* key={id} */}
              <Link
                style={{ textDecoration: "none", color: "white" }}
                to={`/movie/${movie.id}`}
              >
                <div className="posterImage">
                  <img
                    src={`https://image.tmdb.org/t/p/original${
                      movie && movie.backdrop_path
                    }`}
                    className="d-block w-100"
                    alt={`${movie.original_title}`}
                  />
                </div>
                <div className="container">
                  <div className="posterImage_overLay">
                    <Carousel.Caption>
                      <h3 className="posterImage_title">
                        {movie ? movie.original_title : ""}
                      </h3>
                      <div className="posterImage_runtime">
                        <span>{movie ? movie.release_date : ""}</span>
                        <br />
                        <span style={{ gap: "10px" }}>
                          {movie ? movie.vote_average : ""}
                          <i className="fa-sharp fa-solid fa-star"></i>
                        </span>
                      </div>
                      <p className="posterImage_description">
                        {movie ? movie.overview : ""}
                      </p>
                    </Carousel.Caption>
                  </div>
                </div>
              </Link>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <MovieList />
      {/* <div className="poster">
        <Carousel
          showThumbs={false}
          autoPlay={true}
          transitionTime={3}
          infiniteLoop={true}
          showStatus={false}
        >
          {popularMovies.map((movie) => (
            <Link
              style={{ textDecoration: "none", color: "white" }}
              to={`/movie/${movie.id}`}
            >
              <div className="posterImage">
                <img
                  src={`https://image.tmdb.org/t/p/original${
                    movie && movie.backdrop_path
                  }`}
                  alt={`${movie.original_title}`}
                />
              </div>
              <div className="posterImage_overLay">
                <div className="posterImage_title">
                  {movie ? movie.original_title : ""}
                </div>
                <div className="posterImage_runtime">
                  {movie ? movie.release_date : ""}
                  <span className="posterImage_rating">
                    {movie ? movie.vote_average : ""}
                    <i className="fas fa-star" />{" "}
                  </span>
                </div>
                <div className="posterImage_description">
                  {movie ? movie.overview : ""}
                </div>
              </div>
            </Link>
          ))}
        </Carousel>
      </div> */}
      {/* <
        id="carouselExampleCaptions"
        className="carousel slide"
        data-bs-ride="false"
      > */}
      {/* <div className="carousel-indicators">
        {/* <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="0"
          className="active"
          aria-current="true"
          aria-label="Slide 1"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="1"
          aria-label="Slide 2"
        ></button>
        <button
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide-to="2"
          aria-label="Slide 3"
        ></button> */}
      {/* </div> */}
    </>
  );
};

export default Home;
