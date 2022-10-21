import React, { useState, useEffect } from 'react'
import './Nav.css'

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
                <img
                    className='nav__avatar'
                    src='https://i.imgflip.com/3iin1n.jpg'
                    alt=''
                />
            </div>
        </div>
    )
}

export default Nav