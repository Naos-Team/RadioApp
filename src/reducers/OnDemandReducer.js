//strings
const SET_DATA = 'SET_DATA';

//actions
export const SET_DATA_ACTION = (data) => {
    return {
        action: SET_DATA,
        data
    }
}

const OnDemandReducer = (state, action) => {
    switch (action.type) {
        case SET_DATA:
            return {
                ...state,
                playlists: action.data
            }
    }
}

export default OnDemandReducer