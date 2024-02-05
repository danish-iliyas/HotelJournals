const UpdateCourseReducer = (state = [], action) => {
    switch(action.type){
        case 'UPDATE_CURRENT_COURSE':
            console.log("UPDATE_COURSE_REDUCER" , action.data);
            return state.map((course) => course._id === action.payload._id ? action.payload : course)
        default:
            return state;
    }
}

export default UpdateCourseReducer;