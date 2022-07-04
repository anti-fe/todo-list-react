import React from "react";

export default function Circle({ w, h, c1, c2, posX, posY }) {
    const circleStyles = {
        width: w,
        height: h,
        background: `linear-gradient(150.29deg, ${c1} 4.78%, ${c2} 95.48%)`,
        filter: "blur(50px)",
        borderRadius: "200px",
        position: "absolute",
        right: posX,
        top: posY,
        zIndex: -1
    }
  return (
    <div style={circleStyles}></div>
  );
}
