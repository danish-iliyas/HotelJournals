const UpdateJobsReducer = (state = [] , action) => {
    switch(action.type){
        case 'UPDATE_CURRENT_JOB':
            return state.map((course) => course._id === action.payload._id ? action.payload : course)
        default:
            return state;
    }
}


export default UpdateJobsReducer;