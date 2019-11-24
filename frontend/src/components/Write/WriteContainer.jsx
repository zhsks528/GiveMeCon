import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCategory } from "store/actions/trend";
import { produceWrite } from "store/actions/production";

import WritePresenter from "./WritePresenter";

export default function WriteContainer() {
  const categoryList = useSelector(state => state.trend.categoryList);
  const [category, setCategory] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [files, setFiles] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCategory());
  }, [dispatch]);

  const handleSubmit = event => {
    event.preventDefault();

    let form = new FormData();

    if (files.length > 0) {
      form.append("thumbnail", files[0]);
    }

    form.append("title", title);
    form.append("category", category);
    form.append("content", content);

    dispatch(produceWrite(form));
  };

  const handleImageChange = event => {
    event.preventDefault();

    let fileList = Array.from(event.target.files);
    fileList.forEach(file => {
      let reader = new FileReader();

      reader.onloadend = () => {
        setFiles(files => files.concat(file));
        setImgUrl(imgUrl => imgUrl.concat(reader.result));
      };

      reader.readAsDataURL(file);
    });
  };

  return (
    <WritePresenter
      categoryList={categoryList}
      category={category}
      handleSubmit={handleSubmit}
      setCategory={setCategory}
      setTitle={setTitle}
      setContent={setContent}
      handleImageChange={handleImageChange}
      files={files}
      imgUrl={imgUrl}
    />
  );
}
