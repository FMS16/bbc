import React from 'react'
const BannerBetween = ({ img }) => {
  const style = {
    height: "450px",
    backgroundImage: `url(${img})`,
    backgroundSize: "100%",
    backgroundAttachment: "fixed",
    width: "100%",
    position: "relative",
  };

  return <div style={style} className="banner-attached"></div>;
};


export default BannerBetween