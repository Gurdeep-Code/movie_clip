import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE,FETCH_VIDEO_SUCCESS } from "./moviesTypes";
import axios from 'axios';

export const fetchMoviesRequest = () => {
    return {
        type: FETCH_MOVIES_REQUEST
    }
}

const fetchMoviesSuccess = (moviesInfo) => {
    return {
        type: FETCH_MOVIES_SUCCESS,
        payLoad: moviesInfo
        
    }
}

const fetchVideoSuccess = (videoInfo) => {
    return {
        type: FETCH_VIDEO_SUCCESS,
        payLoad: videoInfo,
        
    }
}
const fetchMoviesFailure = error => {
    return {
        type: FETCH_MOVIES_FAILURE,
        payload: error
    }
}

export const fetchMoviesInfo = (searchKey,sortbyKey,currentPage) => {
    const api_key = "4e44d9029b1270a757cddc766a1bcb63";
    const Movieslink=`https://api.themoviedb.org/3/movie/${sortbyKey}?api_key=${api_key}&language=en-US&page=${currentPage}`;
    const searchMovielink=`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchKey}&page=1&include_adult=false`;
    const Link=searchKey==null? Movieslink:searchMovielink;

    return dispatch => {
        dispatch(fetchMoviesRequest());
        axios.get(`${Link}`)

            .then(response => {
                const moviesInfo = response.data.results;
                console.log(response.data.results);
                dispatch(fetchMoviesSuccess(moviesInfo));
            })
            .catch(error => {
                const errorMsg = error.message;
                console.log(errorMsg);
                dispatch(fetchMoviesFailure(errorMsg));
            })
    }

}

export const fetchVideoInfo = (movieId) => {
    return dispatch => {
        dispatch(fetchMoviesRequest());
        const api_key = "4e44d9029b1270a757cddc766a1bcb63";
        axios.get(`https://api.themoviedb.org/3/movie/${movieId}?api_key=${api_key}&append_to_response=videos`)
            .then(response => {
                const videoInfo = response.data.videos.results;
                console.log(response.data);
                dispatch(fetchVideoSuccess (videoInfo));
            })
            .catch(error => {
                const errorMsg = error.message;
                // console.log(errorMsg);
                dispatch(fetchMoviesFailure(errorMsg));
            })
    }

}

// export const searchMoviesInfo = (searchKey) => {
//     return dispatch => {
//         dispatch(fetchMoviesRequest());
//         const api_key = "4e44d9029b1270a757cddc766a1bcb63";
//         axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${api_key}&language=en-US&query=${searchKey}&page=1&include_adult=false`)
//             .then(response => {
//                 const moviesInfo = response.data.results;
//                 // console.log(response.data.results);
//                 dispatch(fetchMoviesSuccess(moviesInfo));
//             })
//             .catch(error => {
//                 const errorMsg = error.message;
//                 // console.log(errorMsg);
//                 dispatch(fetchMoviesFailure(errorMsg));
//             })
//     }

// }

