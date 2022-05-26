import React from 'react';
import './Button.css';
import RightIcon from "../../images/Button-icon.svg";



const Button = ({children}) => {
    return (
        <div className='ButtonIcon'>
            <a href="#">{children} <img src={RightIcon} alt="icon" /></a>
        </div>
    );
}

export default Button;
