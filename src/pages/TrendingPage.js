import React, { useState } from 'react'
import News from '../component/news/News'

function TrendingPage() {

    const [country, setCountry] = useState('us');

    return (
        <div>
            <div className='container my-3'>
                <p>Search the top headlines from the countries below. <span className='text-warning'>Articles and websites may not be in english!!</span>
                </p>
                <div>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('br')}>Brazil</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('ca')}>Canada</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('cn')}>China</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('fr')}>France</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('de')}>Germany</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('it')}>Italy</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('in')}>India</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('id')}>Indonisia</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('jp')}>Japan</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('ng')}>Nigeria</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('ru')}>Russia</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('za')}>South Africa</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('gb')}>United Kingdom</button>
                    <button type='button' className='btn btn-dark btn-sm m-1' onClick={() => setCountry('us')}>United States</button>

                </div>

            </div>

            <News cat={`top-headlines?country=${country}&`} />
        </div>
    )
}

export default TrendingPage