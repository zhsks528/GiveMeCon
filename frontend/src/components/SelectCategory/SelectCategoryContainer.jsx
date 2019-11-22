import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getTrend, getCategory, getFilterTrends } from "store/actions/trend";
import SelectCategoryPresenter from "./SelectCategoryPresenter";

export default function SelectCategoryContainer() {
  const [categoryId, setCategoryId] = useState(1);
  const categoryList = useSelector(state => state.trend.categoryList);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  useEffect(() => {
    dispatch(getFilterTrends(categoryId));
  }, [dispatch, categoryId]);

  const handleReset = event => {
    event.preventDefault();
    dispatch(getTrend());
    setCategoryId(1);
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
