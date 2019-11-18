import React, { useState, useEffect } from "react";
import WritePresenter from "./WritePresenter";
import axios from "axios";

const api = axios.create({
  baseURL: "http://127.0.0.1:8000/"
});

api.interceptors.request.use(config => {
  const reqConfig = config;
  const token = localStorage.getItem("jwt");
  reqConfig.headers.Authorization = token ? `JWT ${token}` : "";
  return config;
});

export default function WriteContainer() {
  const [categoryList, setCategoryList] = useState([]);
  const [category, setCategory] = useState(1);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
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

    if (files.length > 0) {
      form.append("thumbnail", files[0]);
    }

    form.append("title", title);
    form.append("category", category);
    form.append("content", content);

    api.post("production/", form).then(response => console.log(response));

    window.location.href = "/production";
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
