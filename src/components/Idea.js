import React from 'react'
import img from "../assets/images/faq-right-1.png"

const Idea = () => {
    return (
        <div className='idea'>
            <h1 className='section-title'>Propuesta</h1>
            <div className='section-idea container'>
                <div className='idea-text'>
                    <p>
                        En BBC nos enfocamos en la “experiencia personalizada de
                        nuestro cliente”, por ello los anfitriones, e innumerables veces
                        los propios dueños interactúan con los presentes de forma tal
                        de superar sus expectativas en todo momento y hacer de su
                        visita un recuerdo memorable y repetible.
                        Nuestra propuesta de valor es una combinación explosiva de
                        factores estimulantes y positivos que despiertan en el visitante
                        una actitud de entrega total al disfrute sin plazos, relajado,
                        motivante y seguro. Familias y amigos eligen la marca para
                        disfrutar un momento, interactuar, divertirse y degustar productos
                        que les gustan.
                        No nos conformamos con un servicio excelente y responsable.
                        Nuestro propósito es dar mucho más del valor que entrega
                        nuestro cliente.
                        No vendemos productos, provocamos experiencias y relaciones
                        humanas que nuestros clientes elijan siempre recordar.
                    </p>
                </div>
                <img src={img} />
            </div>
        </div>
    )
}

export default Idea