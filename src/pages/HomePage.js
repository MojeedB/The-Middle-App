import React, { useState } from 'react'
import News from '../component/news/News'
import SearchBar from '../component/pagecomponents/SearchBar'

function HomePage() {

    const [searchTerm, setSearchTerm] = useState('Education');

    // const onSearch = asyn(text) =>{
    //     const result = await
    // }

    return (
        <div >

            {/* <form className='container my-3 d-flex'>
                // <input className='form-control me-sm-2' type='text' value={searchText} onChange={handleInput} onKeyPress={handleKeyPressed} placeholder='Search'></input>
                // <button className='btn btn-primary' type='submit' onClick={handleSubmit}>Search</button>


                <input className='form-control me-sm-2' type={'text'} placeholder='Search'></input>
                <button className='btn btn-primary' type='submit'>Search</button>
            </form> 
            */}

            <div>
                {/* <SearchBar searchBarText={setSearchTerm} /> */}
                <News cat={`everything?q=${searchTerm}&`} />
            </div>

        </div>
    )
}

export default HomePage