import * as api from '../../../api/index.js'

export const setUserExperienceAction = (experienceData) => async(dispatch) => {
    try {
        const { data } = await api.setUserExperience(experienceData)
        dispatch({ type: 'SET_USER_EXPERIENCE', data })
        return { success : true, message : "Experience Added Successfully" }
    } catch (error) {
        console.log(error)
        return {success:false, message: "Error in adding Experience"}
    }
}

export const getUserExperienceAction = (id) => async(dispatch) => {
    try{
        const {data} = await api.getUserExperience(id);
        dispatch({type:'GET_USER_EXPERIENCE', data})
        console.log("Experience Fetched Successfully", data)
        return { success : true, message : "Experience Fetched Successfully"}
    }catch(error){
        console.log("Error from getUserExperienceAction" , error);
        return { success : false, message : "Error in getting Experience" }
    }
}


export const updateUserExperienceAction = (id, experienceData) => async(dispatch) => {
    try{
        const {data} = await api.editUserExperience(id, experienceData);
        dispatch({type:'UPDATE_USER_EXPERIENCE', data})
        return { success : true, message : "Experience Updated Successfully"}
    }catch(error){
        console.log("Error from updateUserExperienceAction" , error);
        return { success : false, message : "Error in updating Experience" }
    }
}

export const deleteExperienceAction = (id) => async(dispatch) => {
    try {
        const {data} = await api.DeleteUserExperience(id);
        return {success:true, message: "Experience Deleted Successfully"}
    } catch (error) {
        console.log("Error from deleteExperienceAction" , error);
        return {success:false, message: "Error in deleting Experience"}
    }
}