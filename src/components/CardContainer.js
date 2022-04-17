import React from 'react';
import MovieCard from './MovieCard';
import '../css/MoviesSection.css';

function CardContainer({ trailersHandler, detailsHandler, moviesInfo }) {

    const moviecards =
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
