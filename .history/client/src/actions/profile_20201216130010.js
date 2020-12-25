import axios from 'axios'
import { setAlert } from './alert'

import { GET_PROFILE, PROFILE_ERROR, SET_ALERT } from '../actions/types'

export const getCurrentProfile = () => async dispatch => {

    try {
        const res = await axios.get('/api/profile/me');

        dispatch({
            type : GET_PROFILE,
            payload : res.data
        });
    } catch (error) {
        console.log(error);
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.reponse.statusText, status: error.reponse.status }
        });
    }
}