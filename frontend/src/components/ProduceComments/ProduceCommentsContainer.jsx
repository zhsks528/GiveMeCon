import React from "react";
import ProduceCommentsPresenter from "./ProduceCommentsPresenter";

export default function ProduceCommentsContainer({ comments }) {
  return <ProduceCommentsPresenter comments={comments} />;
}
