import axios from 'axios'
import { setAlert } from './alert'

import { GET_POSTS, POST_ERROR } from '../actions/types'

export const getAllPosts = () => async dispatch => {

    try {
        const res = await axios.get('/api/posts');

        dispatch({
            type: GET_POSTS,
            payload: res.data
        });

    } catch (error) {
        
        console.log(error);
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.statusText, status: error.status }
        });

    }

}