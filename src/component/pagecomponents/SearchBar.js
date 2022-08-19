import React, { useState } from 'react'

function SearchBar(props) {
    const { onSearch } = props.searchBarText;


    const { searchText, setSearchText } = useState('');

    const handleInput = (e) => {
        const text = e.target.value;
        setSearchText(text);
    };

    const handleEnterKey = (e) => {
        if (e.key === 'Enter') {
            onSearch(searchText);
        }
    }

    return (
        <div>
            <form className='container my-3 d-flex'>
                <input className='form-control me-sm-2' onChange={handleInput}
                    onKeyPress={handleEnterKey} value={searchText} type='text' placeholder='Search'></input>
                <button className='btn btn-primary' type='submit'>Search</button>
            </form>
        </div>



    )
}

export default SearchBar