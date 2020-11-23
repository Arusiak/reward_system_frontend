import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getUser} from "../../store/actions/user";

function UserInfo(){

    const { user } = useSelector(state => state.auth.user);

    return(
        <div className="col-sm-6">
            <h3>{`${user.fname}  ${user.lname}`}</h3>
            <p>Point: <span className='point'>34</span></p>
        </div>
    );
}

export default UserInfo;