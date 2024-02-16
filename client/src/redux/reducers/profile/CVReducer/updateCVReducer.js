const UpdateCVReducer = (state = [], action ) => {
    switch(action.type){
        case 'UPDATE_USER_CV':
            return (state.map((CV) => CV._id === action.payload._id ? action.payload : CV))
        default:
            return state;
    }
}

export default UpdateCVReducer;