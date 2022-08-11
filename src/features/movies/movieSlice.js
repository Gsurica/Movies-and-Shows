import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import APIKey from '../../common/apis/MovieApiKey';

export const fetchAsyncMovies = createAsyncThunk("movies/fetchAsyncMovies", async (term) => {
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${term}&$type=movie`);
  return response.data;
});

export const fetchAsyncShows = createAsyncThunk("movies/fetchAsyncShows", async (term) => {
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&s=${term}&$type=series`);
  return response.data;
});

export const fetchAsyncMovieOrShowDetails = createAsyncThunk("movies/fetchAsyncMovieOrShowDetails", async (id) => {
  const response = await axios.get(`http://www.omdbapi.com/?apikey=${APIKey}&i=${id}&Plot=full`);
  return response.data;
});

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {}
}

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    removeSelectedMovieOrShow: (state, { payload }) => {
      state.selectedMovieOrShow = {}
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchAsyncMovies.pending, state => {
      console.log("Pending");
    });
    builder.addCase(fetchAsyncMovies.fulfilled, (state, { payload }) => {
      console.log("Fetched Successfully");
      state.movies = payload;
    });
    builder.addCase(fetchAsyncMovies.rejected, (state, { payload }) => {
      console.log("Rejected");
    });
    builder.addCase(fetchAsyncShows.fulfilled, (state, { payload }) => {
      state.shows = payload;
    });
    builder.addCase(fetchAsyncMovieOrShowDetails.fulfilled, (state, { payload }) => {
      state.selectedMovieOrShow = payload;
    });
  },
});

export const { removeSelectedMovieOrShow } = movieSlice.actions;
export default movieSlice.reducer;
