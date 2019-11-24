import React from "react";
import styled from "styled-components";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUndo } from "@fortawesome/free-solid-svg-icons";

const Wrapper = styled.form`
  margin-bottom: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

const Select = styled.select`
  min-width: 200px;
  min-height: 40px;
  padding: 5px 10px;
  margin-right: 20px;
  font-size: 18px;
  border: none;
  outline: none;
  border-radius: 14px;
  background: #dddddd;
  color: black;
  font-weight: bold;
  cursor: pointer;
  transition: 0.3s;
`;

const Btn = styled.button`
  min-width: 40px;
  min-height: 40px;
  border: none;
  border-radius: 12px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  transition: 0.3s;

  &:hover {
    background: #f7323f;
    color: yellow;
  }
`;

const SelectCategoryPresenter = ({
  categoryId,
  setCategoryId,
  categoryList,
  handleReset
}) => {
  return (
    <>
      <Wrapper method="POST">
        <Select
          value={categoryId}
          onChange={event => setCategoryId(event.target.value)}
        >
          <option value={"0"}>카테고리 검색</option>
          {categoryList.map(item => (
            <>
              <option key={item.category_id} value={item.category_id}>
                {item.category_name}
              </option>
            </>
          ))}
        </Select>
        <Btn onClick={handleReset}>
          <FontAwesomeIcon icon={faUndo} />
        </Btn>
      </Wrapper>
    </>
  );
};

export default SelectCategoryPresenter;
