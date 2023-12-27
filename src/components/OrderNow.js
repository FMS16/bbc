import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBurger } from '@fortawesome/free-solid-svg-icons'
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons'

const OrderNow = () => {
  return (
    <div className='order-now'>
        <a className='btn-order' href=''><FontAwesomeIcon icon={faWhatsapp}></FontAwesomeIcon></a>
        <a className='order-message' href=''>¡Hacé tu pedido!</a>
    </div>
  )
}

export default OrderNow