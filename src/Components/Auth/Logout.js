import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../../store/actions/auth";
import {Link} from "react-router-dom";

function Logout(){

    const dispatch = useDispatch();

    const logOut = () => {
        dispatch(logout());
    };

    return(
        <div className="col-sm-1">
            <Link to='/signin' onClick={logOut} className='btn btn-warning text-white'>Logout</Link>
            {/*<Link to='/signin' onClick={() => localStorage.clear()} className='btn btn-warning text-white'>Logout</Link>*/}
        </div>
    );
}

export default Logout;