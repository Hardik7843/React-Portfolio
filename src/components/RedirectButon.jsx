import React from 'react';
import { Link } from 'react-router-dom';

const RedirectButton = (props) => {
    return (

        <div className='w-20'>
            <Link to={props.redirectTo} >
                <div className={props.className}>
                    <p>{props.Name}</p>
                    <i className="ri-arrow-right-up-long-line"></i>
                </div>
            </Link>
        </div>

    );
};

export default RedirectButton;