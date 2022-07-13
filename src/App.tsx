import React from 'react';

import logo from './logo.svg';
import AppTabs from './features/tabs/tabs';
import Navigation from './components/navigation/navigation';
import Header from './components/header/header';
import Banner from './components/banner/banner';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Events from './features/events';
import Slogans from './features/slogans';
import Videos from './features/videos';
import Vision from './components/vision';

function App() {
  return (
    <div className="App">
      <div className='container mt-5'>
        <Navigation />

        <Header />

        <Vision />

        {/* <Banner /> */}
        <AppTabs />
      </div>
      <br />
      <br />
    </div>
  );
}

export default App;
