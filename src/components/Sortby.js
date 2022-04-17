import React from 'react'
import '../css/sortby.css'

function Sortby({ sortTypeHandler,sortType,updatePage }) {
    return (
        <div className='sortby'>
            <h2>What's {sortType.replace("_", " ")}</h2>
            <select className='sortbySelect' onChange={(e) => {sortTypeHandler(e.target.value); updatePage(1);}} >
                <option className='sortbyOption' value="popular">Popular</option>
                <option value="upcoming">Upcoming</option>
                <option value="top_rated">Top Rated</option>
                <option value="now_playing">Now Playing</option>
            </select>
        </div>
    )
}
export default Sortby;
