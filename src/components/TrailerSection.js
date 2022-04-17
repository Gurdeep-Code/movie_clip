import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoInfo } from '../redux/fetchMovies/moviesAction';
import Loader from './Loader';
import Notfound from './Notfound';
import '../css/TrailerSection.css';


function TrailerSection({ trailersHandler, trailersPayload }) {
  let trailerLink;
  const path ="https://www.youtube.com/watch?v=";
  const dispatch = useDispatch();
  const { loading, trailerInfo } = useSelector(state => state);
  
  trailerInfo.some((trailerInfo) => {
    if (trailerInfo.type.includes("Trailer") || trailerInfo.type.includes("Teaser")) {
      trailerLink = path+trailerInfo.key;
      return true;
    }
  });

  const showNavbar =()=>{
    let navbar=document.getElementsByClassName("Navbar");
    navbar[0].style.display = "flex";
  };

  useEffect(() =>
    dispatch(fetchVideoInfo(trailersPayload.id))
    , [])

  if (loading) {
    return <div><Loader /></div>
  }
  else {
    return (<div className='TrailerSection'>
      {trailerLink == "" ? <Notfound>Trailer not available</Notfound> : 
      <div className='player'><ReactPlayer controls url={trailerLink} width='100%' height='100%'/></div>}
      <button onClick={() => {trailersHandler(false,trailersPayload);showNavbar()}} className='closevideo'><i className="fa-solid fa-xmark"></i></button>
    </div>);
  }

}

export default TrailerSection;
