import * as api from '../../../api/index.js'

export const setUserEducationAction = (educationData) => async (dispatch) => {
    try {
        const { data } = await api.setUserEducation(educationData)
        dispatch({ type: 'SET_USER_EDUCATION', data });
        return { success: true, message: "Education Added Successfully" }
    } catch (error) {
        console.log("Error from setUserEducationAction", error)
        return { success: false, message: "Error in adding Education" }
    }
}

export const getUserEducationAction = (id) => async(dispatch) => {
    try{
        const {data} = await api.getUserEducation(id);
        dispatch({type:'GET_USER_EDUCATION', data})
        console.log("Education Fetched Successfully", data)
        return { success : true, message : "Education Fetched Successfully"}
    }catch(error){
        console.log("Error from getUserEducationAction" , error);
        return { success : false, message : "Error in getting Education" }
    }
}

export const updateUserEducationAction = (id, educationData) => async(dispatch) => {
    try{
        const {data} = await api.editUserEducation(id, educationData);
        dispatch({type:'UPDATE_USER_EDUCATION', data})
        return { success : true, message : "Education Updated Successfully"}
    }catch(error){
        console.log("Error from updateUserEducationAction" , error);
        return { success : false, message : "Error in updating Education" }
    }
}

export const deleteEducationAction = (id) => async(dispatch) => {
    try {
        const {data} = await api.deleteUserEducation(id);
        return {success:true, message: "Education Deleted Successfully"}
    } catch (error) {
        console.log("Error from deleteEducationAction" , error);
        return {success:false, message: "Error in deleting Education"}
    }
}