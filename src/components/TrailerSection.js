import React, { useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import { useDispatch, useSelector } from 'react-redux';
import { fetchVideoInfo } from '../redux/fetchMovies/moviesAction';
import Loader from './Loader';
import Notfound from './Notfound'
import '../css/TrailerSection.css'


function TrailerSection({ trailersHandler, trailersPayload }) {

  const dispatch = useDispatch();
  const { loading, trailerInfo } = useSelector(state => state);
  const imagepath = `https://image.tmdb.org/t/p/w500${trailersPayload.backdrop_path}`;

  var trailerKey = "";

  trailerInfo.some((trailerInfo) => {
    if (trailerInfo.type.includes("Trailer") || trailerInfo.type.includes("Teaser")) {
      trailerKey = trailerInfo.key;
      return true;
    }
  });

  const path = `https://www.youtube.com/watch?v=${trailerKey}`;

  useEffect(() =>
    dispatch(fetchVideoInfo(trailersPayload.id))
    , [])

  if (loading) {
    return <div><Loader /></div>
  }
  else {
    return (<div className='TrailerSection'>
      {trailerKey == "" ? <Notfound>Trailer not available</Notfound> : 
      <div className='player'><ReactPlayer controls url={path} width='100%' height='100%'/></div>}
      <button onClick={() => trailersHandler(false)} className='closevideo'><i className="fa-solid fa-xmark"></i></button>
    </div>);
  }

}

export default TrailerSection;
