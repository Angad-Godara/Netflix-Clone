import React, { useState, useEffect } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';

function Nav() {

    const [show, handleShow] = useState(false);

    const tansitionNavbar = () => {
        if (window.scrollY > 100) {
            handleShow(true);
        } else {
            handleShow(false);
        }
    }

    useEffect(() => {

        window.addEventListener('scroll', tansitionNavbar)

        return () => {
            window.removeEventListener('scroll', tansitionNavbar)
        };
    }, [])

    return (
        <div className={`nav ${show && 'nav__black'}`}>
            <div className='nav__contents'>
                <img
                    className='nav__logo'
                    src="https://raw.githubusercontent.com/kunaal438/netflix-clone-2.0/master/public/img/logo.png"
                    alt=''
                />
                <Link to='/profile'><img
                    className='nav__avatar'
                    src='https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'
                    alt=''
                />
                </Link>
            </div>
        </div>
    )
}

export default Nav