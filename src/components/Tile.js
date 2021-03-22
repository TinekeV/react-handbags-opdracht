import React from "react";

function Tile({ title, text, image, imageAlt, children}) {
    return (
        <section>
            <h2>{title}</h2>
            <p>{text}</p>
            <img src={image} alt={imageAlt}/>
            {children}
        </section>
    )
}

export default Tile