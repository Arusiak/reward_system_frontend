import React from 'react';
import Navigation from "../Admin/Navigation";
import Logout from "../Auth/Logout";
import {useSelector} from "react-redux";

function AdminPage(){

const { user } = useSelector(state => state.auth.user);

    return(
        <div className='container-fluid'>
            <div className="row d-flex justify-content-around align-items-center mt-1">
                <div className="col-sm-6">
                    <h3>{`${user.fname}`}</h3>
                </div>
                <Logout/>
            </div>
            <div className="row">
                <div className="col-sm-12">
                    <Navigation/>
                </div>
            </div>
        </div>
    );
}

export default AdminPage;