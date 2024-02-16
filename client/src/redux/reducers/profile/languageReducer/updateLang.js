const updateLanguageReducer = (state = [] , action) => {
    switch(action.type){
        case 'UPDATE_USER_LANGUAGE':
            return (state.map((language) => language._id === action.payload._id ? action.payload : language))
        default:
            return state;
    }
}

export default updateLanguageReducer;