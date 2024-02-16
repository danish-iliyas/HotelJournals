const CVsettergetterReducer = (state = {data:null} , action) => {
    switch(action.type){
        case 'SET_USER_CV':
            return {...state , data:action.data}
        case 'GET_USER_CV':
            return {...state , data:action.data}
        case 'DELETE_USER_CV':
            return {...state , data:null}
        default:
            return state;
    }
}

export default CVsettergetterReducer;