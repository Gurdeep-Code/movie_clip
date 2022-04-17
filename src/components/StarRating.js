import React from 'react';
import '../css/MovieCard.css'

function StarRating({rating,numericRating}) {
const ratingPercent = rating*10;
const ratingPercent1 = {
    backgroundImage: `linear-gradient(90deg, orange ${ratingPercent}%, grey ${100-ratingPercent}%)`,
}

    return (
        <div className='starRatingContainer'>
            <span style={ratingPercent1} className='starRating'>
                <i className="fa-solid fa-star fa-xs"></i>
                <i className="fa-solid fa-star fa-xs"></i>
                <i className="fa-solid fa-star fa-xs"></i>
                <i className="fa-solid fa-star fa-xs"></i>
                <i className="fa-solid fa-star fa-xs"></i>
            </span>
            {numericRating && <span>{rating}</span>}
        </div>
    );
}

export default React.memo(StarRating)
