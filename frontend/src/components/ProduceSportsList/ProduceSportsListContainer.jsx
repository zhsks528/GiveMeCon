import React, {useState, useEffect} from 'react';
import ProduceSportsListPresenter from './ProduceSportsListPresenter';
import axios from 'axios';

export default function ProduProduceSportsListContainerceMusicListContainer(){
  const [list, setList] = useState([])
  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get("http://127.0.0.1:8000/production/sports/")
      .then(response => {
        const { data } = response;
        setList(data);
      })
      .catch(error => console.log(error));
  };

  console.log(list)
  return (
    <ProduceSportsListPresenter list={list}/>
  )
}