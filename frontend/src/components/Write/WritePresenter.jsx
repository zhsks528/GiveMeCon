import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import TitleBox from "components/TitleBox";
import TextareaAutosize from "react-textarea-autosize";

const Wrapper = styled.div`
  width: 60%;
  margin: 0 auto;
`;

const ButtonContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  margin-bottom: 40px;
`;

const PrevBtn = styled(Link)`
  cursor: pointer;
  border-radius: 10px;
  background: #f7323f;
  color: white;
  text-decoration: none;
  padding: 5px 10px;

  &:hover {
    color: yellow;
  }
`;

const RowsContainer = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

const Title = styled.div`
  margin-right: 20px;
  min-width: 40px;
`;

const Select = styled.select`
  border: none;
  border-bottom: 2px solid;
  padding: 10px;
`;

const Input = styled.input`
  border: none;
  border-bottom: 2px solid;
  padding: 10px;
`;

const ColumnContainer = styled.div`
  margin-bottom: 20px;
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

const InfoGrid = styled.div`
  display: grid;
  grid-auto-flow: column;
  grid-gap: 40px;
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
    border-bottom: 2px solid;
  }
`;

const Button = styled.input`
  border: none;
  border-radius: 14px;
  background: #15933a;
  color: white;
  padding: 5px 10px;
  font-size: 20px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  float: right;
  margin-bottom: 40px;
`;

const WritePresenter = ({
  categoryList,
  category,
  handleSubmit,
  setCategory,
  setTitle,
  setContent,
  handleImageChange,
  files,
  imgUrl
}) => {
  return (
    <Wrapper>
      <TitleBox title="WRITE" />

      <ButtonContainer>
        <PrevBtn to="/production">이전</PrevBtn>
      </ButtonContainer>

      <form onSubmit={handleSubmit} method="POST">
        <InfoGrid>
          <div>
            <RowsContainer>
              <Title>유형</Title>
              <Select
                value={category}
                onChange={event => setCategory(event.target.value)}
              >
                {categoryList.map(item => (
                  <option key={item.category_id} value={item.category_id}>
                    {item.category_name}
                  </option>
                ))}
              </Select>
            </RowsContainer>
            <RowsContainer>
              <Title>제목</Title>
              <Input
                name="title"
                type="text"
                placeholder="제목을 입력해주세요"
                onChange={event => setTitle(event.target.value)}
                required
              />
            </RowsContainer>
          </div>

          <ColumnContainer>
            <div>이미지</div>
            <input
              name="image"
              type="file"
              onChange={handleImageChange}
              multiple
            />

            <ThumbnailContainer>
              {imgUrl.map(image => (
                <Thumbnail src={image} alt="이미지" />
              ))}
            </ThumbnailContainer>
          </ColumnContainer>
        </InfoGrid>

        <ColumnContainer>
          <div>설명</div>
          <TextArea
            name="dept"
            type="text"
            onChange={event => setContent(event.target.value)}
            required
          />
        </ColumnContainer>

        <Button type="submit" value="작성" />
      </form>
    </Wrapper>
  );
};

export default WritePresenter;
