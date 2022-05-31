import React from 'react';
import './App.css';
import Catalog from './components/catalog';
import Bar from './components/Bar';
import Reel from './components/Reel';

function App(){
  return(
    <section className='app'>
      <div className='header'>
        <Bar></Bar>
      </div>
      <div className='main'>
        <Reel></Reel>
      </div>
      <div className='catalog'>
        <Catalog></Catalog>
      </div>
      <div className='footer'>

      </div>
    </section>
  );
}

export default App;
