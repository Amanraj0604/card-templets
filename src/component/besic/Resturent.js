import React, { useState } from 'react';
import "./App.css";
import Menucard from './Menucard';
import Menu from "./menuApi"

const Resturent = () => {
  const [MenuData , setMenuData ]=useState(Menu);
  const filterItem=(category)=>{
     const updatedList=Menu.filter((CurElem)=>{
          return CurElem.category === category;
     })
     setMenuData(updatedList)
  };
  return (
     <div>
      <nav className="navbar">
        <div className="btn-group">
          <button className="btn-group__item" onClick= {()=>filterItem("breakfast")}>Breakfast</button>
          <button className="btn-group__item" onClick={()=>filterItem("lunch")}>lunch</button>
          <button className="btn-group__item" onClick={()=>filterItem("evening")}>Evening</button>
          <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button>
          <button className="btn-group__item" onClick={()=> setMenuData(Menu)}>all</button>

        </div>
      </nav>
        < Menucard MenuData={MenuData}/>
  
     </div>
            
  );
};

export default Resturent
