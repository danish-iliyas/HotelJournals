const updateCertificateReducer = (state = [] , action) => {
    switch(action.type){
        case 'UPDATE_USER_CERTIFICATES':
            return state.map((certificate) => certificate._id === action.payload._id ? action.payload : certificate)
        default:
            return state;
    }
}

export default updateCertificateReducer;