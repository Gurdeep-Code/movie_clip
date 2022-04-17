import React, { useState, useEffect } from 'react';
import Sortby from './Sortby';
import Pageination from './Pageination';
import CardContainer from './CardContainer';
import Loader from './Loader';
import Notfound from './Notfound';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMoviesInfo } from '../redux/fetchMovies/moviesAction';
import '../css/MoviesSection.css'

function MoviesSection({ trailersHandler, detailsHandler }) {
  const dispatch = useDispatch();
  const { loading, moviesInfo } = useSelector(state => state);
  const [sortTypeState, setSorttype] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);
  const isMoviesinfoEmpty = (moviesInfo.length === 0) ? true : false;

  useEffect(() =>
    dispatch(fetchMoviesInfo(null, sortTypeState, currentPage))
    , [sortTypeState, currentPage])


  return (
    <div className='MoviesSection'>
      <Sortby sortType={sortTypeState} sortTypeHandler={setSorttype} updatePage={setCurrentPage} />
      {loading ? <Loader /> : isMoviesinfoEmpty ? <Notfound>No search found</Notfound> :
        (<>
          <CardContainer trailersHandler={trailersHandler} detailsHandler={detailsHandler} moviesInfo={moviesInfo} />
          <Pageination currentPage={currentPage} updatePage={setCurrentPage}/>
        </>)}
    </div>);
}

export default MoviesSection;


// const sorttypeHandler = (type) => {
  //   setSorttype(type)
  // }