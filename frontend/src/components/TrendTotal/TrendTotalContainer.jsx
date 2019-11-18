import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrend } from "store/actions/trend";
import TrendTotalPresenter from "./TrendTotalPresenter";

export default function TrendTotalContainer() {
  const trends = useSelector(state => state.trend.trends);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrend());
  }, [dispatch]);

  return <TrendTotalPresenter trends={trends} />;
}
