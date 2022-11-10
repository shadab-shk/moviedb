import { React, useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./card.css";
import Card from "react-bootstrap/Card";

const MovieCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   newFunction(setIsLoading);
  // }, []);
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  return (
    <>
      {/* {isLoading ? (
         <SkeletonTheme baseColor="#202020" highlightColor="#444">
         <SkeletonTheme>
          <div className="movie-card">
            <p>
              <Skeleton count={3} />
            </p>
          </div>
        </SkeletonTheme>
      ) : ( */}

      <Link
        to={`/movie/${movie.id}`}
        style={{ textDecoration: "none", color: "white" }}
      >
        <Card
          className="bg-dark text-white movie-card"
          style={{ width: "13rem", margin: "1rem" }}
        >
          <Card.Img
            src={`https://image.tmdb.org/t/p/original${
              movie ? movie.poster_path : ""
            }`}
            alt={`${movie.original_title}`}
          />
        </Card>
      </Link>

      {/* )} */}
    </>
  );
};

export default MovieCard;
