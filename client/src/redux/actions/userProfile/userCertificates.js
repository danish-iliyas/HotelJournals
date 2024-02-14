import * as api from '../../../api/index.js';

export const setCertificatesAction = (certificatedData) => async(dispatch) => {
    try{
        const {data} = await api.setUserCertification(certificatedData);
        dispatch({type:'SET_USER_CERTIFICATES',data});
        return {success:true,message:'Certificate Added Successfully'}
    }catch(error){
        console.log("Error from setCertificatesAction ", error.message)
        return {success:false,message:'Error in adding Certificates'}
    }
}

export const getCertificatesAction = (id) => async(dispatch) => {
    try{
        const {data} = await api.getUserCertification(id);
        dispatch({type:'GET_USER_CERTIFICATES',data});
        return {success:true,message:'Certificates Fetched Successfully'}
    }catch(error){
        console.log("Error from getCertificatesAction ", error.message)
        return {success:false,message:'Error in getting Certificates'}
    }
}

export const updateCertificateAction = (id,certificateData) => async(dispatch) => {
    try{
        const {data} = await api.updateUserCertification(id,certificateData);
        dispatch({type:'UPDATE_USER_CERTIFICATES',data});
        return {success:true,message:'Certificates Updated Successfully'}
    }catch(error){
        console.log("Error from updateCertificateAction ", error.message)
        return {success:false,message:'Error in updating Certificates'}
    }
}

export const deleteCertificateAction = (id) => async(dispatch) => {
    try{
        await api.deleteCertification(id);
        return {success:true,message:'Certificate Deleted Successfully'}
    }catch(error){
        console.log("Error from deleteCertificateAction ", error.message)
        return {success:false,message:'Error in deleting Certificates'}
    }
}