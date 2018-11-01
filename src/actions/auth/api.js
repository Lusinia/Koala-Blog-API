import axios from '../../services/axios';
import * as constants from '../../constants';


const getURL = endpoint => `${constants.BASE_URL}/${endpoint}`;
export const signUp = data => axios.post(getURL(constants.API_ENDPOINTS.SING_UP), data);
export const signIn = data => axios.post(getURL(constants.API_ENDPOINTS.SING_IN), data);
export const updateUser = (data, id) => axios.put(getURL(`${constants.API_ENDPOINTS.USERS}/${id}`), data);
