
import React from 'react';
import './App.css';
import Home from './component/home';
import Background from './component/background';
import LinkResult from './component/linkresult';



function App() {
  return (
    <div className='container'>
      <Home />
      <Background />
      <LinkResult />
    </div>
   
  );
}

export default App;