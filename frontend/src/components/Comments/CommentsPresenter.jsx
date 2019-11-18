import React from "react";
import styled from "styled-components";
import TextareaAutosize from "react-textarea-autosize";

const TextWrapper = styled.form`
  margin: 14px 0 14px 0;
`;

const TextArea = styled(TextareaAutosize)`
  && {
    padding: 10px 0;
    height: 23px;
    resize: none;
    width: 100%;
    font-size: 20px;
    outline: none;
    overflow: hidden;
    border: none;
    border-bottom: 2px solid lightgray;
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
