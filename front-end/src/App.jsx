
import React from 'react';
import './App.css';
import Home from './component/home';
import Background from './component/background';
import Linkresult from './component/linkresult';
import Test from './component/Test';

function App() {
  return (
    <div className='container'>
      <Home />
      <Background />
      <Linkresult />
      <Test />
    </div>
   
  );
}

export default App;