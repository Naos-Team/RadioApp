//strings
const SET_DATA = 'SET_DATA';
const SET_REFRESH = 'SET_REFRESH';
const INCREASE_PAGE = 'INCREASE_PAGE';


//actions
export const SET_DATA_ACTION = (data) => {
    return {
        type: SET_DATA,
        data
    }
}

export const SET_REFRESH_ACTION = (refreshing) => {
    return {
        type: SET_REFRESH,
        refreshing
    }
}

export const INCREASE_PAGE_ACTION = () => {
    return{
        type: INCREASE_PAGE
    }
}

const OnDemandReducer = (state, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                playlists: state.playlists.concat(action.data),
                refreshing: false,
            }

        case SET_REFRESH:
            return {
                ...state,
                refreshing: action.refreshing
            }

        case INCREASE_PAGE:
            return {
                ...state,
                page: state.page + 1
            }
    }
}

export default OnDemandReducer