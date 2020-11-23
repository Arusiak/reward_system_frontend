import React from 'react';

function Notification({notification}){
        return(
            <>
                <div className="row mt-2 p-3 justify-content-around  admiinnotification">
                    <div className="col-sm-5">
                        <p className='notification'>{notification.from.fname} {notification.from.lname}</p>
                    </div>
                    <div className="col-sm-1">
                        <i className="fas fa-arrow-right"></i>
                    </div>
                    <div className="col-sm-5 text-right">
                        <p className='notification'>{notification.to.fname} {notification.to.lname}</p>
                    </div>
                </div>
            </>
        );

}

export default Notification;