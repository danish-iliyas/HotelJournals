const setLanguageReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case 'SET_USER_LANGUAGE':
            return { ...state, data: action.data }
        default:
            return state;
    }
}

export default setLanguageReducer;