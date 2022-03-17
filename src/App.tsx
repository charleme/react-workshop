import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';

const App: React.FC<{}> = () => {
  const [value, setValue] = useState(true)
  const [val, setval] = useState(true)
  

  return (
    <div className="App">
      <Titre 
      titre = "Liste de Courses"
      />
      
      <Formulaire value={"Pomme"} checkboxValue={value} setValue={setValue}/>
      <Formulaire value={"Poire"} checkboxValue={val} setValue={setval}/>
      <Footer Pomme={value} Poire={val}/>
    </div>
  );
}

export default App;



const Titre = (props) => {
  return <div>{props.titre}{props.nombre}</div>
}

const Formulaire = (props) => {

  
  return <div>
    <input
    onChange={(e) => props.setValue(e.target.checked)}
    checked={props.checkboxValue}
    type='checkbox'/>
     {props.value} 
    </div>
}

const Footer = (props) => {
  const displaylist= (checkpomme,checkpoire) => {
    const array=[]
    if(!checkpoire){
      array.push(" Poire")
    }
    if(!checkpomme){
      array.push(" Pomme")
    }
    return array
  }
  
  return <div>
    Elements manquants:
    {displaylist(props.Pomme,props.Poire)}
  </div>
}