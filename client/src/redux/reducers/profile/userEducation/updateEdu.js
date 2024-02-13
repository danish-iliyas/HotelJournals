const updateEducationReducer = (state = [] , action) => {
    switch(action.type){
        case 'UPDATE_USER_EDUCATION':
            return (state.map((education) => education._id === action.payload._id ? action.payload : education))
        default:
            return state;
    }
}

export default updateEducationReducer;