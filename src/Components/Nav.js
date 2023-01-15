import React, { useState, useEffect } from 'react'
import './Nav.css'
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Nav() {


    const user = useSelector(selectUser)

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
                <Link to='/'><img
                    className='nav__logo'
                    src="https://raw.githubusercontent.com/kunaal438/netflix-clone-2.0/master/public/img/logo.png"
                    alt=''
                />
                </Link>
                <Link to='/profile'><img
                    className='nav__avatar'
                    src={(user.photoURL) ? `${user.photoURL}` : 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'}
                    alt=''
                />
                </Link>
            </div>
        </div>
    )
}

export default Nav