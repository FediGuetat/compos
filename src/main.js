import React from 'react';
import './App.css';
import ProfilPhoto from "./Profile/profilPhoto"
import FullName from "./Profile/FullName"
import Adress from "./Profile/Adress"


const Main = () => {
  return (
    <div className="App">
    <ProfilPhoto />
    <FullName/>
    <Adress/>
      
    
    </div>

  )
}


  export default Main;
  
