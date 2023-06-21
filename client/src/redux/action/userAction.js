import api from '../../utils/api';
import { REGISTER_FAIL, REGISTER_SUCCESS } from '../types';


export const registerAction = (formData) => async(dispatch)=>{
    try{
        const res = await api.post('/users/register', formData);
        localStorage.setItem('token', res.formData);
        console.log(res.data);
        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    }catch(err){
       
    }
} 