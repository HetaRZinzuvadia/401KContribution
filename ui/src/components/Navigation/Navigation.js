import React from 'react';

const Navigation = ({ isSignedIn, onRouteChange }) => {
  const pClasses = 'f3 link dim black pa3 pointer';
    if (isSignedIn) {
      return (
        <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
          <p onClick={() => onRouteChange('signout')} className={pClasses}>Sign Out</p>
        </nav>
      );
    }
    return (
      <nav style={{display: 'flex', justifyContent: 'flex-end'}}>
        <p onClick={() => onRouteChange('signin')} className={pClasses}>Sign In</p>
        <p onClick={() => onRouteChange('register')} className={pClasses}>Register</p>
      </nav>
    );
}

export default Navigation;