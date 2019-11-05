import React, {useState, useEffect} from 'react';
import ProduceGamesListPresenter from './ProduceGamesListPresenter';
import axios from 'axios';

export default function ProduceGamesListContainer(){
  const [list, setList] = useState([])
  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get("http://127.0.0.1:8000/production/games/")
      .then(response => {
        const { data } = response;
        setList(data);
      })
      .catch(error => console.log(error));
  };

  console.log(list)
  return (
    <ProduceGamesListPresenter list={list}/>
  )
}