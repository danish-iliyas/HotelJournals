const setExpReducer = (state = {data:null},action) => {
    switch(action.type){
        case 'SET_USER_EXPERIENCE':
            return{...state,data:action.data}
        default:
            return state;
    }
}

export default setExpReducer;