import React from 'react';
import { Contacts } from './contacts/Contacts';
import { DistantWork } from './distantWork/DistantWork';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Skills } from './skills/Skills';
import { Works } from './works/Works';


function App() {
  return (
    <div>
      <Header/>
      <Main/>
     <Skills/>
     <Works/>
     <DistantWork/>
     <Contacts/>
    </div>
  );
}

export default App;
