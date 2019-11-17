import React from "react";
import { useDispatch } from "react-redux";
import ProduceCommentsPresenter from "./ProduceCommentsPresenter";
import { commentDelete } from "store/actions/production";

export default function ProduceCommentsContainer({ comments }) {
  const dispatch = useDispatch();

  const handleDelete = commentId => {
    dispatch(commentDelete(commentId));
  };
  return (
    <ProduceCommentsPresenter comments={comments} handleDelete={handleDelete} />
  );
}
