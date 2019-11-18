import React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Route } from "react-router-dom";
import TrendMenu from "components/TrendMenu";
import Header from "components/Header";
import TrendTotal from "components/TrendTotal";

const Post2 = () => {
  return <div>b</div>;
};

const Post3 = () => {
  return <div>c</div>;
};

const Post4 = () => {
  return <div>d</div>;
};
const TrendPresenter = ({ match }) => {
  return (
    <>
      <Header />
      {/* <TrendMenu /> */}
      <Route exact path={match.url} component={TrendTotal} />
      <Route path={`${match.url}/sports`} component={Post2} />
      <Route path={`${match.url}/movies`} component={Post3} />
      <Route path={`${match.url}/games`} component={Post4} />
    </>
  );
};

export default TrendPresenter;
