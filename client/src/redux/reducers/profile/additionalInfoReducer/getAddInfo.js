const getAddInfoReducer = (state = {data:null}, action) => {
    switch(action.type){
        case 'GET_ADD_INFO':
            return {...state,data:action.data}
        default:
            return state;
    }
}

export default getAddInfoReducer;