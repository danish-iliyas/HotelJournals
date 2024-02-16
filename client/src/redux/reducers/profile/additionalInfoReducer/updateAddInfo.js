const updateAddInfoReducer = (state = [] , action) => {
    switch(action.type){
        case 'UPDATE_ADD_INFO':
            return {...state ,data:action.data}
        default:
            return state;
    }
}

export default updateAddInfoReducer;