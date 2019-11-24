import React from "react";
import styled from "styled-components";
import NotFound from "components/asset/images/NotFound.png";

const ImageContainer = styled.div`
  justify-content: center;
  display: flex;
  align-items: center;
`;

const NotData = () => {
  return (
    <ImageContainer>
      <img src={NotFound} alt="Not Found" />
    </ImageContainer>
  );
};

export default NotData;
