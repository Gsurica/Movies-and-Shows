import React from 'react';
import { useState } from 'react';
import { Link } from "react-router-dom";
import user from "../../images/image1.jpg";
import "./Header.scss";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../features/movies/movieSlice';

export const Header = () => {

  const [term, setTerm] = useState("");
  const dispatch = useDispatch();

  const submitHandler = e => {
    e.preventDefault();
    if (term === "") return alert("Please enter a search term!");
    dispatch(fetchAsyncMovies(term));
    dispatch(fetchAsyncShows(term));
    setTerm("");
  }

  return (
    <div className="header">
      <div className="logo">
        <Link to="/"> Movie App </Link>
      </div>
      <div className="search-bar">
        <form onSubmit={submitHandler}>
          <input type="text" value={ term } placeholder="search!!" onChange={ e => setTerm(e.target.value) } />
          <button type="submit"><i className="fa fa-search"></i></button>
        </form>
      </div>
      <div className="user-image">
        <img src={ user } alt="user" />
      </div>
    </div>
  )
}
