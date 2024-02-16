import * as api from '../../../api/index.js';

export const setUserLanguageAction = (languageData) => async (dispatch) => {
    try{
        const {data} = await api.setUserLanguage(languageData);;
        dispatch({type:'SET_USER_LANGUAGE',data});
        return {success:true,message:"Language Added Successfully"}
    }catch(error){
        console.log("Error from setUserLanguage Action ",error.message)
        return {success:false,message:"Something Went Wrong"}
    }
}

export const getUserLanguageAction = (id) => async(dispatch) => {
    try{
        const {data} = await api.getUserLanguage(id);
        dispatch({type:'GET_USER_LANGUAGE',data});
        return {success:true,message:"Language Fetched Successfully"}
    }catch(error){
        console.log("Error from getUserLanguage Action ",error.message)
        return {success:false,message:"Something Went Wrong"}
    }
}

export const updateUserLanguageAction = (id,languageData) => async(dispatch) => {
    try{
        const {data} = await api.updateUserLanguage(id,languageData);
        dispatch({type:'UPDATE_USER_LANGUAGE',data});
        return {success:true,message:"Language Updated Successfully"}
    }catch(error){
        console.log("Error from updateUserLanguage Action ",error.message)
        return {success:false,message:"Something Went Wrong"}
    }
}

export const deleteUserLanguageAction = (id) => async(dispatch) => {
    try{
        const {data} = await api.deleteUserLanguage(id);
        dispatch({type:'DELETE_USER_LANGUAGE',data});
        return {success:true,message:"Language Deleted Successfully"}
    }catch(error){
        console.log("Error from deleteUserLanguage Action ",error.message)
        return {success:false,message:"Something Went Wrong"}
    }
}
