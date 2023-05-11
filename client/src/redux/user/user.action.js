import axios from 'axios'
import { userRequest, userSuccess, userFail, userLogout } from './user.reducer';

export const login = (user) => async (dispatch) => {
    try {
        dispatch(userRequest());
        const config = { headers: { "Content-Type": "application/json" } };
        const userData = await axios({
            method: "POST",
            url: "http://localhost:4000/api/v1/user/login",
            //url: "https://gharwalakhanabackend.onrender.com/user/login",
            data: user,
            config
        })
        return dispatch(userSuccess(userData.data))
    } catch (error) {
        return dispatch(userFail(error.response.data.message));
    }
}
export const signUp = (user) => async (dispatch) => {
    try {
        dispatch(userRequest());
        const config = { headers: { "Content-Type": "application/json" } };
        const userData = await axios({
            method: "POST",
            url: "http://localhost:4000/api/v1/user/signup",
            //url: "https://gharwalakhanabackend.onrender.com/user/signup",
            data: user,
            config
        })
        return dispatch(userSuccess(userData.data))
    } catch (error) {
        return dispatch(userFail(error.response.data.message));
    }

}
export const logout = () => async (dispatch) => {
    try {
        dispatch(userRequest());
        const config = { headers: { "Content-Type": "application/json" } };
        await axios({
            method: "GET",
            url: "http://localhost:4000/api/v1/user/logout",
            //url: "https://gharwalakhanabackend.onrender.com/user/logout",
            config
        })
        return dispatch(userLogout())
    } catch (error) {
        return dispatch(userFail(error.response.data.message));
    }
}
export const getUserDetails = () => async (dispatch) => {
    try {
        dispatch(userRequest());
        const userData = await axios({
            method: "GET",
            url: "http://localhost:4000/api/v1/user/me",
            //url: "https://gharwalakhanabackend.onrender.com/user/me",
        })
        return dispatch(userSuccess(userData.data))
    } catch (error) {
        return dispatch(userFail(error.response.data.message));
    }
}