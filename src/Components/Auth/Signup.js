import React from 'react';
import SignupForm from "./SignupForm";

function Signup (){
        return(
            <div className='container-fluid'>
                <div className="row d-flex justify-content-center bg-light align-items-center signinform">
                    <div className="col-sm-6">
                        <SignupForm/>
                    </div>
                </div>
            </div>
        );
}

export default Signup;