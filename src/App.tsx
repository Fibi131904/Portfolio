import React from 'react';
import { Contacts } from './contacts/Contacts';
import { DistantWork } from './distantWork/DistantWork';
import { Footer } from './footer/Footer';
import { Header } from './header/Header';
import { Main } from './main/Main';
import { Projects } from './project/Projects';
import { Skills } from './skills/Skills';
import './App.scss';


function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Skills />
      <Projects />
      <DistantWork />
      <Contacts />
      <Footer />
    </div>
  );
}

export default App;
