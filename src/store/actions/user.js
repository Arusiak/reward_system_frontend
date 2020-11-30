import {GET_AVAILABLE_USERS, GET_NOTIFICATIONS, GET_USER, GET_ADMIN_NOTIFICATIONS,  GET_USER_POINTS} from "./types";
import UserService from "../../services/user.service";

export const getUser = () => (dispatch) => {
    UserService.getUser()
        .then((data) =>{
            dispatch({
                type: GET_USER,
                payload: data
            })

            return Promise.resolve();
        })
};

export const getAvailableUsers = (id) => (dispatch) =>{
    UserService.getAvailableUsers(id)
        .then((data) =>{
            dispatch({
                type: GET_AVAILABLE_USERS,
                payload: data
            })

            return Promise.resolve();
        })
}

export const getNotifications = (id) => (dispatch) =>{
    UserService.getNotifications(id)
        .then((data) =>{
            dispatch({
                type: GET_NOTIFICATIONS,
                payload: data
            })

            return Promise.resolve();
        })
}

export const getAdminNotifications = (id) => (dispatch) =>{
    UserService.getAdminNotifications(id)
        .then((data) =>{
            dispatch({
                type: GET_ADMIN_NOTIFICATIONS,
                payload: data
            })

            return Promise.resolve();
        })
}

export const sendGift = (from,to) => (dispatch) =>{
    UserService.sendGift(from,to)
        .then((data) =>{
            // dispatch({
            //     type: GET_AVAILABLE_USERS,
            //     payload: data
            // })
            dispatch(getAvailableUsers(from))

            return Promise.resolve();
        })
}
export const getUserPoints = (id) => (dispatch) =>{
    UserService.getUserPoints(id)
        .then((data) =>{
            dispatch({
                type:  GET_USER_POINTS,
                payload: data
            })

            return Promise.resolve();
        })
}
