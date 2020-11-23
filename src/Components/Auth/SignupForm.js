import React,{useState} from 'react';
import { useDispatch, useSelector } from "react-redux";
import {Link,Redirect} from "react-router-dom";
import { register } from "../../store/actions/auth";

const formValid = (formErrors,user) => {
    let valid = true;

    Object.values(formErrors).forEach(val => {
        val.length > 0 && (valid = false);
    });

    Object.values(user).forEach(val => {
        val === null && (valid = false);
    });

    return valid;
};
const initialUser = {
    firstName: "",
    lastName: "",
    bDay: "",
    login: "",
    password: "",
};

const initialErrors ={
    firstNameError: "",
    lastNameError: "",
    bDayError: "",
    loginError: "",
    passwordError: ""
}
function SignupForm(props){

    const dispatch = useDispatch();


    const [user, setUser] = useState({
        firstName: null,
        lastName: null,
        bDay: null,
        login: null,
        password: null,
    });

    const [formErrors, setFormErrors] = useState({
        firstName: "",
        lastName: "",
        bDay: "",
        login: "",
        password: ""
    })


    const validate = () => {
        let firstNameError = "";
        let lastNameError = "";
        let bDayError = "";
        let loginError = "";
        let passwordError = "";


        if (!user.firstName) {
            firstNameError = "FirstName cannot be null";
        }
        if (!user.lastName) {
            lastNameError = "LastName cannot be null";
        }
        if (!user.bDay) {
            bDayError = "Birthday cannot be null";
        }
        if (!user.login) {
            loginError = "Login cannot be null";
        }
        if (!user.password) {
            passwordError = "Password cannot be null";
        }

        if ( firstNameError || lastNameError || bDayError || passwordError || passwordError ) {
            setFormErrors({
                firstName: firstNameError,
                lastName: lastNameError,
                bDay: bDayError,
                login: loginError,
                password: passwordError
            });
            return false;
        }

        return true;
    };
    const handleSubmit = e => {
        e.preventDefault();

        if (formValid(formErrors,user)) {
            dispatch(register(user)).then(() => {
                props.history.push("/signin");
            })
        } else {
            const isValid = validate();
            if (isValid) {
                console.log(user);
                // clear form
                setUser(initialUser);
                setFormErrors(initialErrors);
            }
        }
    };

    const handleChange = e => {
        e.preventDefault();
        const isCheckbox = e.target.type === "checkbox";
        const { name, value } = e.target;
        let errors = { ...formErrors };

        switch (name) {
            case "firstName":
                errors.firstName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "lastName":
                errors.lastName =
                    value.length < 3 ? "minimum 3 characaters required" : "";
                break;
            case "login":
                errors.login =
                    value.length < 5 ? "minimum 6 characaters required" : "";
                break;
            case "password":
                errors.password =
                    value.length < 5 ? "minimum 8 characaters required" : "";
                break;
            default:
                break;
        }
        setUser({
            ...user,
            [name] : value.trim()
        })

        setFormErrors(errors);
    };
        return(
                <div className="row">
                    <div className="col-sm-12">
                        <h5 className='text-dark font-weight-bold'>Sign Up</h5>
                    </div>
                    <div className="col-sm-12">
                        <p>Sign up takes less than a minute. If you already have an account <Link to="/signin" className='text-warning'>sign in.</Link></p>
                    </div>
                    <div className="col-sm-12">
                        <form onSubmit={handleSubmit}>
                            <div className="row p-3 bg-white rounded border border-secondary boxBorder">
                                <div className="col-sm-6">
                                    <input type="text" className="form-control error" id='impname' placeholder='FirstName' name="firstName" value={user.firstName} onChange={handleChange}/>
                                    {formErrors.firstName.length > 0 && (
                                        <span className="errorMessage">{formErrors.firstName}</span>
                                    )}
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {formErrors.firstNameError}
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <input type="text" className="form-control" id='implname' placeholder='LastName'  name="lastName" value={user.lastName} onChange={handleChange}/>
                                    {formErrors.lastName.length > 0 && (
                                        <span className="errorMessage">{formErrors.lastName}</span>
                                    )}
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {formErrors.lastNameError}
                                    </div>
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <label htmlFor="impbday">Birthday</label>
                                </div>
                                <div className="col-sm-12">
                                    <input type="date" className="form-control" id='impbday'  name="bDay" value={user.bDay} onChange={handleChange}/>
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {formErrors.bDay}
                                    </div>
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <label htmlFor="inplogin">Login</label>
                                </div>
                                <div className="col-sm-12">
                                    <input type="text" className="form-control " id='inplogin'  name="login" value={user.login} onChange={handleChange} />
                                    {formErrors.login.length > 0 && (
                                        <span className="errorMessage">{formErrors.login}</span>
                                    )}
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {formErrors.loginError}
                                    </div>
                                </div>
                                <div className="col-sm-12 mt-3">
                                    <label htmlFor="imppassword">Password</label>
                                </div>
                                <div className="col-sm-12">
                                    <input type="password" className="form-control" id='imppassword'  name="password" value={user.password} onChange={handleChange}/>
                                    {formErrors.password.length > 0 && (
                                        <span className="errorMessage">{formErrors.password}</span>
                                    )}
                                    <div style={{ fontSize: 12, color: "red" }}>
                                        {formErrors.passwordError}
                                    </div>
                                </div>
                                <div className="col-sm-4 mt-3">
                                    <input type="submit" className='btn btn-dark form-control' value='Submit'/>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
        );
}

export default SignupForm;