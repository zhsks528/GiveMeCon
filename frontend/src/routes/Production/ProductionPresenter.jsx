import React from "react";
import { Route } from "react-router-dom";
import Header from "components/Header";
import ProduceMenu from "components/ProduceMenu";
import ProduceTotalList from "components/ProduceTotalList";
import ProduceMusicList from "components/ProduceMusicList";
import ProduceSportsList from "components/ProduceSportsList";
import ProduceMoviesList from "components/ProduceMoviesList";
import ProduceGamesList from "components/ProduceGamesList";
import Write from "components/Write";

const ProductionPresenter = ({ match, location }) => {
  return (
    <>
      <Header />
      {/* <ProduceMenu /> */}
      <Route exact path={match.url} component={ProduceTotalList} />
      <Route path={`${match.url}/music`} component={ProduceMusicList} />
      <Route path={`${match.url}/sports`} component={ProduceSportsList} />
      <Route path={`${match.url}/movies`} component={ProduceMoviesList} />
      <Route path={`${match.url}/games`} component={ProduceGamesList} />
      <Route path={`${match.url}/write`} component={Write} />
    </>
  );
};

export default ProductionPresenter;
