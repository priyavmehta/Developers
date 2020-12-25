import axios from 'axios'
import { setAlert } from './alert'

import { GET_PROFILE, PROFILE_ERROR, SET_ALERT, UPDATE_PROFIL, ACCOUNT_DELETED } from '../actions/types'

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
            payload: { msg: error.statusText, status: error.status }
        });
    }
}

export const createProfile = (formData, history, edit= false) => async dispatch => {
    try {
        
        const res = await axios.post('/api/profile',formData);

        dispatch({
            type : GET_PROFILE,
            payload : res.data
        });

        dispatch(setAlert(edit ? 'Profile Updated' : 'Profile Created', 'success', 3000));

        if (!edit) {
            history.push('/dashboard');
        }
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }
        
        console.log(error);
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.statusText, status: error.status }
        });
    }
}

export const addExperience = (formData, history) => async dispatch => {
    try {
        
        const res = await axios.put('/api/profile/experience',formData);

        dispatch({
            type : UPDATE_PROFILE,
            payload : res.data
        });

        dispatch(setAlert('Experience Added', 'success', 3000));

        history.push('/dashboard');
        
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }
        
        console.log(error);
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.statusText, status: error.status }
        });
    }
}

export const addEducation = (formData, history) => async dispatch => {
    try {
        
        const res = await axios.put('/api/profile/education',formData);

        dispatch({
            type : UPDATE_PROFILE,
            payload : res.data
        });

        dispatch(setAlert('Education Added', 'success', 3000));

        history.push('/dashboard');
        
    } catch (error) {
        const errors = error.response.data.errors;

        if (errors) {
            errors.forEach(err => dispatch(setAlert(err.msg, 'danger')));
        }
        
        console.log(error);
        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.statusText, status: error.status }
        });
    }
}

export const deteleExperience = id => async dispatch => {
    try {
        
        const res = await axios.delete(`/api/profile/experience/${id}`)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Experience Deleted', 'success', 3000));
    } catch (error) {

        console.log(error);

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.statusText, status: error.status }
        });
    }
}

export const deteleEducation = id => async dispatch => {
    try {
        
        const res = await axios.delete(`/api/profile/education/${id}`)

        dispatch({
            type: UPDATE_PROFILE,
            payload: res.data
        });

        dispatch(setAlert('Education Deleted', 'success', 3000));
    } catch (error) {

        console.log(error);

        dispatch({
            type: PROFILE_ERROR,
            payload: { msg: error.statusText, status: error.status }
        });
    }
}

export const deteleAccount = id => async dispatch => {
    if (window.confirm('Are you sure? It can NOT be undone!')) {
        try {
        
            const res = await axios.delete('/api/profile/')

            dispatch({ type: ACCOUNT_DELETED })
    
            dispatch(setAlert('Education Deleted', 'success', 3000));
        } catch (error) {
    
            console.log(error);
    
            dispatch({
                type: PROFILE_ERROR,
                payload: { msg: error.statusText, status: error.status }
            });
        }
    }
}