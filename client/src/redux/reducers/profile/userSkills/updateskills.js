const UpdateSkillsReducer = (state = [] , action) => {
    switch(action.type){
        case 'UPDATE_USER_SKILLS':
            return (state.map((skills) => skills._id === action.payload._id ? action.payload : skills))
        default:
            return state;
    }
}
export default UpdateSkillsReducer;
