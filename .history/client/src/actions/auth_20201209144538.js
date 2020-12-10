import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL, USER_LOADED } from '../actions/types';
import setAuthToken from '../utils/setAuthToken';
import { setAlert } from './alert';

export const loadUser = () => async dispatch => {
    if (localStorage.token) {
        setAuthToken(localStorage.token);
    }

    try {

        const res = axios.get('/api/auth');

        dispatch({
            type: USER_LOADED,
            payload: res.data
        });
        
    } catch (error) {
        
    }
}

export const register = ({ name, email, password }) => async dispatch => {
    const newUser = { name, email, password }

    const config = {
        headers: {
            'Content-Type' : 'application/json'
        }
    }

    const body = JSON.stringify(newUser);

    try {
        const res = await axios.post('/api/users', body, config);

        dispatch({
            type: REGISTER_SUCCESS,
            payload: res.data
        })
    } catch (error) {

        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }

        dispatch({
            type: REGISTER_FAIL
        })
    }
    
}