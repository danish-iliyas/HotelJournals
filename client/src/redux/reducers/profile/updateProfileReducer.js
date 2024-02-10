const updateProfileReducer = (state = [], action) => {
    switch(action.type){
        case 'UPDATE_PROFILE':
            return (state.map((profile) => profile._id === action.payload._id ? action.payload : profile))
        default:
            return state;
    }
}

export default updateProfileReducer;