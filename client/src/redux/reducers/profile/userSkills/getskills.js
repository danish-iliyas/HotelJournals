const getskillsReducer = (state = {data:null} , action) => {
    switch(action.type){
        case 'GET_USER_SKILLS':
            return {...state,data:action.data}
        default:
            return state;
    }
}
export default getskillsReducer;