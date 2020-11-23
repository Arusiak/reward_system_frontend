import React,{useState} from 'react';
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {Redirect} from "react-router-dom";
import { login } from "../../store/actions/auth";

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
    login: "",
    password: "",
};

const initialErrors ={
    loginError: "",
    passwordError: ""
}

function SigninForm(props){
    const dispatch = useDispatch();
    const { user: currentUser } = useSelector((state) => state.auth);
    const { isLoggedIn } = useSelector(state => state.auth);

    const [user, setUser] = useState({
        login: null,
        password: null,
    });

    const [formErrors, setFormErrors] = useState({
        login: "",
        password: ""
    })

    if (isLoggedIn) {
        if(currentUser.user.role == 'admin'){
            return <Redirect to="/allpointsusers" />;
        }else{
            return <Redirect to="/allpoints" />;
        }

    }


    const validate = () => {
        let loginError = "";
        let passwordError = "";

        if (!user.login) {
            loginError = "Login cannot be null";
        }
        if (!user.password) {
            passwordError = "Password cannot be null";
        }

        if ( loginError || passwordError ) {
            setFormErrors({
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
            dispatch(login(user.login,user.password))
                .then(() => {
                    if(currentUser.user.role == 'admin'){
                        props.history.push("/allpointsusers");
                    }else{
                        props.history.push("/allpoints");
                    }

                })
                .catch(() => {

                    // setLoading(false)
                });
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
            case "login":
                errors.login =
                    value.length < 5 ? "minimum 5 characaters required" : "";
                break;
            case "password":
                errors.password =
                    value.length < 5 ? "minimum 5 characaters required" : "";
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

        return (
            <div className="row">
                <div className="col-sm-12">
                    <h5 className='text-dark font-weight-bold'>Sign In</h5>
                </div>
                <div className="col-sm-12">
                    <p>Don't have an account? <Link to="/signup" className='text-warning'>Sign up free.</Link></p>
                </div>
                <div className="col-sm-12">
                <form onSubmit={handleSubmit}>
                    <div className="row p-3 bg-white rounded border border-secondary boxBorder">
                        <div className="col-sm-12 mt-3">
                            <label htmlFor="inplogin">Login</label>
                        </div>
                        <div className="col-sm-12">
                            <input
                                name="login"
                                className="form-control"
                                id='inplogin'
                                value={user.login}
                                onChange={handleChange}
                            />
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
                                <input
                                    type="password"
                                    name="password"
                                    className="form-control"
                                    id='imppassword'
                                    value={user.password}
                                    onChange={handleChange}
                                />
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
export default SigninForm;




