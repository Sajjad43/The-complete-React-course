import { CORE_CONCEPTS } from './data'
import { Header } from './components/Header/Header'
import { CoreConcept } from './components/CoreConcept';
import TabButton from './components/TabButton';
import { useState } from 'react';
import { EXAMPLES } from './data';
import CoreConcepts from './components/CoreConcepts';
import Examples from './components/Examples';

const reactDescriptions = ['Fundamental','Crucial','Core']


function App() {
  
  
  

  return (
    <div>
      <Header/>
      <main>
          
          <CoreConcepts></CoreConcepts>
          <Examples></Examples>
          
      </main>

    </div>
  );
}

export default App;
