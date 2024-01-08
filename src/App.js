import './App.css';

// import DrawerAppBar from './Menu.js';
import Login from './Login.js';
import React from 'react';
import DrawerAppBar from './Menu.js';
import SearchBar from './SearchBar.js';
import {Routes,Route} from 'react-router-dom';
import Main1 from './Main1.js';
import DrawerAppBar3 from './View.js'; 
import DrawerAppBar4 from './Home.js';
import DrawerAppBar5 from './About.js';
import DrawerAppBar6 from './Contact.js';
import DrawerAppBar2 from './View1.js';
import MiniDrawer from './AdminDash.js';
import Checkout from './Payment.js';
function App() {
  return (
  //  <MiniDrawer/>
  //  <DrawerAppBar5/>

 <Routes>
  <Route path="/" element={<DrawerAppBar4/>}/>
  <Route path="/login" element={<Login/>}/>
  <Route path="/main" element={<Main1/>}/>
  <Route path="/contact" element={<DrawerAppBar6/>}/>
  <Route path="/about" element={<DrawerAppBar5/>}/>
  <Route path="/home" element={<DrawerAppBar4/>}/>
  <Route path="/about" element={<DrawerAppBar5/>}/>
  <Route path="/viewp1" element={<DrawerAppBar3/>}/>
  <Route path="/viewp2" element={<DrawerAppBar2/>}/>
  <Route path="/payment" element={<Checkout/>}/>
</Routes>

  );
}

export default App;


