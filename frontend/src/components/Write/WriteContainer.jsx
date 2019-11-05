import React, { useState, useEffect } from "react";
import WritePresenter from "./WritePresenter";
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

export default function WriteContainer() {
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState("");
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");
  const [tag, setTag] = useState("");
  const [files, setFiles] = useState([]);
  const [imgUrl, setImgUrl] = useState([]);

  useEffect(() => {
    api.get("category/").then(response => {
      const { data } = response;
      setCategoryList(data.results);
    });
  }, []);

  const handleSubmit = event => {
    event.preventDefault();

    let form = new FormData();
    form.append("title", title);
    form.append("author", author);
    form.append("content", content);

    if (category === "음악") {
      api
        .post("production/music/", form)
        .then(response => console.log(response));
    } else if (category === "스포츠") {
      api
        .post("production/sports/", form)
        .then(response => console.log(response));
    } else if (category === "영화") {
      api
        .post("production/movies/", form)
        .then(response => console.log(response));
    } else if (category === "게임") {
      api
        .post("production/games/", form)
        .then(response => console.log(response));
    }
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
      handleSubmit={handleSubmit}
      setCategory={setCategory}
      setTitle={setTitle}
      setContent={setContent}
      setAuthor={setAuthor}
      setTag={setTag}
      handleImageChange={handleImageChange}
      files={files}
      imgUrl={imgUrl}
    />
  );
}
