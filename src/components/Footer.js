import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFeather } from '@fortawesome/free-solid-svg-icons'
import logo from "../assets/images/logo.png"

const Footer = () => {
    return (
        <footer className='footer'>
            <h1 className='section-title'>Contacto Comercial</h1>
            <div className='footer-container container'>
                <div className='footer-info'>
                    <p>Agradecemos tu contacto y el interés en nuestro proyecto. Envianos un email a nuestra casilla de contacto para brindarte mas información..</p>
                    <ul>
                        <li><a href=''><FontAwesomeIcon icon={faEnvelope}></FontAwesomeIcon></a></li>
                        <li><a href=''><FontAwesomeIcon icon={faInstagram}></FontAwesomeIcon></a></li>
                        <li><a href=''><FontAwesomeIcon icon={faFacebookF}></FontAwesomeIcon></a></li>
                    </ul>
                </div>
                <form className='form'>
                    <div className='form-item'>
                        <input type='text' className='input-text' placeholder='Nombre' />
                        <input type='text' className='input-text' placeholder='Email' />
                    </div>
                    <div className='form-item'>
                        <input type='text' className='input-text' placeholder='Número teléfonico' />
                        <input type='text' className='input-text' placeholder='Zona de preferencia' />
                    </div>
                    <textarea className='input-textarea' placeholder='Mensaje'></textarea>
                    <FontAwesomeIcon className='feather' icon={faFeather}></FontAwesomeIcon>
                    <input type='submit' className='input-submit' />
                </form>
                <div className='footer-last'>
                    <img src={logo} />
                    <p>©Copyright BBC - <a href=''>Burger & Sushi</a></p>
                </div>
            </div>
        </footer>
    )
}

export default Footer