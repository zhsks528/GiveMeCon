import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrend, getCategory, getFilterTrends } from "store/actions/trend";
import SelectCategoryPresenter from "./SelectCategoryPresenter";

export default function SelectCategoryContainer({ setCurrent }) {
  const [categoryId, setCategoryId] = useState("0");
  const categoryList = useSelector(state => state.trend.categoryList);

  const dispatch = useDispatch();
  const mounted = useRef();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (categoryId === "0") {
        dispatch(getTrend(1));
        setCurrent(1);
      } else {
        dispatch(getFilterTrends(categoryId));
        setCurrent(1);
      }
    }
  }, [dispatch, categoryId]);

  const handleReset = event => {
    event.preventDefault();
    dispatch(getTrend(1));
    setCategoryId("0");
    setCurrent(1);
  };

  return (
    <SelectCategoryPresenter
      categoryId={categoryId}
      setCategoryId={setCategoryId}
      categoryList={categoryList}
      handleReset={handleReset}
    />
  );
}
