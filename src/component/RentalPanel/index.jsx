import React, {useState, useEffect} from 'react'
import "./RentalPanel.scss"
import AddButton from '../Buttons/AddButton/index'
import AddButtonSource from '../../assets/icons/icons8-plus.svg';
import UploadButton from '../Buttons/Upload/index'
import UploadButtonSource from '../../assets/icons/upload.svg';
import RightArrowSource from '../../assets/icons/arrow.svg';
import PanelItem from '../PanelItem/index.jsx';
import axios from 'axios';

const RentalPanel = () => {
   const [users, setUsers] = useState([]);
    
   useEffect(() => {
    axios.get("https://reqres.in/api/users?page=2")
   .then(res => {
       console.log(res.data.data);
       setUsers(res.data.data)
       })
}, [])
   

        return <section className = "RentalPanel">
            <header className = "RentalPanel__Header">
                <div className="RentalPanel__Header__left">                    
                    <AddButton iconSource = {AddButtonSource}>
                      ADD NEW
                    </AddButton>                    
                    <UploadButton iconUploadSource = {UploadButtonSource} iconArrowSource = {RightArrowSource}/>
               </div>
               <div className="RentalPanel__Header__right">
                   <span className="RentalPanel__Header__right__resultPage"> Results / page</span>
                   <select name="" id="" className="RentalPanel__Header__right__selectPages">
                       <option value="1">1</option>
                       <option value="2">2</option>
                       <option value="3">3</option>
                       <option value="4">4</option>
                       <option value="5">5</option>
                   </select>
               </div>
            </header>
            <main className = "RentalPanel__Content"> 
                
               {users.map((value, index) => {
                   return (<PanelItem key = {index} panelColor = {index} rentalid = {value.id} rentaldate = {value.email} customerid = {value.last_name}/> 
                   )
               }
               )
            }
            
            </main>
            <footer className = "RentalPanel__Footer">            
                Footer
            </footer>
        </section>
}

export default RentalPanel;
