import React from 'react';

function Notification({notification,userId}){
        return(
            <>
                <div className="row mt-2 p-3 justify-content-between ">
                    <div className="col-sm-11">
                        <p className='notification i'>
                            {notification.from.id === userId ?
                                `You send ${notification.quantity} point(s) to ${notification.to.fname} ${notification.to.lname}`:
                                notification.to.id === userId ?
                                    `${notification.from.fname} ${notification.from.lname} send you ${notification.quantity}  point(s)`: ''
                            }
                        </p>
                    </div>
                    {/*<div className="col-sm-1">*/}
                    {/*    <a href="#" className='btn btn-dark'><i className="fas fa-times"></i></a>*/}
                    {/*</div>*/}
                </div>
            </>
        );
}

export default Notification;