export const setProfileReducer = (state = {data:null},action) => {
    switch(action.type){
        case 'CREATE_PROFILE':
            console.log("Profile Reducer : ", action.data);
            return {...state,data:action.data}
        default:
            return state;
    }
}

export default setProfileReducer;