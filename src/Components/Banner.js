import React, { useEffect, useState } from 'react'
import './Banner.css'
import axios from './API/axios';
import requests from './API/requests'

function Banner() {

    const [movie, setMovie] = useState([]);

    useEffect(() => {
        async function fetchData() {
            const request = await axios.get(requests?.fetchNetflixOriginals);
            setMovie(
                request.data.results[
                Math.floor(Math.random() * request?.data?.results?.length - 1)
                ]
            );
            return request;
        }

        fetchData();
    }, [])

    const desclmt = 250;
    const truncate = (str) => {
        return (str?.length > desclmt ? str.substr(0, desclmt - 1) + '...' : str);
    }

    return (
        <header
            className='banner'
            style={{
                backgroundSize: 'cover',
                backgroundImage: `url(${movie?.backdrop_path &&
                    `https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`})`,
                backgroundPosition: 'center center',
            }}
        >
            <div className='banner__contents'>
                <div className='banner__title'>{
                    movie?.title || movie?.name || movie?.original_name
                }</div>
                <div className='banner__buttons'>
                    <button className='banner__button'>Play</button>
                    <button className='banner__button'>My List</button>
                </div>
                <h1 className='banner__description'>{truncate(`${movie?.overview}`)}

                </h1>
            </div>
            <div className='banner--fadeBottom' />
        </header>
    )
}

export default Banner