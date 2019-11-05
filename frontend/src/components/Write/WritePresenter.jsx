import React from 'react';

const WritePresenter =({categoryList, handleSubmit, setCategory, setTitle, setContent, setAuthor, setTag}) => {
  
  return (
    <>
    <form onSubmit={handleSubmit} method="POST">
      <div>유형</div>
      <select onChange={(event) => setCategory(event.target.value)}>
        {categoryList.map(item => <option key={item.category_id} value={item.category_name}>{item.category_name}</option>)}
      </select>
      <div>제목</div>
      <input name="title" type="text" placeholder="제목을 입력해주세요" onChange={(event) => setTitle(event.target.value)}/>
      <div>작성자</div>
      <input name="author" type="text" onChange={(event) => setAuthor(event.target.value)}/>
      <div>이미지</div>
      <input name="image" type="file" />
      <div>설명</div>
      <input name="dept" type="text" onChange={(event) => setContent(event.target.value)}/>
      <div>태그</div>
      <input name="tag" type="text" onChange={(event) => setTag(event.target.value)}/>
      <input type="submit" value="작성"/>
    </form>
    </>
  )
}

export default WritePresenter
