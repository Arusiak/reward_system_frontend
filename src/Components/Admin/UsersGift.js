import React, {useEffect} from 'react';
import Notification from "./Notification";
import AdminPage from "./AdminPage";
import {getAdminNotifications} from "../../store/actions/user";
import {useDispatch, useSelector} from "react-redux";

function UsersGift(){
    const dispatch = useDispatch();
    const notifications = useSelector((state) => state.user.adminNotifications);
    const { user: currentUser } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getAdminNotifications(currentUser.user.id));
    },[]);


        return(
            <>
                <AdminPage/>
                <div className='row'>
                    <div className="col-sm-12">
                        <h2 className='text-warning text-center font-weight-bold mt-3'>Notifications</h2>
                        <div className="Notifications">
                            {notifications.map((notification) =>
                                <Notification key={notification.id} notification={notification}/>
                            )}
                        </div>
                    </div>
                </div>
            </>
        );
    }


export default UsersGift;