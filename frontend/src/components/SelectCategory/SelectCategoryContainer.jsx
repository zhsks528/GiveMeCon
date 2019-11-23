import React, { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrend, getCategory, getFilterTrends } from "store/actions/trend";
import SelectCategoryPresenter from "./SelectCategoryPresenter";

export default function SelectCategoryContainer() {
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
        dispatch(getTrend());
      } else {
        dispatch(getFilterTrends(categoryId));
      }
    }
  }, [dispatch, categoryId]);

  const handleReset = event => {
    event.preventDefault();
    dispatch(getTrend());
    setCategoryId("0");
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
