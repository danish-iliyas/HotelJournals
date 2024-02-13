import * as api from '../../../api/index.js'

export const setUserSkillsAction = (skillsData) => async(dispatch) => {
    try {
        const {data} = await api.setUserSkills(skillsData);
        dispatch({type:'SET_USER_SKILLS', data});
        return {success:true, message: "Skills Added Successfully"};
    } catch (error) {
        console.log("Error from setUserSkillsAction ", error);
        return {success:false, message: "Error in adding Skills"};
    }
}

export const getUserSkillsAction = (id) => async(dispatch) => {
    try{
        const {data} = await api.getUserSkills(id);
        dispatch({type:'GET_USER_SKILLS', data});
        return {success:true, message: "Skills Fetched Successfully"};
    }catch(error){
        console.log("Error from getUserSkillsAction ", error);
        return {success:false, message: "Error in getting Skills"};       
    }
}

export const updateUserSkillsAction = (id,skillsData) => async(dispatch) => {
    try {
        const {data} = await api.updateUserSkills(id,skillsData);
        dispatch({type:'UPDATE_USER_SKILLS',data});
        return {success:true, message: "Skills Updated Successfully"};
    } catch (error) {
        console.log("Error from updateUserSkillsAction ", error);
        return {success:false, message: "Error in updating Skills"};
    }
}

export const deleteSkillsAction = (id) => async(dispatch) => {
    try{
        await api.deleteUserSkills(id);
        return {success:true, message: "Skills Deleted Successfully"};
    }catch(error){
        console.log("Error from deleteSkillsAction ", error);
        return {success:false, message: "Error in deleting Skills"};
    }
}