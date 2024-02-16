const setAdditionalInfoReducer = (state = {data:null} , action) => {
    switch (action.type) {
        case 'SET_ADD_INFO':
            return {...state,data: action.data}
        default:
            return state;
    }
}

export default setAdditionalInfoReducer;