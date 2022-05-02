import React, { createContext, useEffect, useState } from "react";
import axios from 'axios'
import Loading from '../loading/Loading';

export const NewsContext = createContext();

export const NewsContextProvider = (props) => {
    const [data, setData] = useState();
    const apiKey = "45b6f52b41994423af641a6d7503e74a";
    const [category, setCategory] = useState('top-headlines?country=us&');


    //When sources are fecthed: /sources?
    // const [source, setSource] = useState('');


    //'top-headlines?country=us'
    // https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}


    //The search can be implemented with this link by passing search terms into 'q'
    // eg Search: italy
    // https://newsapi.org/v2/everything?q=italy&apiKey=${apiKey}



    useEffect(() => {
        axios.get(`https://newsapi.org/v2/${category}apiKey=${apiKey}`)
            .then(response => setData(response.data))
            .catch(error => console.log(error));
    }, [category]);

    if (!data) {
        return <Loading />;
    }

    return (
        <NewsContext.Provider value={{ data, setCategory }}>
            {props.children}
        </NewsContext.Provider>
    );
};