import React from 'react'

function SearchBar() {





    return (
        <div>
            <form className='container my-3 d-flex'>
                <input className='form-control me-sm-2' type={'text'} placeholder='Search'></input>
                <button className='btn btn-primary' type='submit'>Search</button>
            </form>
        </div>



    )
}

export default SearchBar