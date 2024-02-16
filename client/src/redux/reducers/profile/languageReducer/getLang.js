const getLanguageReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case 'GET_USER_LANGUAGE':
            return { ...state, data: action.data }
        default:
            return state;
    }
}

export default getLanguageReducer;