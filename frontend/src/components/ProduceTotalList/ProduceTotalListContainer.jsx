import React, { useState, useEffect } from "react";
import ProduceTotalListPresenter from "./ProduceTotalListPresenter";
import axios from "axios";

export default function ProduceTotalListContainer() {
  const [list, setList] = useState([]);

  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get("http://127.0.0.1:8000/production/")
      .then(response => {
        const { data } = response;
        setList(data);
      })
      .catch(error => console.log(error));
  };
  console.log(list);
  return <ProduceTotalListPresenter list={list} />;
}