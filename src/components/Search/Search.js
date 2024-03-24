import React from "react";
import styled from "styled-components";
import { useViewport } from "../hooks";
const CC = [];
function Search(props) {
  const [windowWidth] = useViewport();
  return (
    <Searchpane>
      {CC && CC.length > 0 ? (
        <div
          className="searchContent"
          style={{
            gridAutoColumns: `repeat(${
              windowWidth > 1200
                ? 5
                : windowWidth > 992
                ? 4
                : windowWidth > 768
                ? 3
                : windowWidth > 600
                ? 2
                : 1
            },auto)`,
          }}
        >
          {CC?.map((movie, index) => (
            <div className="movieItem">
              <img src="" alt="" />
              <span>CC name</span>
            </div>
          ))}
        </div>
      ) : (
        <NotFound>
          <h1>NOT FOUND</h1>
        </NotFound>
      )}
    </Searchpane>
  );
}

export default Search;
const Searchpane = styled.div`
  width: 100%;
  min-height: 92vh;
  padding-top: 80px;
  background: #000000;
  transition: all 0.3s linear;
  .searchContent {
    padding: 40px 60px;
    display: grid;
    gap: 8px;
    &:hover .movieItem {
      opacity: 0.7;
    }
    .movieItem {
      position: relative;
      max-width: 400px;
      width: 100%;
      height: 200px;
      border-radius: 12px;
      margin: 20px 0;
      overflow: hidden;
      transform: scale(1);
      transition: all 0.3 linear;
      &:hover {
        transform: scale(1.2);
        z-index: 10;
        opacity: 1;
      }
      img {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }
      span {
        position: absolute;
        left: 0;
        right: 0;
        bottom: 0;
        text-align: center;
        padding: 4px;
        background: rgba(0, 0, 0, 0.5);
        color: #fff;
        font-weight: bold;
      }
    }
  }
`;
const NotFound = styled.div`
  padding: 5rem 8rem;
  color: #fff;
`;
