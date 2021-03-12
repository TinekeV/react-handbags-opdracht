import React from "react";

function Product({ bagSellingPoint, bagImage, bagImageTitle, bagName, price }) {
    return (
        <article>
            <span>{bagSellingPoint}</span>
            <img src={bagImage} alt={bagImageTitle} />
            <p>{bagName}</p>
            <h4>{price}</h4>
        </article>
    )
}

export default Product