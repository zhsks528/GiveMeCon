import React from "react";
import styled from "styled-components";
import Loader from "react-loader-spinner";

const LoadingCircle = styled(Loader)`
  && {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

const Loading = () => {
  return (
    <LoadingCircle
      type="Puff"
      color="#f7323f"
      height={70}
      width={70}
      // timeout={3000} //3 secs
    />
  );
};

export default Loading;
