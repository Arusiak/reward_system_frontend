import React from 'react';
import SigninForm from "./SigninForm";

function Signin(){
    return(
        <div className='container-fluid'>
            <div className="row d-flex justify-content-center bg-light align-items-center signinform">
                <div className="col-sm-6">
                    <SigninForm/>
                </div>
            </div>
        </div>
    );
}

export default Signin;