import React, {useEffect} from 'react';
import UserAllPoints from "./UserAllPoints";
import AdminPage from "./AdminPage";
import {useDispatch, useSelector} from "react-redux";
import {getAvailableUsers} from "../../store/actions/user";
import OtherUserBox from "../User/OtherUserBox";

function AllPointsUsers(){
    const dispatch = useDispatch();
    const users = useSelector((state) => state.user.available);
    const { user: currentUser } = useSelector((state) => state.auth);

    useEffect(() => {
        dispatch(getAvailableUsers(currentUser.user.id));
    },[]);

    return(
        <>
            <AdminPage/>
            <div className='row'>
                <div className="col-sm-12">
                    <h2 className='text-warning text-center font-weight-bold mt-3'>Users Points</h2>
                    {users.map((user) =>
                        <UserAllPoints key={user.id} user={user}/>
                    )}

                        {/*<UserAllPoints/>*/}
                </div>
            </div>
        </>
    );
}

export default AllPointsUsers;