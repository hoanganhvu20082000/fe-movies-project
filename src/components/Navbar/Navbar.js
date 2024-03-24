import Logo from "../../assets/images/netflix-1-logo.svg";
import { CiSearch } from "react-icons/ci";
import styled from "styled-components";
import { useScrollY } from "../hooks";
import { useState } from "react";
// import { useNavigate } from "react-router-dom";

function Navbar(props) {
  const [scrollY] = useScrollY();
  const [key, setKey] = useState("");
  // const navigate = useNavigate();
  const handleInput = (e) => {
    let key = e.target.value;
    setKey(key);
    // if (key.length > 0) {
    //   navigate(`/search?keywords=${key}`);
    //   console.log("object");
    // }
  };
  return (
    <NavigationWapper
      style={
        scrollY < 50
          ? { backgroundColor: "transparent" }
          : { backgroundColor: "var(--color-background)" }
      }
    >
      <div className="navContainer">
        <div className="Logo">
          <img src={Logo} alt="" style={{ backgroundColor: "transparent" }} />
        </div>
        <div className="navSearch">
          <CiSearch className="iconSearch" />
          <input
            type="text"
            placeholder="Input title, genres, people"
            onChange={handleInput}
            value={key}
          />
        </div>
      </div>
    </NavigationWapper>
  );
}
export default Navbar;

const NavigationWapper = styled.div`
  width: 100%;
  height: 80px;
  position: fixed;
  top: 0;
  transition-timing-function: ease-in;
  transition: all 1s;
  z-index: 10;
  @media only screen and (max-width: 600px) {
    height: 100px;
  }
  .navContainer {
    background-color: transparent;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: flex-start;
    height: 100%;
    @media only screen and (max-width: 600px) {
      flex-direction: column;
      height: 100px;
    }
  }
  .Logo {
    width: 100px;
    height: 80px;
    cursor: pointer;
    padding: 12px;
    background-color: transparent;
    img {
      width: 100%;
      height: 100%;
      background-color: transparent;
    }
  }
  .navSearch {
    color: white;
    padding-right: 20px;
    display: flex;
    justify-content: flex-end;
    &:hover .iconSearch {
      color: red;
    }
    .iconSearch {
      width: 20px;
      height: 20px;
      cursor: pointer;
      transform: translateX(24px) translateY(10px);
      color: red;
    }
    input {
      font-size: 14px;
      border: 1px solid #fff;
      color: white;
      outline: none;
      width: 0;
      padding: 10px;
      cursor: pointer;
      opacity: 0;
      background: var(--color-background);
      transition: width 0.5s !important;

      &:focus {
        padding-left: 30px;
        width: 300px;
        cursor: text;
        opacity: 1;
        border-radius: 4px;
      }
    }
  }
`;
