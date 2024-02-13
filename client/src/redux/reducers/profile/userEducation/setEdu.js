const setEducationReducer = (state = {data:null} , action) => {
    switch(action.type){
        case 'SET_USER_EDUCATION':
            return{...state,data:action.data}
        default:
            return state;
    }
}

export default setEducationReducer;
