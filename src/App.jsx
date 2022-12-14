import "./App.css";
import React from "react";
import { BrowserRouter as HashRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/Header";
import Home from "./pages/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import MovieList from "./components/MovieList";
import MovieDetail from "./pages/MovieDetail";
import Search from "./pages/Search";
import About from "./pages/About";

function App() {
  return (
    <div className="App">
      <HashRouter basename="/moviedb/">
        <Header />
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="movie/:id" index element={<MovieDetail />}></Route>
          <Route path="movies/:type" index element={<MovieList />}></Route>
          <Route path="/search/movie" index element={<Search />}></Route>
          <Route path="/about" index element={<About />}></Route>
          <Route path="/*" index element={<h1>Error Page</h1>}></Route>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
