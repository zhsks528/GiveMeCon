import React, {useState, useEffect} from 'react';
import WritePresenter from './WritePresenter';
import axios from 'axios';

const api = axios.create({
    baseURL: 'http://127.0.0.1:8000/'
})

export default function WriteContainer(){

    const [categoryList, setCategoryList] = useState([]);
    const [category, setCategory] = useState("");
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [content, setContent] = useState('');
    const [tag, setTag] = useState('');

    useEffect(() => {
        api.get('category/')
        .then(response => {
            const {data} = response;
            setCategoryList(data.results)
        })
    }, [])
    
    // console.log(categoryList, category, title, author, content, tag)

    console.log(category)
    let form = new FormData()
    form.append('title', title)
    form.append('author', author)
    form.append('content', content)

    // console.log(typeof category)
    const handleSubmit = (event) => {
        
        event.preventDefault();
        
        // api.post('production/music/', form)
        //     .then(response => console.log(response))
        if(category === "음악"){
            api.post('production/music/', form)
            .then(response => console.log(response))
        }
        else if(category === "스포츠"){
            api.post('production/sports/', form)
            .then(response => console.log(response))
        }
        else if(category === "영화"){
            api.post('production/movies/', form)
            .then(response => console.log(response))
        }
        else if(category === "게임"){
            api.post('production/games/', form)
            .then(response => console.log(response))
        }
        
    }

    return(
        <WritePresenter 
            categoryList={categoryList}
            handleSubmit={handleSubmit}
            setCategory={setCategory}
            setTitle={setTitle}
            setContent={setContent}
            setAuthor={setAuthor}
            setTag={setTag}
        />
    )
}
