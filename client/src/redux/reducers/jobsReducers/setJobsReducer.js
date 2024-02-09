const setJobs = (state = {data: null}, action) => {
    switch(action.type){
        case 'CREATE_JOB':
            console.log("Job Reducer : ", action.data);
            return {...state, data:action.data}
        default:
            return state;
    }
}

export default setJobs;
            