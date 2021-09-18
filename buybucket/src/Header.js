import React from 'react';
import './Header.css';
import logo from './logo.png'
import SearchIcon from '@material-ui/icons/Search';

function Header() {
    return (
        <div className="header">
            <img 
                className="header_logo" 
                src={logo} alt={"logo"}
            />

            <div className="header_search" >
                <input 
                    className="header_search_input"
                    type="text" />
                    <SearchIcon
                    className="header_search_icon" 
                />
                    {/* Logo */}
            </div>

            <div className="header_nav">
                <div className="header_element">
                    <span className="header_elementLineOne">
                        Hello User
                    </span>
                    <span className="header_elementLineTwo">
                        Sign In
                    </span>
                </div>

                <div className="header_element">
                <span className="header_elementLineOne">
                        Return
                    </span>
                    <span className="header_elementLineTwo">
                        Orders
                    </span>
                </div>

                <div className="header_element">
                <span className="header_elementLineOne">
                        Your
                    </span>
                    <span className="header_elementLineTwo">
                        Prime
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Header;
