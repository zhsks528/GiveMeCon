import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { commentProduction } from "store/actions/production";
import CommentsPresenter from "./CommentsPresenter";

export default function CommentsContainer({ productionId }) {
  const [message, setMessage] = useState("");
  const isLoggedIn = useSelector(state => state.users.isLoggedIn);
  const dispatch = useDispatch();

  const handleKeyPress = event => {
    if (event.key === "Enter") {
      event.preventDefault();
      dispatch(commentProduction(productionId, message));
      setMessage("");
    }
  };
  return (
    <CommentsPresenter
      message={message}
      setMessage={setMessage}
      handleKeyPress={handleKeyPress}
      isLoggedIn={isLoggedIn}
    />
  );
}
