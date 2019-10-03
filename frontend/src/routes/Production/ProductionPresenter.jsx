import React from "react";
import Header from "components/Header";
import ProduceMenu from "components/ProduceMenu";
import ProduceTotalList from "components/ProduceTotalList";

const ProductionPresenter = () => {
  return (
    <>
      <Header />
      <ProduceMenu />
      <ProduceTotalList />
    </>
  );
};

export default ProductionPresenter;
