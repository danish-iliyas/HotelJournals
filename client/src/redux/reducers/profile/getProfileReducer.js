const getProfileReducer = (state = {data:null},action) => {
    switch(action.type){
        case 'GET_PROFILE':
            return{...state,data:action.data}
        default:
            return state;
    }
}

export default getProfileReducer;