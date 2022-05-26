import React from 'react';
import './Button.css';



const Button = ({children}) => {
    return (
        <div className='ButtonIcon'>
            <a href="#">{children} <img src="./image/Button-icon.svg" alt="icon" /></a>
        </div>
    );
}

export default Button;
