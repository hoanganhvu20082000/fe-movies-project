import React from "react";
import { randomRgbaColor } from "../../utils";

function MenuItem(props) {
  const { name, Icon } = props;
  return (
    <div className="subMenu">
      <Icon className="icon" style={{ color: randomRgbaColor(1) }} />
      <span>{name}</span>
    </div>
  );
}

export default MenuItem;
