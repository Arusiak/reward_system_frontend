import React, {useEffect} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getAdminNotifications, getUser} from "../../store/actions/user";
import {getUserPoints} from "../../store/actions/user";

function UserInfo(){
    const dispatch = useDispatch();
    const points = useSelector((state) => state.user.points);
    const { user: currentUser } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getUserPoints(currentUser.user.id))
        dispatch(getAdminNotifications(currentUser.user.id));
    },[]);

    const { user } = useSelector(state => state.auth.user);

    return(
        <div className="col-sm-6">
            <h3>{`${user.fname}  ${user.lname}`}</h3>
            <p>Point: <span className='point'>{points}</span></p>
        </div>
    );
}

export default UserInfo;