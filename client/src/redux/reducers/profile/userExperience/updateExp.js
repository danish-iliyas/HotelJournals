const updateExpReducer = (state = [], action) => {
    switch(action.type){
        case 'UPDATE_USER_EXPERIENCE':
            return (state.map((experience) => experience._id === action.payload._id ? action.payload : experience))
        default:
            return state;
    }
}

export default updateExpReducer;