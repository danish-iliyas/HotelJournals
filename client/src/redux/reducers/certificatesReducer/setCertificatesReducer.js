const setCertificatesReducer = (state = {data:null},action) => {
    switch(action.type){
        case 'SET_USER_CERTIFICATES':
            return {...state,data:action.data}
        default:
            return state;
    }
}

export default setCertificatesReducer;