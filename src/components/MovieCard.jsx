import { React, useState, useEffect } from "react";
import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import { Link } from "react-router-dom";
import "./card.css";
// import Card from "react-bootstrap/card";

const MovieCard = ({ movie }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    newFunction(setIsLoading);
  }, []);
  useEffect(() => {
    setIsLoading(false);
  }, [isLoading]);

  return (
    <>
      {/* <div className="container mt-5"> */}
      {isLoading ? (
        <SkeletonTheme baseColor="#202020" highlightColor="#444">
          <div className="movie-card">
            <p>
              <Skeleton count={3} />
            </p>
          </div>
        </SkeletonTheme>
      ) : (
        //</> {/* <SkeletonTheme
        //  styleOptions={{ baseColor: "white" }}
        //  highlightColor="#444"
        //  >
        //    <Skeleton height={300} duration={2} />
        //  </SkeletonTheme> */}
        // </div>
        // <div className="row justify-content-center">
        //   <Link
        //     to={`movie/${movie.id}`}
        //     style={{ textDecoration: "none", color: "white" }}>
        //     <div className="card movie_card">
        //       <img
        //         className="card-img-top"
        //         src={`https://image.tmdb.org/t/p/original${
        //           movie ? movie.poster_path : ""
        //         }`}
        //         alt={`${movie.original_title}`}
        //       />
        //       <div className="card-body">
        //         <div className="card-title">
        //           {movie ? movie.original_title : ""}
        //         </div>
        //         <div className="movie_info">
        //           {movie ? movie.release_date : ""}
        //         </div>
        //         <div className="cards_description">
        //           {movie ? movie.overview.slice(0, 118) + "..." : ""}
        //         </div>
        //       </div>
        //       <div />
        // <Card.ImgOverlay>
        //    <Card.Title>{movie ? movie.original_title : ""}</Card.Title>
        //   <Card.Text>{movie ? movie.release_date : ""}</Card.Text>
        //  <Card.Text>
        //      {movie ? movie.overview.slice(0, 118) + "..." : ""}
        //    </Card.Text>
        // </Card.ImgOverlay> */}

        <Link
          to={`/movie/${movie.id}`}
          style={{ textDecoration: "none", color: "white" }}
        >
          <div className="movie-card">
            <div className="movie-header">
              <div className="header-icon-container">
                <img
                  className="card-img-top"
                  src={`https://image.tmdb.org/t/p/original${
                    movie ? movie.poster_path : ""
                  }`}
                  alt={`${movie.original_title}`}
                />
              </div>
              <br />
            </div>

            {/* <div className="">
              <div className="movie-content-header">
                {movie ? movie.original_title : ""}
              </div>
              <div className="movie-info">
                <div className="info-section">
                  <label>{movie ? movie.release_date : ""}</label>
                  <span>
                    {movie ? movie.overview.slice(0, 118) + "..." : ""}
                  </span>
                </div>
              </div>
            </div> */}
          </div>
        </Link>

        // <Link
        //   to={`movie/${movie.id}`}
        //   style={{ textDecoration: "none", color: "white" }}
        // >
        //   <div className="cards">
        //     <img
        //       className="cards_img"
        //       src={`https://image.tmdb.org/t/p/original${
        //         movie ? movie.poster_path : ""
        //       }`}
        //       alt={`${movie.original_title}`}
        //     />
        //     <div className="cards_overlay">
        //       <div className="cards_title">
        //         {movie ? movie.original_title : ""}
        //       </div>
        //       <div className="cards_runtime">
        //         {movie ? movie.release_date : ""}
        //       </div>
        //       <div className="cards_description">
        //         {movie ? movie.overview.slice(0, 118) + "..." : ""}
        //       </div>
        //     </div>
        //     {/* <Card.ImgOverlay>
        //       <Card.Title>{movie ? movie.original_title : ""}</Card.Title>
        //       <Card.Text>{movie ? movie.release_date : ""}</Card.Text>
        //       <Card.Text>
        //         {movie ? movie.overview.slice(0, 118) + "..." : ""}
        //       </Card.Text>
        //     </Card.ImgOverlay> */}
        //   </div>
        // </Link>
      )}
    </>
  );
};

export default MovieCard;
async function newFunction(setIsLoading) {
  await setTimeout(() => {
    setIsLoading(false);
  }, 1500);
}
