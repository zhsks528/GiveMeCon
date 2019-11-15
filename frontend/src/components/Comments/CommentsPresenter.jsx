import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const CommentsPresenter = ({ message, setMessage, handleKeyPress }) => {
  return (
    <form>
      <TextareaAutosize
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="댓글을 입력해주세요"
      />
    </form>
  );
};

export default CommentsPresenter;
