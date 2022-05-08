import React from 'react';
import notfound from "../../images/notFound/notFound.jpg"

const NotFound = () => {
    return (
        <div>
            <div><img src={notfound} alt="" /></div>
            <div>
                <h3 className='text-success'>The Page Your Are Looking Invalid</h3>
                <p>The page you are looging is not valid.Please check your link again and enter the link. If you want to contact with us please go to our website and submit a contact form. We are waiting to hear you. Thank you.</p>
            </div>
        </div>
    );
};

export default NotFound;