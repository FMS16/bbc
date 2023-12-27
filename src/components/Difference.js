import React from 'react'
import imgOne from "../assets/images/tab-image-4.png"
import imgTwo from "../assets/images/tab-image-5.png"
import imgThree from "../assets/images/tab-image-3.png"

const Difference = () => {
  return (
    <div className='difference'>
        <h1 className='section-title'>¿Qué nos hace diferentes?</h1>
        <div className='section-difference container'>
            <div className='difference-item'>
                <img src={imgOne} />
                <div className='difference-text'>
                    <h1>Nos diferencia</h1>
                    <p>Nos tomamos las cosas en serio y por eso nos hemos preparado para compartir nuestro modelo de negocios con personas interesadas en un concepto diferente, de tendencia, en crecimiento y accesible. Hemos creado una propuesta de franquicia bajo la premisa ganar-ganar-ganar, porque entendemos que el negocio debe ser rentable, sostenible y escalable, para BBC, los franquiciados y todos aquellos actores como proveedores, que nos permiten cumplir con nuestra propuesta día tras día.</p>
                </div>
            </div>
            <div className='difference-item'>
                <img src={imgTwo} />
                <div className='difference-text'>
                    <h1>¿Qué ofrecemos?</h1>
                    <ul>
                        <li>Innovación en productos</li>
                        <li>Asistencia para la selección de la ubicación</li>
                        <li>Manuales operativos</li>
                        <li>Asistencia y soporte durante la operación</li>
                        <li>Plataforma customizada de delivery con todo el circuito solucionado para el cliente y el negocio</li>
                        <li>Proveeduría auditada</li>
                        <li>Diseño preliminar básico del local</li>
                        <li>Entrenamiento inicial antes y luego de la apertura</li>
                        <li>Soluciones tecnológicas para la operativa diaria: Software de gestión</li>
                    </ul>
                </div>
            </div>
            <div className='difference-item'>
                <img src={imgThree} />
                <div className='difference-text'>
                    <h1>Requisitos</h1>
                    <ul>
                        <li>Que la idea y el concepto te encante</li>
                        <li>Que te motive trabajar en equipo</li>
                        <li>Que estés dispuesto a Aprender/Seguir lineamientos ya probados/Sumar tu experiencia y compartirla con otros/Gestionar tu propio negocio gastronómico</li>
                        <li>Que te guste la gastronomía</li>
                        <li>Que vivas en la ciudad/localidad donde ubicarás el negocio</li>
                        <li>Y otros requisitos que te contaremos cuando nos contactes.</li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Difference