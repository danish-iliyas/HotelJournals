const getEducationReducer = (state = { data: null }, action) => {
    switch (action.type) {
        case 'GET_USER_EDUCATION':
            return { ...state, data: action.data }
        default:
            return state;
    }
}

export default getEducationReducer;