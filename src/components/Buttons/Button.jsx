import React from 'react';
import './Button.css';
import RightIcon from "../../images/Button-icon.svg";



const Button = ({children, src=RightIcon , href="#"}) => {
    return (
        <div className='ButtonIcon'>
            <a href={href}>{children} <img src={src} alt="icon" /></a>
        </div>
    );
}

export default Button;
