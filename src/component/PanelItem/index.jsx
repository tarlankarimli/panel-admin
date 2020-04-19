import React from 'react';
import './panelitem.scss';
import DownIcon from '../../assets/icons/down-arrow.svg';
import EditIcon from '../../assets/icons/icons8-edit.svg';
import DeleteIcon from '../../assets/icons/icons8-delete.svg';
import RightIcon from '../../assets/icons/arrow.svg';

const PanelItem = ({panelColor, rentalid, rentaldate, customerid}) => {
        return (
            <div className= 
            {panelColor%2 ===0 ?  "container"  
            : "container container--color"}>
                <div className="down">
                    <img src={DownIcon} alt="" className="down__icon"/>
                </div>
                <div className="action">
                    <div className="action__edit">
                        <img src={EditIcon} alt="Edit icon" className="action__edit__icon"/>
                    </div>
                    <div className="action__delete">
                        <img src={DeleteIcon} alt="Delete icon" className="action__delete__icon"/>
                    </div>
                </div>
                <div className="rentalID">
                    <span className="rentalID__content">{rentalid}</span>
                </div>
                <div className="rentalDate">
                    <span className="rentalDate__content">{rentaldate}</span>
                </div>
                <div className="customerID">
                    <span className="customerID__content">{customerid}</span>
                </div>
                <div className="display">
                    <img src={RightIcon} alt="" className="display__icon"/>
                </div>
            </div>
        )
}

export default PanelItem;