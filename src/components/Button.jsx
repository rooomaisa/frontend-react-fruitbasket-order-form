import React from "react";

function Button(type, handleChange, buttonText) {
    return (
        <button
        type={type}
        className={'button'}
        onClick={handleChange}>
            {buttonText}
       </button>
    )
}

export default Button;

// <button type={'submit'}>Submit</button>

