import React from 'react';
import './App.css'

import NavBarComponent from './profile/Profile component/navbar';
import ProfileComponent from './profile/Profile component/ProfileComponent';
import bio from "./profile/Profile component/contact" ;
import myImg from './profilr/image.jpg';

function App () {

  return (
    <div className="App">
    <NavBarComponent/>
    <br/>
    <bio/>
    <ProfileComponent name ="mohamed omar belhassen" myImg={myImg}/>
    <Contact
    Telephone = +21622977424
    email="omarbelhassen16@gmail.com"
    Adress="l'aouina"
    />
    </div>
  );
}
export default App ;