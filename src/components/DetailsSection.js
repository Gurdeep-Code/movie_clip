import React from 'react';
import StarRating from './StarRating';
import Favorite from './Favorite';
import '../css/DetailsSection.css'
import '../css/TrailerSection.css';

function DetailsSection({ trailersHandler,detailsHandler,detailsPayload}) {
  const path = "https://image.tmdb.org/t/p/w500";

  const hideNavbar =()=>{
    let navbar=document.getElementsByClassName("Navbar");
    navbar[0].style.display = "none";
  };
  
  return (<div className='MovieDetailsContainer'>
      <img className="MovieDetailsImage" src={`${path}${detailsPayload.poster_path}`}  />
      <div className="MovieDetailsInfo">
          <span className="MovieDetailsName">{detailsPayload.title} <Favorite movieId={detailsPayload.id} /></span>
          <StarRating rating={detailsPayload.vote_average} numericRating ="true" />
          <div className="MovieSubDetails">{detailsPayload.release_date}</div>
          <div className="MovieSubDetails">{detailsPayload.overview}</div>
          <button onClick={() => {trailersHandler(true,detailsPayload); hideNavbar();}}>Watch Trailer</button>
      </div>
      <button onClick={() => detailsHandler(false)} className='closevideo'><i className="fa-solid fa-xmark"></i></button>
  </div>);
}

export default DetailsSection;
