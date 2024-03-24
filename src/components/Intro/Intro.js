import ReactPlayer from "react-player";
import { VscMute, VscUnmute } from "react-icons/vsc";

import styled from "styled-components";
import { useState } from "react";
function Intro(props) {
  const [isMute, setIsMute] = useState(false);

  return (
    <IntroContainerWapper>
      <ReactPlayer
        playing={true}
        width="100%"
        height="100%"
        volume={1}
        muted={isMute}
        loop={true}
        url="https://vimeo.com/812172698"
        className="videoIntro"
      />

      <div className="infoIntro">
        <h1 className="headingIntro">NetFlix Elite</h1>
        <p className="overviewIntro">
          Netflix Elite launch Campain Director:...........
        </p>
      </div>
      {isMute ? (
        <VscMute
          className="btnVolume"
          onClick={() => setIsMute((prev) => !prev)}
        />
      ) : (
        <VscUnmute
          className="btnVolume"
          onClick={() => setIsMute((prev) => !prev)}
        />
      )}
      <div className="fadeBottom"></div>
    </IntroContainerWapper>
  );
}

export default Intro;
const IntroContainerWapper = styled.div`
  background-color: #000000;
  position: relative;
  color: #fff;
  padding-top: 56%;
  .videoIntro {
    position: absolute;
    top: 0;
    left: 0;
  }
  .infoIntro {
    position: absolute;
    top: 140px;
    left: 30px;
    @media screen and (max-width: 800px) {
      top: 120px;
      left: 25px;
    }
    @media screen and (max-width: 600px) {
      top: 100px;
      left: 15px;
    }
    .headingIntro {
      font-size: 60px;
      transition: all 0.3s ease;
      @media screen and (max-width: 800px) {
        font-size: 40px;
      }
      @media screen and (max-width: 800px) {
        font-size: 24px;
      }
    }
    .overviewIntro {
      max-width: 550px;
      width: 100%;
      line-height: 1.3;
      padding-top: 25px;
      font-size: 18px;
      @media screen and (max-width: 800px) {
        font-size: 16px;
      }
      @media screen and (max-width: 800px) {
        font-size: 14px;
      }
    }
  }
  .btnVolume {
    position: absolute;
    height: 40px;
    width: 40px;
    right: 10%;
    top: 50%;
    cursor: pointer;
    border-radius: 50%;
    padding: 6px;
    color: #bbb;
    border: #fff solid 1px;
    transition: all 0.3s ease;
    transform: scale(1);
    &:hover {
      color: #fff;
      transform: scale(1.2);
      background-color: rgba(211, 211, 211, 0.18);
    }
    @media screen and (max-width: 800px) {
      height: 30px;
      width: 30px;
      padding: 4px;
    }
    @media screen and (max-width: 800px) {
      height: 20px;
      width: 20px;
      padding: 1px;
    }
  }
  .fadeBottom {
    position: absolute;
    margin-top: 12px;
    bottom: 0;
    width: 100%;
    height: 40px; /* Set a specific height */
    background-image: linear-gradient(
      180deg,
      transparent,
      rgba(15, 15, 15, 0.6) 40%,
      rgb(17, 17, 17),
      rgb(17, 17, 17)
    );
  }
`;
