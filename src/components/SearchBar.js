import React, { useRef, useState } from 'react'
import '../css/SearchBar.css';
import { fetchMoviesInfo } from '../redux/fetchMovies/moviesAction';
import { useDispatch } from 'react-redux';

function SearchBar({moviePage}) {
  const dispatch = useDispatch();
  const [searchkey, setsearchkey] = useState("");
  const invalidRef = useRef(null);
  // const [handleSearch, sethandleSearch] = useState(false);

  const handleSearchKey = (e) => {
    setsearchkey(e.target.value);
  }

  const handleSubmit = (e) => {
    moviePage(false)
    if (searchkey != "") {
    dispatch(fetchMoviesInfo(searchkey))
    setsearchkey("");
    }
    else{
      invalidRef.current.style.display = "inline-block";
    }
    e.preventDefault();
  }

  const focusHandler =()=>{
    invalidRef.current.style.display = "none";
  }


  // useEffect(() => {
  //   if (handleSearch == true && searchkey != "") {
  //     dispatch(fetchMoviesInfo(searchkey))
  //     sethandleSearch(false);
  //     setsearchkey("");
  //   }
  // }, [handleSearch])

  return (
    <div className='Searchbar_container'>
      <form onSubmit={handleSubmit} className='Searchbar'>
        <input type="text" placeholder='Search' value={searchkey} onChange={handleSearchKey} onFocus={focusHandler}/>
        <button type="submit" >Search</button>
        <span ref={invalidRef} class="tooltiptext"><i class="fa-solid fa-triangle-exclamation"></i>Please fill out this field</span>
      </form>
    </div>
  );
}

export default SearchBar
