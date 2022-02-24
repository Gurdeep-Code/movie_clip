import { FETCH_MOVIES_REQUEST, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_FAILURE ,FETCH_VIDEO_SUCCESS} from "./moviesTypes";

const initialState = {
    loading: false,
    moviesInfo: [],
    trailerInfo: [],
    error: ''
}

const moviesReducers = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_MOVIES_REQUEST:
            return {
                ...state,
                loading: true
            }
        case FETCH_MOVIES_SUCCESS:
            return {
                loading: false,
                moviesInfo: action.payLoad,
                trailerInfo: [],
                error: ''
            }
        case FETCH_VIDEO_SUCCESS:
            return {
                ...state,
                loading: false,
                trailerInfo: action.payLoad,
            }
        case FETCH_MOVIES_FAILURE:
            return {
                loading: false,
                moviesInfo: [],
                error: action.payLoad
            }
        default: return state
    }
}

export default moviesReducers