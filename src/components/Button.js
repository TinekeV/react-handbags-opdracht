import React from 'react';

function Button({ text }) {
    return (
        <button
            onClick={() => console.log(text)}
        >{text}
        </button>
    );
}

export default Button