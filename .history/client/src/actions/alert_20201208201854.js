import uuid from 'uuid';
import { SET_ALERT, REMOVE_ALERT } from './types';

export default setAlert = (msg, alertType) => dispatch => {
    const id = uuidv4();

    dispatch({
        type: SET_ALERT,
        payload: {id, alertType, msg}
    });
}