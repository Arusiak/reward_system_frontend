import React, {useEffect} from 'react';
import UserPage from "./UserPage";
import Notification from "./Notification";
import {useDispatch, useSelector} from "react-redux";
import {getNotifications} from "../../store/actions/user";

function AllPoints (){
    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.user.notifications);
    const { user: currentUser } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getNotifications(currentUser.user.id));
    },[]);

    return(
        <>
            <UserPage/>
            <div className='row'>
                <div className="col-sm-12">
                    <h2 className='text-warning text-center font-weight-bold mt-3'>Notifications</h2>
                    <div className="Notifications">
                        {notifications.map((notification) =>
                            <Notification key={notification.id} notification={notification} userId={currentUser.user.id}/>
                        )}
                    </div>
                </div>
            </div>

        </>
    );
}

export default AllPoints;