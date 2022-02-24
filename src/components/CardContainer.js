import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesInfo } from '../redux/fetchMovies/moviesAction';
import '../css/MoviesSection.css'
import MovieCard from './MovieCard';
import Loader from './Loader';
import Notfound from './Notfound';

function CardContainer({ trailersHandler, detailsHandler, sortTypeState, currentPage }) {
    const dispatch = useDispatch();
    const { loading, moviesInfo } = useSelector(state => state);

    const isMoviesinfoEmpty = moviesInfo.length == 0 ? true : false;

    useEffect(() =>
        dispatch(fetchMoviesInfo(null, sortTypeState, currentPage))
        , [sortTypeState, currentPage])

    const moviecards = loading ? <Loader /> :isMoviesinfoEmpty ? <Notfound>No search found</Notfound> :
        moviesInfo.map((moviesInfo) => {
            if (moviesInfo.poster_path != null)
                return <MovieCard key={moviesInfo.id} Info={moviesInfo} trailersHandler={trailersHandler} detailsHandler={detailsHandler} />
        })


    return (
        <div className='cardContainer'>
            {moviecards}
        </div>
    )
}

export default CardContainer
