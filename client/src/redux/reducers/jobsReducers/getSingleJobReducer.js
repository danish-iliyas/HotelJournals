const getSingleJobReducer = (state = {data: null}, action) => {
    switch(action.type){
        case 'GET_JOB_SINGLE':
            console.log("GET_JOB_SINGLE_REDUCER" , action.data);
            return action.data;
        default:
            return state;
    }
    
}

export default getSingleJobReducer;
