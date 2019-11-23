import React from "react";
import styled from "styled-components";
// import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faExclamationTriangle } from "@fortawesome/free-solid-svg-icons";

const ThumbnailBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

const NoImageBox = styled(ThumbnailBox)`
  background: black;
`;

const NoImage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #ffcc00;
`;

const NoIcon = styled(FontAwesomeIcon)`
  font-size: 40px;
`;

const NotImage = () => {
  return (
    <NoImageBox>
      <NoImage>
        <NoIcon icon={faExclamationTriangle} />
        <div>No Image</div>
      </NoImage>
    </NoImageBox>
  );
};

export default NotImage;
