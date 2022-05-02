import React from 'react'

function NewsArticle({ data }) {
    return (
        <div className='container my-3'>
            <div className='row'>
                <div className='col-4'>
                    <ul>
                        <li className='list-group-item'>Author: {
                            data.author === null || data.author === '' ? data.author = data.source.name
                                : data.author}
                        </li>
                        <li className='list-group-item'>published: {data.publishedAt}</li>
                        <li className='list-group-item'>Source: {data.source.name}</li>
                    </ul>
                </div>
                <div className='col-6'>
                    <a href={data.url} target='_blank' rel='noreferrer'><h4 className=''>{data.title}</h4> </a>
                    <p className=''>{data.description}</p>
                </div>
                <div className='col-2'>
                    <img className='img-fluid img-thumbnail' src={data.urlToImage} alt="Article Thumbnail" />
                </div>
            </div>
            <hr></hr>
        </div>

    )
}

export default NewsArticle