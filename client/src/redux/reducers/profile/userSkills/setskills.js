const setUserSkillsReducer = (state = {data:null} , action) => {
    switch(action.type){
        case 'SET_USER_SKILLS':
            return {...state,data:action.data}
        default:
            return state;
    }
}
export default setUserSkillsReducer;