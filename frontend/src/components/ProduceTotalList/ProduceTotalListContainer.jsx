import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ProduceTotalListPresenter from "./ProduceTotalListPresenter";
import { getProduction } from "store/actions/production";

export default function ProduceTotalListContainer() {
  const [loading, setLoading] = useState(true);
  const [anchorEl, setAnchorEl] = useState(null);

  const productions = useSelector(state => state.production.productions);
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProduction());
    setLoading(false);
  }, [dispatch]);

  const handleClick = event => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <ProduceTotalListPresenter
      loading={loading}
      productions={productions}
      isLoggedIn={isLoggedIn}
      anchorEl={anchorEl}
      handleClick={handleClick}
      handleClose={handleClose}
    />
  );
}
