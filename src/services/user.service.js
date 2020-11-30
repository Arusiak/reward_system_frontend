import axios from "axios";
import authHeader from "./auth-header";

const API_URL = "http://localhost:8000/api/";


const getUser = () => {
    return axios
        .get(API_URL + "auth/user-profile", { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

const getAvailableUsers = (id) => {
    return axios
        .get(`${API_URL}user/${id}/available`, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

const getNotifications = (id) => {
    return axios
        .get(`${API_URL}user/${id}/notifications`, { headers: authHeader() })
        .then((response) => {
            return response.data;
        });
};

const getAdminNotifications = (id) => {
    return axios
        .get(`${API_URL}admin/${id}/notifications`, {
            headers: authHeader(),
        })
        .then((response) => {
            return response.data;
        });
};


const sendGift = (from,to,quantity = 1) => {
    return axios
        .post(`${API_URL}user/${from}/send`, {
            headers: authHeader(),
            from,
            to,
            quantity
        })
        .then((response) => {
            return response.data;
        });
};
const getUserPoints = (id) => {
    return axios
        .get(`${API_URL}user/${id}/point`, {
            headers: authHeader(),
        })
        .then((response) => {
            return response.data;
        });
};


export default {
    getUser,
    getAvailableUsers,
    sendGift,
    getNotifications,
    getAdminNotifications,
    getUserPoints
};