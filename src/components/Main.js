import React, { useState } from 'react';
import TrailerSection from './TrailerSection';
import MoviesSection from './MoviesSection';
import DetailsSection from './DetailsSection';
import SearchBar from './SearchBar';

function Main() {
    const [showVideo, setshowVideo] = useState(false);
    const [showDetails, setshowDetails] = useState(false);
    const [payload,setPayload]= useState('');


    const trailersHandler = (isvideoActive,trailersPayload) => {
        setshowVideo(isvideoActive);
        setPayload(trailersPayload);
    }

    const detailsHandler = (isdetailActive,detailsPayload) => {
        setshowDetails(isdetailActive);
        setPayload(detailsPayload);
    }

    if (showVideo == false && showDetails == false) {
        return <div><MoviesSection trailersHandler= {trailersHandler} detailsHandler ={detailsHandler} /></div>
    }
    else if (showVideo == true) {
        return (<div><TrailerSection trailersHandler= {trailersHandler} trailersPayload={payload}/></div>);
    }
    else if (showDetails == true)
    {
        return (<div><DetailsSection detailsHandler ={detailsHandler}  detailsPayload={payload}/></div>);
    }
}

export default Main;
