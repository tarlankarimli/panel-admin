import React, {useState} from 'react';
import './App.scss';
import Sidebar from './component/Sidebar/index';
import RentalPanel from './component/RentalPanel';
import CountryPanel from './component/CountryPanel';

const App = () => {
  const [menu, setMenu] = useState('')
  
    return (
      <div className="App">
        <Sidebar currentMenu = {menu} onClickMenu = {(y) => setMenu(y)}/>
        <div className = "App__panel">
          {
            {
              "Country": <CountryPanel />,
              "Rental": <RentalPanel />
            }[menu]
          }
          
        </div>
      </div>
    )
}
export default App;
