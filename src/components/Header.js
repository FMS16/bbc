import React from 'react'
import logoBlack from "../assets/images/logoNegro.png"
import logoWhite from "../assets/images/logo.png"
import { faBars } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useState } from 'react'

const Header = () => {
    const [ showMenu, setShowMenu ] = useState(false);

    const toggleMenu = () => {
        setShowMenu(!showMenu);
    };

    const closeMenu = () => {
        setShowMenu(false);
    };
    return (
        <header className='header'>
            <img src={logoBlack} />
            <FontAwesomeIcon className='toggle-menu' icon={faBars} onClick={toggleMenu}></FontAwesomeIcon>
            {showMenu && (
                <div className='overlay' onClick={closeMenu}></div>
            )}
            <nav className={`nav--menu ${showMenu ? 'active' : ''}`}>
                <img className='phone-logo' src={logoWhite} />
                <a href=''>Home</a>
                <a href=''>Nosotros</a>
                <a href=''>Locales</a>
                <a href=''>Propuesta</a>
                <a href=''>Diferencia</a>
                <a href=''>Contacto</a>
            </nav>
        </header>
    )
}

export default Header