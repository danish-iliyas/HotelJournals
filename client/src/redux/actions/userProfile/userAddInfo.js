import * as api from '../../../api/index.js'

export const setAddInfoAction = (addInfoData) => async (dispatch) => {
    try {
        const { data } = await api.setAdditionalInfo(addInfoData);
        dispatch({ type: 'SET_ADD_INFO', data });
        return { success: true, message: "Additional Info Added Successfully" }
    } catch (error) {
        console.log("Error from setAddInfoAction", error.message)
        return { success: false, message: "Something Went Wrong" }
    }
}

export const getAddInfoAction = (id) => async (dispatch) => {
    try {
        const {data} = await api.getAdditionalInfo(id);
        dispatch({type:'GET_ADD_INFO',data});
        return { success: true, message: "Additional Info Fetched Successfully" }
    } catch (error) {
        console.log("Error from getAddInfoAction", error.message)
        return { success: false, message: "Something Went Wrong" }
    }
}

export const updateAddInfoAction = (id,addInfoData) => async (dispatch) => {
    try {
        const {data} = await api.updatedAdditionalInfo(id,addInfoData);
        dispatch({type:'UPDATE_ADD_INFO',data});
        return { success: true, message: "Additional Info Updated Successfully" }
    }catch(error){
        console.log("Error from updateAddInfoAction", error.message)
        return { success: false, message: "Something Went Wrong" }
    }
}

export const deleteAddInfoAction = (id) => async (dispatch) => {
    try {
        await api.deleteAdditionalInfo(id);
        return { success: true, message: "Additional Info Deleted Successfully" }
    }catch(error){
        console.log("Error from deleteAddInfoAction", error.message)
        return { success: false, message: "Something Went Wrong" }
    }
}
