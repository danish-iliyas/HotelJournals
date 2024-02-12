const getExpReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case 'GET_USER_EXPERIENCE':
            return { ...state, data: action.data }
        default:
            return state;
    }
}

export default getExpReducer;