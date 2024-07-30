import axios from 'axios';
import Cookies from 'js-cookie';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILURE = 'LOGIN_FAILURE';
export const LOGOUT = 'LOGOUT';

export const login = (username, password) => async (dispatch) => {
    try {
        console.log("test",username, password)
        const response = await axios.post('http://localhost:6567/api/v1/user/login', { username, password });
        console.log(response.data.accessToken);
        localStorage.setItem('token', response.data.accessToken);
        Cookies.set('accessToken', `${response.data.accessToken}`);
        dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    } catch (error) {
        console.error("done",error); 
        dispatch({ type: LOGIN_FAILURE, payload: error.message });
    }
};


export const fetchAdminProfile = () => async (dispatch) => {
  try {
    const response = await axios.get('http://localhost:6567/api/v1/user/profile', {
      withCredentials: true,
    });
    dispatch({
      type: 'FETCH_ADMIN_PROFILE_SUCCESS',
      payload: response.data,
    });
  } catch (error) {
    dispatch({
      type: 'FETCH_ADMIN_PROFILE_FAILURE',
      payload: error.response ? error.response.data : 'Something went wrong',
    });
  }
};
export const logout = () => (dispatch) => {
  localStorage.removeItem('token');
  Cookies.remove('accessToken');
  dispatch({ type: LOGOUT });
};