import React, { Component, useState } from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { SidebarData } from './sidebarcontent/sidebar';
import './header.css';
import SearchRoundedIcon from '@material-ui/icons/SearchRounded';
import LanguageIcon from '@material-ui/icons/Language';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';


function Header() {
    const [sidebar, setSidebar] = useState(false);

    const showSidebar = () => setSidebar(!sidebar);
    return (
        <div className='header'>
            <Link to={'#'} >
                <span class="ml-auto "><AiIcons.AiOutlineBars onClick={showSidebar} /></span>
            </Link>
            <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to='#' className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div>
            <Hidden xsDown>
                <Link to='/'>
                    <img
                        className='header__icon'
                        src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                        alt="logo"
                    />
                </Link>
            </Hidden>
            </div>
            <div className='header__center'>
                <input type='text' />
                <SearchRoundedIcon />
            </div>
            <Hidden smDown>
            <div className='header__right'>
                <div className='header__b'>
                    <Button varient='outlined'>Become a Seller</Button>
                </div>

            </div>
            </Hidden>
            <div>
                <LanguageIcon />
                <ExpandMoreIcon />
                <AccountCircleIcon />
            </div>
        </div>
    );
}
export default Header;