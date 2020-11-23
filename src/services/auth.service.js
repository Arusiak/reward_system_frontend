import axios from "axios";

const API_URL = "http://localhost:8000/api/";

const register = (fname, lname, bday , login , password) => {
    return axios.post(API_URL + "auth/register", {
        fname,
        lname,
        bday ,
        login ,
        password
    });
};

const login = (login, password) => {
    return axios
        .post(API_URL + "auth/login", {
            login,
            password,
        })
        .then((response) => {
            if (response.data.access_token) {
                localStorage.setItem("user", JSON.stringify(response.data));
            }

            return response.data;
        });
};

const logout = () => {
    localStorage.removeItem("user");
};

export default {
    register,
    login,
    logout,
};