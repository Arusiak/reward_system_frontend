import React from 'react';
import UserPage from "./UserPage";

function Rules(){
        return(
            <>
                <UserPage/>
                <h2 className='text-warning text-center font-weight-bold mt-3'>Rules</h2>
                <ul className='mt-5'>
                    <li>You will get 5 points every day.</li>
                    <li>You must donate 5 points to other users by the end of the day. Otherwise all points will be null</li>
                    <li>You will receive an additional 10 points on your birthday.</li>
                </ul>
            </>
        );
}

export default Rules;