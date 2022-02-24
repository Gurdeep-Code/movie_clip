import React, { useState } from 'react';
import '../css/MoviesSection.css'
import Sortby from './Sortby';
import Pageination from './Pageination';
import CardContainer from './CardContainer';


function MoviesSection({ trailersHandler, detailsHandler }) {
  const [sortTypeState, setSorttype] = useState("popular");
  const [currentPage, setCurrentPage] = useState(1);

  const sorttypeHandler = (type) => {
    setSorttype(type)
  }

  return (<div className='MoviesSection'>
    <Sortby sortType={sortTypeState} sortTypeHandler={sorttypeHandler} updatePage={setCurrentPage} />

    <CardContainer trailersHandler={trailersHandler} detailsHandler={detailsHandler} sortTypeState={sortTypeState} currentPage={currentPage} />


    <Pageination currentPage={currentPage} updatePage={setCurrentPage} />
  </div>);
}

export default MoviesSection;
