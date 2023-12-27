import React from 'react'
import logoBlack from "../assets/images/logoNegro.png"

const Header = () => {
  return (
    <header className='header'>
        <img src={logoBlack} />
        <nav className='nav--menu'>
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