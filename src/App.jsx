import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import './App.scss'

import { Header } from "./components/Header/Header";
import { Home } from "./components/Home/Home";
import { MovieDetails } from "./components/Moviedetails/MovieDetails";
import { Footer } from "./components/Footer/Footer";
import { PageNotFound } from "./components/PageNotFound/PageNotFound";

export default function App () {
  return (
    <BrowserRouter>
      <Header />
      <div className="container">
        <Routes>
          <Route path="/" element={ <Home /> } />
          <Route path="/movie/:imdbID" element={ <MovieDetails /> } />
          <Route path="*" element={<PageNotFound /> } />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  )
}
