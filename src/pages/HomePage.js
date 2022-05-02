import React, { useState } from 'react'
import News from '../component/news/News'
// import SearchBar from '../component/pagecomponents/SearchBar'

function HomePage() {

    // const [searchText, setSeacrchText] = useState('United States');

    // const handleInput = (e) => {
    //     const text = e.target.value;
    //     setSeacrchText(text);
    // };

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    // }

    // const handleKeyPressed = (e) => {
    //     if (e.key === 'Enter') {
    //         handleSubmit();
    //     }
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
                {/* <SearchBar /> */}
                <News cat={`everything?q=education&`} />
            </div>

        </div>
    )
}

export default HomePage