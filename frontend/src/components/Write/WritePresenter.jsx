import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 80%;
  margin: 0 auto;
`;
const RowsContainer = styled.div`
  display: flex;
  margin-bottom: 20px;
`;

const Title = styled.div`
  margin-right: 20px;
`;
const ColumnContainer = styled.div`
  margin-bottom: 20px;
`;

const ThumbnailBox = styled.div`
  width: 80%;
  height: 400px;
  overflow: auto;
`;
const ThumbnailContainer = styled.div`
  display: grid;
  grid-auto-flow: row;
  grid-template-columns: repeat(auto-fill, 100px);
  grid-gap: 20px;
`;
const Thumbnail = styled.img`
  width: 100px;
  height: 100px;
  border: 2px solid #6b6b6b;
  border-radius: 15px;
`;
const WritePresenter = ({
  categoryList,
  handleSubmit,
  setCategory,
  setTitle,
  setContent,
  setAuthor,
  setTag,
  handleImageChange,
  files,
  imgUrl
}) => {
  return (
    <Wrapper>
      <form onSubmit={handleSubmit} method="POST">
        <RowsContainer>
          <Title>유형</Title>
          <select onChange={event => setCategory(event.target.value)}>
            {categoryList.map(item => (
              <option key={item.category_id} value={item.category_name}>
                {item.category_name}
              </option>
            ))}
          </select>
        </RowsContainer>
        <RowsContainer>
          <Title>제목</Title>
          <input
            name="title"
            type="text"
            placeholder="제목을 입력해주세요"
            onChange={event => setTitle(event.target.value)}
          />
        </RowsContainer>
        <RowsContainer>
          <Title>작성자</Title>
          <input
            name="author"
            type="text"
            onChange={event => setAuthor(event.target.value)}
          />
        </RowsContainer>
        <ColumnContainer>
          <div>이미지</div>
          <input
            name="image"
            type="file"
            onChange={handleImageChange}
            multiple
          />
          <>
            <ThumbnailContainer>
              {imgUrl.map(image => (
                <Thumbnail src={image} alt="이미지" />
              ))}
            </ThumbnailContainer>
          </>
        </ColumnContainer>
        <ColumnContainer>
          <div>설명</div>
          <input
            name="dept"
            type="text"
            onChange={event => setContent(event.target.value)}
          />
        </ColumnContainer>
        <ColumnContainer>
          <div>태그</div>
          <input
            name="tag"
            type="text"
            onChange={event => setTag(event.target.value)}
          />
        </ColumnContainer>
        <input type="submit" value="작성" />
      </form>
    </Wrapper>
  );
};

export default WritePresenter;
