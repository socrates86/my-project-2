import React from 'react';
import Navbar from './Navbar';
import Main from './Main';
import "./Navbar.css"
import "./Main.css"
// import logo from './logo.svg';
import './App.css';


export default function App() {
  return (
    <div className='container-md p-2 border'>
      <Navbar />
      <Main />
    </div>
  )
}
