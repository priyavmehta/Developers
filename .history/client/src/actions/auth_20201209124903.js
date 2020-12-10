import axios from 'axios';
import { REGISTER_SUCCESS, REGISTER_FAIL } from '../actions/types';
import { setAlert } from './alert';

export default register = ({ name, email, password }) => async dispatch => {
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