const AllJobsReducer = (state = [], action) => {
    switch (action.type) {
        case 'GET_ALL_JOBS':
            return action.data;
        default:
            return state;
    }
}

export default AllJobsReducer;