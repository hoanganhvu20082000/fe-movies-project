import React, { useEffect } from "react";
import styled, { keyframes } from "styled-components";
import { useDispatch, useSelector } from "react-redux";
import { getNFOriginal, getTopRate } from "../store/actions";
// const showModal = true;
function MoviesDetails(props) {
  const { movies, showModal, closeModal } = props;
  const dispatch = useDispatch();

  const { NetflixOriginals, TopRate } = useSelector(
    (state) => state?.infoMovies
  );
  useEffect(() => {
    dispatch(getNFOriginal());
  }, [dispatch]);
  useEffect(() => {
    dispatch(getTopRate());
  }, [dispatch]);
  console.log(movies);
  return (
    <MoviesDetailWapper>
      <div
        className={`backdrop ${showModal ? "showBackdrop" : "hiddenBackdrop"}`}
        onClick={closeModal}
      ></div>
      <div
        className={`modal ${showModal ? "showMoal" : "hideModal"}`}
        style={{
          backgroundImage: `url(https://file.hstatic.net/200000722513/article/gg-neon-light-fanfit-gaming-min_32d5a85dd071490ea8628c660513f8bd.jpg)`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="movieInfo">
            <h1 className="movieTitle">{movies.original_title}</h1>
            <p className="statistical">
              <span className="rating">09809809</span>
              <span className="popularity">09809809</span>
            </p>
            <p className="releaseDate">asdadasdasd</p>
            <p className="runtime">asdadasdasd</p>
            <p className="overview">asdadasdasd</p>
          </div>
        </div>
      </div>
    </MoviesDetailWapper>
  );
}
export default MoviesDetails;
const fadeIn = keyframes`
  0% { background: rgba(0, 0, 0, 0); }
  100% { background: rgba(0, 0, 0, 0.6); }
`;

const MoviesDetailWapper = styled.div`
  .backdrop {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 200;
    background-color: rgba(0, 0, 0, 0.6);
    animation: ${fadeIn} 1s cubic-bezier(0.17, 0.85, 0.45, 1) forwards;
  }
  .showBackdrop {
    display: flex;
  }
  .hiddenBackdrop {
    display: none;
  }
  .modal {
    position: fixed;
    top: 25%;
    left: 0;
    z-index: 300;
    height: 60%;
    width: 100%;
    margin: 0 auto;
    color: #fff;
    box-shadow: 0 15px 40px rbga(rbg(23, 24.24), 0.2);
    transition: all 0.3s ease;
    @media screen and (max-width: 1184px) {
      height: 70%;
    }
    @media screen and (max-width: 600px) {
      height: 80%;
    }

    .container {
      position: relative;
      width: 70%;
      height: 100%;
      background: linear-gradient(90deg, rgba(0, 0, 0, 0.94) 60%, transparent);
      @media screen and (max-width: 1184px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.94) 40%,
          rgba(0, 0, 0, 0.733) 40%,
          transparent
        );
        width: 88%;
      }
      @media screen and (max-width: 980px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.733) 40%,
          transparent
        );
        width: 100%;
      }
      @media screen and (max-width: 600px) {
        background: linear-gradient(
          90deg,
          rgba(0, 0, 0, 0.88) 60%,

          transparent
        );
        width: 100%;
      }
      .movieInfo {
        width: 65%;
        height: 100%;
        padding-left: 24px;
        color: #fff;
        font-size: 20px;
        padding-top: 30px;
        @media screen and (max-width: 600px) {
          font-size: 16px;
          width: 80%;
        }
        .movieTitle {
          margin-top: 30px;
        }
        .statistical {
          margin-top: 20px;
          display: flex;
          .rating {
            color: green;
          }
          .popularity {
            color: yellow;
            margin-left: 12px;
          }
        }
        .releaseDate .runtime {
          margin-top: 12px;
        }
        .overview {
          margin-top: 20px;
          color: rgba(255, 255, 255, 0.6);
          line-height: 1.4;
          font-size: 18px;
          @media screen and (max-width: 600px) {
            font-size: 14px;
          }
        }
      }
    }
  }
  .showMoal {
    top: 25%;
    opacity: 1;
    left: 0;
    visibility: visible;
    transition: 0.3s ease-in-out;
  }
  .hideModal {
    top: 0;
    opacity: 0;
    visibility: hidden;
    transition: 0.3s ease-in-out;
  }
`;
