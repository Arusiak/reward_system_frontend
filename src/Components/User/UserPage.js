import React from 'react';
import UserInfo from "./UserInfo";
import Logout from "../Auth/Logout";
import Navigation from "./Navigation";

function UserPage(){
        return(
            <>
                <div className="row d-flex justify-content-around align-items-center mt-1">
                    <UserInfo/>
                    <Logout/>
                </div>
                <div className="row">
                    <div className="col-sm-12">
                        <Navigation/>
                    </div>
                </div>
            </>
        );
}

export default UserPage;