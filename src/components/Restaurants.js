import React from 'react'
import imgOne from "../assets/images/tab-image-1.png"
import imgTwo from "../assets/images/tab-image-2.png"
import imgThree from "../assets/images/tab-image-6.png"

const Restaurants = () => {
  return (
    <div className='restaurants'>
        <h1 className='section-title'>Nuestros locales</h1>
        <div className='section-restaurants container'>
            <div className='item-restaurant'>
                <img src={imgOne} />
                <h1>BBC Las Piedras</h1>
                <h2>Avda Instrucciones del año XIII 792.</h2>
            </div>
            <div className='item-restaurant'>
                <img src={imgTwo} />
                <h1>BBC Pocitos</h1>
                <h2>Pedro Berro 1348, Pocitos.</h2>
            </div>
            <div className='item-restaurant'>
                <img src={imgThree} />
                <h1>BBC Prado</h1>
                <h2>Av. Luis Alberto de Herrera 4009.</h2>
            </div>
        </div>
    </div>
  )
}

export default Restaurants