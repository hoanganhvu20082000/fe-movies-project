import React from "react";

import Intro from "./../Intro/Intro";
import Menu from "../../components/Menu/Menu";
import Content from "../Contents/Content";

function Home(props) {
  return (
    <div>
      <Intro />
      <Content />
      <Menu />
    </div>
  );
}

export default Home;
