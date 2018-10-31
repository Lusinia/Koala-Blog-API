import axios from 'axios';
import * as constants from '../constants';


const getURL = endpoint => `${constants.BASE_URL}/${endpoint}`;
export const getPosts = () => axios.get(getURL(constants.API_ENDPOINTS.POSTS));
export const getPost = id => axios.get(getURL(`${constants.API_ENDPOINTS.POSTS}/${id}`));
export const createPost = data => axios.post(getURL(`${constants.API_ENDPOINTS.POSTS}`), data);
export const editPost = (data, id) => axios.put(getURL(`${constants.API_ENDPOINTS.POSTS}/${id}`), data);
export const deletePost = id => axios.delete(getURL(`${constants.API_ENDPOINTS.POSTS}/${id}`));
