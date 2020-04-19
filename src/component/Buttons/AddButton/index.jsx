import React from 'react';
import './AddButton.scss'
//import AddButton from '../../assets/icons/icons8-plus.svg';

const AddButton = ({iconSource, children}) => {
        return (
        <div className="plusButton">
            <img src={iconSource} 
            alt="button icon" className="plusButton__icon"/>
            
            <span className="plusButton__text">{children}</span>
        </div>
        );
    }

export default AddButton;