import React from 'react';
import './Header.css';
import logo from './logo.png'
import SearchIcon from '@material-ui/icons/Search';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';

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
                    <span className="header_ele_one">
                        Hello User
                    </span>
                    <span className="header_ele_two">
                        Sign In
                    </span>
                </div>

                <div className="header_element">
                <span className="header_ele_one">
                        Return
                    </span>
                    <span className="header_ele_two">
                        Orders
                    </span>
                </div>

                <div className="header_element">
                <span className="header_ele_one">
                        Your
                    </span>
                    <span className="header_ele_two">
                        Prime
                    </span>
                </div>

                <div className="header_basket">
                    <ShoppingBasketIcon />
                    <span className="header_ele_two header_basketAmount">
                        0
                    </span>
                </div>

            </div>
        </div>
    )
}

export default Header;
