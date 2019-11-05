import React, {useState, useEffect} from 'react';
import ProduceMusicListPresenter from './ProduceMusicListPresenter';
import axios from 'axios';

export default function ProduceMusicListContainer(){
  const [list, setList] = useState([])
  useEffect(() => {
    callApi();
  }, []);

  const callApi = () => {
    axios
      .get("http://127.0.0.1:8000/production/music/")
      .then(response => {
        const { data } = response;
        setList(data);
      })
      .catch(error => console.log(error));
  };

  console.log(list)
  return (
    <ProduceMusicListPresenter list={list}/>
  )
}