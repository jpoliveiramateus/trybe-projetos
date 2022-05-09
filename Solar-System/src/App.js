import React from 'react';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';
import './App.css';

class App extends React.Component {
  render() {
    return (
      <>
        <Header />
        <SolarSystem />
        <Missions />
        <footer>
          <i>© João Pedro Oliveira</i>
        </footer>
      </>
    );
  }
}

export default App;
