import {GET_AVAILABLE_USERS, GET_NOTIFICATIONS, GET_ADMIN_NOTIFICATIONS, GET_USER_POINTS} from "../actions/types";

const initialState = {
    available: [],
    notifications: [],
    adminNotifications: [],
    points: []
};

export default function (state = initialState, action) {
    const { type, payload } = action;

    switch (type) {
        case GET_AVAILABLE_USERS:
            return {
                ...state,
                available: payload
            };
        case GET_NOTIFICATIONS:
            return {
                ...state,
                notifications: payload
            };
        case GET_ADMIN_NOTIFICATIONS:
            return {
                ...state,
                adminNotifications: payload
            };
        case GET_USER_POINTS:
            return {
                ...state,
                points: payload
            };
        default:
            return state;
    }
}