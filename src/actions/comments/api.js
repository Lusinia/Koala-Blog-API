import axios from '../../services/axios';
import * as constants from '../../constants';


const { API_ENDPOINTS: { POSTS, COMMENTS } } = constants;
const getURL = endpoint => `${constants.BASE_URL}/${endpoint}`;

export const getComments = (id, query) => axios.get(getURL(`${POSTS}/${id}/${COMMENTS}?limit=${query.limit}&page=${query.page}`));
export const getComment = (id, commentId) => axios.get(getURL(`${POSTS}/${id}/${COMMENTS}/${commentId}`));
export const createComment = (id, data) => axios.post(getURL(`${POSTS}/${id}/${COMMENTS}`), data);
export const editComment = (data, id, commentId) => axios.put(getURL(`${POSTS}/${id}/${COMMENTS}/${commentId}`), data);
export const deleteComment = (postId, commentId) => axios.delete(getURL(`${POSTS}/${postId}/${COMMENTS}/${commentId}`));
