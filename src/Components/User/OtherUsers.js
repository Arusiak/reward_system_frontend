import React, {useEffect} from 'react';
import UserPage from "./UserPage";
import OtherUserBox from "./OtherUserBox";
import {useDispatch, useSelector} from "react-redux";
import {getAvailableUsers} from "../../store/actions/user";

function OtherUsers(){

        const dispatch = useDispatch();
        const users = useSelector((state) => state.user.available);
        const { user: currentUser } = useSelector((state) => state.auth);

        useEffect(() => {
                dispatch(getAvailableUsers(currentUser.user.id));
        },[]);

        return(
            <>
                <UserPage/>
                    {users.map((user) =>
                        user.sendPoint &&
                        <OtherUserBox key={user.id} user={user}/>
                    )}
            </>
        );
}

export default OtherUsers;