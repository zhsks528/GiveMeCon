import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProduceTotalListPresenter from "./ProduceTotalListPresenter";
import { getProduction } from "store/actions/production";

export default function ProduceTotalListContainer() {
  const [loading, setLoading] = useState(true);
  const productions = useSelector(state => state.production.productions);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduction());
    setLoading(false);
  }, [dispatch]);

  return (
    <ProduceTotalListPresenter loading={loading} productions={productions} />
  );
}
