import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../features/userSlice'
import Nav from './Nav'
import './Profile.css'
import { auth } from '../firebase'

function Profile() {

    const user = useSelector(selectUser)

    return (
        <div className='profileScreen'>
            <Nav />
            <div className='profileScreen__body'>
                <h1>Edit Profile</h1>
                <div className='profileScreen__info'>
                    <img src={(user.photoURL) ? `${user.photoURL}` : 'https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png'} alt='N' />
                    <div className='profileScreen__details'>
                        <h2>{user.email}</h2>
                        <div className="profile__actions">
                            <p>INFO: These updations are currently under development</p>
                            <button className='profileScreen__updates'>Verify Email</button>
                            <button className='profileScreen__updates'>Update Email</button>
                            <button className='profileScreen__updates'>Update Password</button>
                            <button className='profileScreen__signOut' onClick={() => auth.signOut()}>Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile