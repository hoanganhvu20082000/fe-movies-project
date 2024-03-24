import React from "react";
import styled from "styled-components";

const Notification = styled.div`
  position: fixed;
  top: 50%;
  margin-top: 20px;
  right: 0;
  top: 0;
  transform: translate(0, -50%);
  background-color: #ffcccc;
  color: #ff0000;
  padding: 10px 20px;
  border-radius: 5px;
`;

const ErrorNotification = ({ message }) => {
  return <Notification>{message}</Notification>;
};

export default ErrorNotification;
