import React, { useState } from 'react';
import './sidebar.scss';

const Sidebar = ({currentMenu, onClickMenu}) => {
    const [dropDown, setDropDown] = useState(true);

    

        return (
           
            <aside className="sidebar">
            <header className="sidebar__header">
                <h2>{currentMenu}</h2>   
            </header>
            
            <nav className="sidebar__nav">
                <div className = {dropDown === true 
                ? "sidebar__nav__heading"
                : "sidebar__nav__heading__ul"
            }>
                    <h3 onClick={ () => setDropDown(!dropDown)}>CUSTOMER DATA</h3>
                    <ul>
                        <li className={currentMenu === "Country" 
                        ? "sidebar__nav__ul__li sidebar__nav__ul__li--active"
                        : "sidebar__nav__ul__li"} 
                        onClick={() => onClickMenu("Country")}>country</li>

                        <li className={currentMenu === "Rental" 
                        ? "sidebar__nav__ul__li sidebar__nav__ul__li--active"
                        : "sidebar__nav__ul__li"}                        
                        onClick={() => onClickMenu("Rental")}>rental</li>
                    </ul>
                </div>
                <div className="sidebar__nav__heading">
                     <h3>BUSINESS</h3>                     
                </div>
                <div className="sidebar__nav__heading">
                     <h3>CAT</h3>                     
                </div>
                <div className="sidebar__nav__heading">
                     <h3>NEW CATEGORY</h3>                     
                </div>
            </nav>
          </aside>

           
            )
}

export default Sidebar;