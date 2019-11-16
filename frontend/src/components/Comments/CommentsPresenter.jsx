import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const TextWrapper = styled.form`
  padding: 14px 0 14px 10px;
`;
const TextArea = styled(TextareaAutosize)`
  && {
    border: none;
    height: 23px;
    resize: none;
    width: 100%;
    font-size: 20px;
    outline: none;
  }
`;
const CommentsPresenter = ({ message, setMessage, handleKeyPress }) => {
  return (
    <TextWrapper>
      <TextArea
        value={message}
        onChange={event => setMessage(event.target.value)}
        onKeyPress={handleKeyPress}
        placeholder="댓글 달기..."
      />
    </TextWrapper>
  );
};

export default CommentsPresenter;
