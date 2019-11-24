import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrend } from "store/actions/trend";
import TrendTotalPresenter from "./TrendTotalPresenter";

export default function TrendTotalContainer() {
  const [current, setCurrent] = useState(1);

  const trends = useSelector(state => state.trend.trends);
  const totalCount = useSelector(state => state.trend.totalCount);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getTrend(current));
  }, [dispatch, current]);

  const handlePageChange = page => {
    setCurrent(page);

    // 스크롤 최상단으로 올림
    window.scrollTo(0, 0);
  };

  return (
    <TrendTotalPresenter
      trends={trends}
      totalCount={totalCount}
      current={current}
      setCurrent={setCurrent}
      handlePageChange={handlePageChange}
    />
  );
}
