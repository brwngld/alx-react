import React from 'react';
import './App.css';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js'
import Login from '../Login/Login';
import Notifications from '../Notifications';

function App() {
  return (
    <React.Fragment>
      <div className="App">
      <div id="root-notifications">
    <Notifications/>
    </div>
        <Header/>
      <Login/>
      <Footer/>
      </div>
    </React.Fragment>
  );
}

export default App;
