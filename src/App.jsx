import "./App.css";
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" index element={<MovieDetail />}></Route>
          <Route path="movies/:type" index element={<MovieList />}></Route>
          <Route path="/search/movie" index element={<Search />}></Route>
          <Route path="/*" index element={<h1>Error Page</h1>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
