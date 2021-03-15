import React from 'react';

function Button({ text }) {
    return (
        <button
            onClick={() => console.log(text)}
            disabled={text === "pre-orders" ? true : ""}
        >{text}
        </button>
    );
}

export default Button