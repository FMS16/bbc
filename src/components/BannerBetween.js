import React from 'react';

const BannerBetween = ({ img }) => {
  // Obtén el ancho de la ventana al renderizar el componente
  const windowWidth = window.innerWidth;

  // Define estilos base
  const baseStyles = {
    height: '450px',
    backgroundImage: `url(${img})`,
    backgroundSize: '100%',
    backgroundAttachment: 'fixed',
    width: '100%',
    position: 'relative',
    clipPath: 'polygon(0 0, 50% 50px, 100% 0, 100% 100%, 0 100%)',
    marginTop: '-50px',
  };

  // Define estilos adicionales para dispositivos móviles
  const mobileStyles = {
    backgroundRepeat: 'no-repeat',
    backgroundImage: `url(${img})`,
    backgroundSize: 'contain',
    objectFit: 'cover',
    backgroundPosition: 'center',
  };

  // Combina los estilos base y los estilos adicionales según el tamaño de la pantalla
  const combinedStyles = windowWidth <= 600 ? { ...baseStyles, ...mobileStyles } : baseStyles;

  return <div style={combinedStyles} className="banner-attached"></div>;
};

export default BannerBetween;
