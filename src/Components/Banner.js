import React from 'react'
import './Banner.css'

function Banner() {

    const desclmt = 250;

    const truncate = (str) => {
        return (str?.length > desclmt ? str.substr(0, desclmt - 1) + '...' : str);
    }

    return (
        <header
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url("https://d1csarkz8obe9u.cloudfront.net/posterpreviews/netflix-movie-series-download-template-design-3a7d8e00db6fffde55bb1c0e8a65eb79_screen.jpg?ts=1605595145")`,
                backgroundPosition: 'center center'
            }}
        >
            <div className='banner__contents'>
                <h1 className='banner__title'>Movie Name</h1>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{truncate(`This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description
                    This is a test description`)}

                </h1>
            </div>
            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner