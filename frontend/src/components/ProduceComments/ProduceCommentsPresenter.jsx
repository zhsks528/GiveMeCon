import React from "react";

const ProduceCommentsPresenter = ({ comments }) => {
  return (
    <div>
      <ul>
        {comments.map(comment => (
          <li key={comment.id}>
            <span>
              {comment.creator.username} {comment.message}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ProduceCommentsPresenter;
