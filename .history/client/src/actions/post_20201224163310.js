import axios from 'axios'
import { setAlert } from './alert'
import { ADD_POST, DELETE_POST, GET_POSTS, POST_ERROR, UPDATE_LIKES } from '../actions/types'

export const getPosts = () => async dispatch => {

    try {
        const res = await axios.get('/api/posts');
        console.log(res);

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

export const addLike = postId => async dispatch => {

    try {
        const res = await axios.put(`/api/posts/like/${postId}`);
        console.log(res);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data }
        });

    } catch (error) {
        
        console.log(error);
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.statusText, status: error.status }
        });

    }

}

export const removeLike = postId => async dispatch => {

    try {
        const res = await axios.put(`/api/posts/unlike/${postId}`);
        console.log(res);

        dispatch({
            type: UPDATE_LIKES,
            payload: { postId, likes: res.data }
        });

    } catch (error) {
        
        console.log(error);
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.statusText, status: error.status }
        });

    }

}

export const deletePost = postId => async dispatch => {

    try {
        const res = await axios.delete(`/api/posts/${postId}`);
        console.log(res);

        dispatch({
            type: DELETE_POST,
            payload: postId
        });

        dispatch(setAlert('Post Removed', 'success', 3000))

    } catch (error) {
        
        console.log(error);
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.statusText, status: error.status }
        });

    }

}

export const addPost = formData => async dispatch => {

    try {
        const res = await axios.post('/api/posts', formData);

        dispatch({
            type: ADD_POST,
            payload: res.data
        });

        dispatch(setAlert('Post Created', 'success', 3000))

    } catch (error) {
        
        console.log(error);
        dispatch({
            type: POST_ERROR,
            payload: { msg: error.statusText, status: error.status }
        });

    }

}