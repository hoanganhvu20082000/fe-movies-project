import ReactDOM from "react-dom";
import axios from "axios";
import * as Types from "../types";
import ErrorNotification from "../../hooks/useMessage";
const API_KEY = "9b2353a43574ab461696c17102072d69";
const BASE_URL = "https://api.themoviedb.org/3";

export const getNFOriginal = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/now_playing?api_key=${API_KEY}&with_networks=213`
    );
    dispatch({
      type: Types.GET_NETFLIX_ORIGINAL,
      payload: result.data.results,
    });
  } catch (error) {
    let errorMessage;
    if (error.response && error.response.data.status_message) {
      errorMessage = error.response.data.status_message;
    } else {
      errorMessage = error.message;
    }
    // Hiển thị thông báo lỗi
    const errorNotification = document.createElement("div");
    document.body.appendChild(errorNotification);
    ReactDOM.render(
      <ErrorNotification message={errorMessage} />,
      errorNotification
    );
    // Xóa thông báo sau 5 giây
    setTimeout(() => {
      document.body.removeChild(errorNotification);
    }, 5000);
  }
};

export const getTopRate = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`
    );
    dispatch({
      type: Types.GET_TOP_RATE,
      payload: result.data.results,
    });
  } catch (error) {
    let errorMessage;
    if (error.response && error.response.data.status_message) {
      errorMessage = error.response.data.status_message;
    } else {
      errorMessage = error.message;
    }
    // Hiển thị thông báo lỗi
    const errorNotification = document.createElement("div");
    document.body.appendChild(errorNotification);
    ReactDOM.render(
      <ErrorNotification message={errorMessage} />,
      errorNotification
    );
    // Xóa thông báo sau 5 giây
    setTimeout(() => {
      document.body.removeChild(errorNotification);
    }, 5000);
  }
};
export const getPopular = () => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/movie/popular?api_key=${API_KEY}`
    );
    dispatch({
      type: Types.GET_POPULAR,
      payload: result.data.results,
    });
  } catch (error) {
    let errorMessage;
    if (error.response && error.response.data.status_message) {
      errorMessage = error.response.data.status_message;
    } else {
      errorMessage = error.message;
    }
    // Hiển thị thông báo lỗi
    const errorNotification = document.createElement("div");
    document.body.appendChild(errorNotification);
    ReactDOM.render(
      <ErrorNotification message={errorMessage} />,
      errorNotification
    );
    // Xóa thông báo sau 5 giây
    setTimeout(() => {
      document.body.removeChild(errorNotification);
    }, 5000);
  }
};

export const setMovieDetail = (movie) => (dispatch) => {
  dispatch({ type: Types?.SET_MOVIE_DETAIL, payload: movie });
};

export const getSearch = (keywords) => async (dispatch) => {
  try {
    const result = await axios.get(
      `${BASE_URL}/search/multi?include_adult=false&language=en-US&page=1&api_key=${API_KEY}`
    );
    dispatch({
      type: Types.SEARCH,
      payload: result.data.results,
    });
  } catch (error) {
    let errorMessage;
    if (error.response && error.response.data.status_message) {
      errorMessage = error.response.data.status_message;
    } else {
      errorMessage = error.message;
    }
    // Hiển thị thông báo lỗi
    const errorNotification = document.createElement("div");
    document.body.appendChild(errorNotification);
    ReactDOM.render(
      <ErrorNotification message={errorMessage} />,
      errorNotification
    );
    // Xóa thông báo sau 5 giây
    setTimeout(() => {
      document.body.removeChild(errorNotification);
    }, 5000);
  }
};
