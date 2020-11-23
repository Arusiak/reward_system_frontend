import React from 'react';

function UserAllPoints({user}){
    return(
        <div className="row userbox mt-2 p-3 justify-content-between align-items-center">
            <div className="col-sm-6">
                <span className='userName'>{user.fname}  {user.lname}</span>
            </div>
            <div className="col-sm-1">
                <span href="#" className='badge badge-dark pointbage'>12</span>
            </div>
        </div>
    );

}

export default UserAllPoints;