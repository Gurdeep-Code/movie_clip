import React from 'react';
import StarRating from './StarRating';
import Favorite from './Favorite';
import '../css/MovieCard.css'
import 'animate.css';

function MovieCard({ Info, trailersHandler, detailsHandler }) {
  const path = "https://image.tmdb.org/t/p/w500";

  const hideNavbar =()=>{
    let navbar=document.getElementsByClassName("Navbar");
    navbar[0].style.display = "none";
  };


  return <div className='MovieCard'>

    <div className='cardSection1'>
      <img onClick={() => detailsHandler(true, Info)} className="MovieImage" src={`${path}${Info.poster_path}`} />
      <button onClick={() => {trailersHandler(true, Info); hideNavbar();}}><i className="fa-solid fa-play"></i></button>
    </div>

    <div className='cardSection2'>
      <span onClick={() => detailsHandler(true, Info)} className="MovieName">{Info.title}</span>
      <Favorite movieId={Info.id} />
    </div>

    <StarRating rating={Info.vote_average} />

    <div className="cardSection3">
      <div className='InfoMain'>
        <span>Rating</span>
        <span>{Info.vote_average}</span>
      </div>
      <div className='InfoMain'>
        <span>Lang</span>
        <span>{Info.original_language}</span>
      </div>
      <div className='InfoMain'>
        <span>Review</span>
        <span>{Info.popularity.toFixed(0)}</span>
      </div>
    </div>
  </div>
}

export default React.memo(MovieCard);
