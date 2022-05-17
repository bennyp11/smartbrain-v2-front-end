import React from 'react';
import Logo from '../Logo/Logo.js';
import TypeAnimation from 'react-type-animation';
import './Navigation.css';

const Animation = ()=> {
    return (
    <TypeAnimation
        cursor={true}
        sequence={[
          'SMARTBRAIN',
        ]}
        wrapper="none"
    />
    );
}

const Navigation = ({ onRouteChange, isSignedIn }) => {
        if(isSignedIn) {
            return(
                <div className='nav-container'>
                    <div className='logo-container'>
                    <Logo/>
                    </div>
                    <div className='title'>
                    <Animation />
                    </div>
                    <p onClick={() => onRouteChange('signout')} className='f3 link dim black underline pa3 pointer signout-container'>Sign Out</p>
                </div>
            );
        } else {
            return(
            <div className='nav-container'>
                    <div className='title-not-logged-in'>
                    <Animation />
                    </div>
                    <div className='not-logged-in-nav-container'>
                    <p onClick={() => onRouteChange('signin')} className='f3 link dim black underline pa3 pointer'>Sign In</p>
                    <p onClick={() => onRouteChange('register')} className='f3 link dim black underline pa3 pointer'>Register</p>
                    </div>
            </div>
            );
        }
}

export default Navigation;

