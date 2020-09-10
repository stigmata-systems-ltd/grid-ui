import axios from 'axios';
import Cookie from 'js-cookie';
import config from '../config';
import { USER_SIGNIN_REQUEST, USER_SIGNIN_SUCCESS, USER_SIGNIN_FAILURE } from './types';


const signin = (username,password) => async (dispatch) => {

    dispatch({type : USER_SIGNIN_REQUEST , payload : {username,password}});

    try{

        const {data} = await axios.post(config.BASE_URL + '/api/Auth/authenticate' , {username,password});
        dispatch({type : USER_SIGNIN_SUCCESS, payload : data});
        Cookie.set("userInfo" ,JSON.stringify(data));


    }catch(error) {

        dispatch({type : USER_SIGNIN_FAILURE, payload : error.message});
    }
     
}

export {signin};