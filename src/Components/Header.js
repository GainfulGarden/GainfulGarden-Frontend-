import React, { Component } from 'react'
import HoverImage from "react-hover-image";
import { NavLink } from 'react-router-dom'
import './header.css'


export default class Header extends Component {
    render() {
        return (
            <div className='header'>
                <img className='main-logo' alt='GainfulGarden Logo' src='/GainfulGarden_mainLogo.png' />
                <div className='link-list'>
                    <NavLink className='header-link' to='/search'>
                        <HoverImage className='header-icon' alt='search icon' src='/search_header_icon.png' hoverSrc='/search_icon_Y.png' />
                        Search
                    </NavLink>
                    <NavLink className='header-link' to='/my_garden'>
                        <HoverImage className='header-icon' alt='search icon' src='/garden_header_icon.png' hoverSrc='/garden_icon_Y.png' />
                        My Garden
                    </NavLink>
                    <NavLink className='header-link' to='/wishlist'>
                        <HoverImage className='header-icon' alt='search icon' src='/wishlist_header_icon.png' hoverSrc='/wishlist_icon_Y.png' />
                        Wishlist
                    </NavLink>
                    <NavLink className='header-link' to='/'>
                        <HoverImage className='header-icon' alt='search icon' src='/logout_header_icon.png' hoverSrc='/logout_icon_Y.png' />
                        Log Out
                    </NavLink>
                </div>
            </div>
        )
    }
}