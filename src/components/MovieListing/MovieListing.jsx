import React from 'react';
import { useSelector } from 'react-redux';
import { MovieCard } from "../MovieCard/MovieCard";
import "./MovieListing.scss";
import { settings } from '../../common/settings';
import Slider from "react-slick";

export const MovieListing = () => {

  const movies = useSelector(state => state.movie.movies);
  const shows = useSelector(state => state.movie.shows);

  console.log(movies);
  console.log(shows);

  if (movies.response === "false") {
    return (
      <div className="movies-error">
        <h3>{ movies.Error }</h3>
      </div>
    );
  }

  if (shows.response === "false") {
    return (
      <div className="shows-error">
        <h3>{ shows.Error }</h3>
      </div>
    );
  }

  return (
    <div className="movie-wrapper">
      <div className="movie-list">
        <h2>Movies</h2>
        <div className="movie-container">
          <Slider { ...settings } >
            { movies.Search?.map((movie, index) => {
              return (
                <MovieCard key={ index } data={ movie } />
              )
            }) }
          </Slider>
        </div>
      </div>
      <div className="show-list">
        <h2>Shows</h2>
        <div className="movie-container">
          <Slider { ...settings }>
            { shows.Search?.map((movie, index) => {
              return (
                <MovieCard key={ index } data={ movie } />
              )
            }) }
          </Slider>
        </div>
      </div>
    </div>
  );
}
