import React from 'react';
import logo from '../../assets/logo.png';

function HeaderView(props) {
    return(
        <header className="main-view__header">
            <img src={logo} className="main-view__logo" alt="logo" />
        </header>
            
    );
}
export default HeaderView;