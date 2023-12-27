import React from 'react'
import logoBlanco from "../assets/images/logo.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { faMobile } from '@fortawesome/free-solid-svg-icons'

const Banner = () => {
    return (
        <div className='banner'>
            <div className='banner-content'>
                {/* <h1>Burger & Sushi</h1> */}
                {/*<h2>Ordená ahora por Whatsapp <span><FontAwesomeIcon icon={faMobile}></FontAwesomeIcon>098333222</span></h2> */}
                <img src={logoBlanco} />
            </div>
        </div>
    )
}

export default Banner