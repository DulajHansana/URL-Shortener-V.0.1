import React, { useState } from 'react';
import './App.css';
import Home from './component/home';
import Background from './component/background';
import LinkResult from './component/linkresult';



function App() {
  const [inputValue, setInputValue] = useState("");
  return (
    <div className='container'>
      <Home setInputValue={setInputValue}/>
      <Background />
      <LinkResult inputValue={inputValue}/>
    </div>
   
  );
}

export default App;