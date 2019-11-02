import React, {useState, useEffect} from 'react';
import ProduceMoviesListPresenter from './ProduceMoviesListPresenter';
import axios from 'axios';

export default function ProduceMoviesListContainer(){
  const [list, setList] = useState([])
  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get("http://127.0.0.1:8000/production/movies/")
      .then(response => {
        const { data } = response;
        setList(data);
      })
      .catch(error => console.log(error));
  };
  
  return (
    <ProduceMoviesListPresenter list={list}/>
  )
}