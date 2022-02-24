import React, { useRef, useEffect } from 'react';
import '../css/MovieCard.css'

const favorite = {
  color: "lightgrey",
}

function Favorite({ movieId }) {

  const favoriteRef = useRef(null);

  const checkFavorite = () => {
    let favorite = localStorage.getItem("favorite");
    if (favorite == null) {
      var favoriteObj = [];
    }
    else {
      var favoriteObj = JSON.parse(favorite);
    }

    if (favoriteRef.current.style.color == "red") {
      favoriteObj.forEach((item, index, favoriteObj) => {
        if (item == movieId) {
          favoriteObj.splice(index, 1);
          localStorage.setItem("favorite", JSON.stringify(favoriteObj));
          favoriteRef.current.style.color = "lightgrey";
          return true;
        }
      });
    }
    else {
      favoriteObj.push(movieId);
      localStorage.setItem("favorite", JSON.stringify(favoriteObj));
      favoriteRef.current.style.color = "red";
    }
  }


  useEffect(() => {
    let favorite = localStorage.getItem("favorite");
    if (favorite != null) {
      var favoriteObj = JSON.parse(favorite);
      favoriteObj.forEach((item) => {
        if (item == movieId) {
          favoriteRef.current.style.color = "red";
          return true;
        }
      });
    }
  }, [])

  return (
    <div className='favoriteHeart'>
      <span style={favorite} ref={favoriteRef} onClick={checkFavorite}>
        <i className= "fa-solid fa-heart"></i>
      </span>
    </div>
  );
}

export default Favorite
