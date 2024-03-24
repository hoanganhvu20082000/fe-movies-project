import styled from "styled-components";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import { useEffect, useRef, useState } from "react";
import { SmoothHorizaontalScrolling } from "../../utils";
import { useViewport } from "./../hooks/useViewport";
import { useDispatch, useSelector } from "react-redux";
import { setMovieDetail } from "../store/actions";
import MoviesDetails from "./../MoviesDetails/MoviesDetail";

function MoviesRow(props) {
  const { movies, title, isNetFlix } = props;

  const sliderRef = useRef(null);
  const movieRef = useRef(null);
  const [windowWidth] = useViewport();
  const [dragDown, setDragDown] = useState(0);
  const [dragMove, setDragMove] = useState(0);
  const [isShowModal, setIsShowModal] = useState(false);
  const [isDrag, setIsDrag] = useState(false);
  const dispatch = useDispatch;
  const handleMovie = () => {
    setIsShowModal(true);
  };

  console.log(movies);
  const handleScrollRight = () => {
    const maxScrollLeft =
      sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
    if (sliderRef.current.scrollLeft < maxScrollLeft) {
      SmoothHorizaontalScrolling(
        sliderRef.current,
        250,
        movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  const handleScrollLeft = () => {
    if (sliderRef.current.scrollLeft > 0) {
      SmoothHorizaontalScrolling(
        sliderRef.current,
        250,
        -movieRef.current.clientWidth * 2,
        sliderRef.current.scrollLeft
      );
    }
  };
  useEffect(() => {
    if (isDrag) {
      if (dragMove < dragDown) handleScrollRight();
      if (dragMove > dragDown) handleScrollLeft();
    }
  }, [dragMove, dragDown, isDrag]);
  const onDragStart = (e) => {
    setIsDrag(true);
    setDragDown(e.screenX);
  };
  const onDragEnd = () => {
    setIsDrag(false);
  };
  const onDragEnter = (e) => {
    setDragMove(e.screenX);
  };
  const handleCloseModal = () => {
    setIsShowModal(false);
  };
  return (
    <ContentWapper draggable="false">
      <h1 className="heading">{title}</h1>
      <SliderWapper
        ref={sliderRef}
        draggable="true"
        onDragStart={onDragStart}
        onDragEnd={onDragEnd}
        onDragEnter={onDragEnter}
        style={
          movies && movies?.length > 0
            ? {
                gridTemplateColumns: `repeat(${movies?.length},
                ${
                  windowWidth > 1200
                    ? "360px"
                    : windowWidth > 992
                    ? "300px"
                    : windowWidth > 768
                    ? "250px"
                    : "200px"
                }         
                )`,
              }
            : {}
        }
      >
        {movies &&
          movies?.length > 0 &&
          movies?.map((movie, index) => {
            if (movie?.poster_path && movie?.backdrop_path !== null) {
              let imageURL = isNetFlix
                ? `https://image.tmdb.org/t/p/original/${movie.poster_path}`
                : `https://image.tmdb.org/t/p/w500${movie.backdrop_path}`;
              return (
                <div
                  key={index}
                  className="movieItem"
                  ref={movieRef}
                  draggable="false"
                  onClick={() => handleMovie(movie)}
                >
                  <img src={imageURL} alt="" draggable="false" />
                  <div className="movieName">{movie?.title}</div>
                </div>
              );
            }
            return null; // Ensure a value is always returned
          })}
      </SliderWapper>
      <div
        className={`btnLeft ${isNetFlix && "isNetFlix"}`}
        onClick={handleScrollLeft}
      >
        <FiChevronLeft />
      </div>
      <div
        className={`btnRight ${isNetFlix && "isNetFlix"}`}
        onClick={handleScrollRight}
      >
        <FiChevronRight />
      </div>

      {isShowModal && (
        <MoviesDetails
          movie={movies}
          showModal={isShowModal}
          closeModal={handleCloseModal}
        />
      )}
    </ContentWapper>
  );
}
export default MoviesRow;
const ContentWapper = styled.div`
  background-color: #000000;
  color: #fff;
  padding: 20px 20px 0;
  position: relative;
  width: 100%;
  height: 100%;
  .heading {
    font-size: 18px;
    user-select: none;
  }
  .btnLeft {
    position: absolute;
    top: 50%;
    left: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
    &.isNetFlix {
      height: 100px;
      width: max-content;
    }
  }
  .btnRight {
    position: absolute;
    top: 50%;
    right: 30px;
    z-index: 20;
    transform-origin: center;
    cursor: pointer;
    background-color: rgba(0, 0, 0, 0.5);
    height: 50px;
    width: 40px;
    border-radius: 4px;
    display: flex;
    align-items: center;
    transform: translateY(-20%);
    &:hover {
      background-color: rgba(0, 0, 0, 0.5);
    }
    &:hover svg {
      opacity: 1;
      transform: scale(1.2);
    }
    svg {
      opacity: 0.7;
      font-size: 50px;
      transition: all 0.3s linear;
    }
    &.isNetFlix {
      height: 100px;
      width: max-content;
    }
  }
`;
const SliderWapper = styled.div`
  display: grid;
  gap: 10px;
  transition: all 0.3s linear;

  user-select: none;
  overflow-y: hidden;
  overflow-x: auto;
  overflow: hidden;
  padding-top: 28px;
  padding-bottom: 28px;
  scroll-behavior: smooth;

  &:hover .movieItem {
    opacity: 0.5;
  }
  .movieItem {
    transform: scale(1);
    max-width: 400px;
    max-height: 500px;
    width: 100%;
    height: 100%;
    transition: all 0.3 linear;
    user-select: none;
    overflow: hidden;
    border-radius: 6px;
    transform: center left;
    position: relative;
    &:hover {
      transform: scale(1.1);
      z-index: 10;
      opacity: 1;
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
    .movieName {
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      padding: 4px;
      text-align: center;
      font-size: 14px;
      background-color: rgba(0, 0, 0, 0.65);
    }
  }
`;
