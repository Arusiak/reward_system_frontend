import React from 'react';

function Header(){
    return(
        <div className='container-fluid'>
            <div className="row d-flex justify-content-center bg-dark">
                <div className="col-sm-2 mt-3 mb-3">
                    <img src="../../img/rewards.png" alt="" className='img-fluid'/>
                </div>
            </div>
        </div>
    );
}

export default Header;