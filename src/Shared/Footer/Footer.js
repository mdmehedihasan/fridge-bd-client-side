import React from 'react';

const Footer = () => {
    return (
        <div>

            <footer className='mt-5 py-3 bg-success text-white'>
                <p className='fs-5'><small>Copyright @ {new Date().getFullYear()}</small></p> {/* Outputs 2020 */}
            </footer>
        </div>
    );
};

export default Footer;