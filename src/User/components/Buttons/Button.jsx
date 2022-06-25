import React from 'react';
import './Button.css';
import RightIcon from "../../../images/Button-icon.svg";



const Button = ({children, src=RightIcon , href="#", style }) => {
    return (
        <div className='ButtonIcon' style={style}>
            {children} <img src={src} alt="icon" />
        </div>
    );
}

export default Button;
