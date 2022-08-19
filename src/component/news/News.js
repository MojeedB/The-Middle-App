import React, { useContext } from 'react'
import Loading from '../loading/Loading';
import NewsArticle from './NewsArticle';
import { NewsContext } from './NewsContext';

function News(props) {
    const { data, setCategory } = useContext(NewsContext);

    console.log(data)

    return (
        <div className='d-flex flex-row flex-wrap justify-content-center'>
            {setCategory(props.cat)}
            {data ? data.articles.map(news =>
                <NewsArticle data={news} key={news.url} />) :
                <Loading />}
        </div>
    );
}

export default News