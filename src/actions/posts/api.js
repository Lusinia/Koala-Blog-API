import axios from 'axios';
import * as constants from '../constants';


const getURL = endpoint => `${constants.BASE_URL}/${endpoint}`;
export const getPosts = () => axios.get(getURL(constants.API_ENDPOINTS.POSTS));
export const getPost = id => axios.get(getURL(`${constants.API_ENDPOINTS.POSTS}/${id}`));
