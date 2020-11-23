import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {sendGift} from "../../store/actions/user";

function OtherUserBox({user}){

        const dispatch = useDispatch();
        const { user: currentUser } = useSelector((state) => state.auth);
        const handleClick = (e) =>{
            e.preventDefault();
            dispatch(sendGift(currentUser.user.id,user.id));
        }

        return(
            <div className="row userbox mt-2 p-3 justify-content-between align-items-center">
                <div className="col-sm-6">
                    <span className='userName'>{`${user.fname}  ${user.lname}`}</span>
                </div>
                <div className="col-sm-2">
                    <a onClick={handleClick} href="#" className='btn btn-warning giftbtn'>Send Gift</a>
                </div>
            </div>
        );
}

export default OtherUserBox;