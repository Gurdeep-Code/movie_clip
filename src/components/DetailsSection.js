import React from 'react';
import '../css/DetailsSection.css'

function DetailsSection({detailsHandler,detailsPayload}) {
  const path = "https://image.tmdb.org/t/p/w500";
  
  return <div className='MovieDetailsContainer'>
      <img className="MovieDetailsImage" src={`${path}${detailsPayload.poster_path}`}  />
      <div className="MovieDetailsInfo">
          <span className="MovieDetailsName">Movie Name : {detailsPayload.title}</span>
          <span className="MovieSubDetails">Overview : {detailsPayload.overview}</span>
          <span className="MovieSubDetails">Popularity :{detailsPayload.popularity}</span>
          <span className="MovieSubDetails">Release : {detailsPayload.release_date}</span>
          <span className="MovieSubDetails">Rating : {detailsPayload.vote_average}</span>
          <span className="MovieSubDetails">Vote : {detailsPayload.vote_count}</span>
      </div>
      <span onClick={() => detailsHandler(false,'')} className='closespan'>X</span>
  </div>;
}

export default DetailsSection;
