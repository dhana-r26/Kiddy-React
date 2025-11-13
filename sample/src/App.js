import logo from './logo.svg';
import './App.css';

import Navbar from './component/Navbar';
import Footer from './component/Footer';
import Home from './pages/Home';
import News from './pages/News';
import Login from './pages/Login';
import Bottomcontent from './component/Bottomcontent';
import {BrowserRouter,Route,Routes} from "react-router-dom"
import Greeting from './pages/Greeting';
import { useState } from 'react';
function App() {
   
  // let count=0
  const [count,setcount]=useState(0)
  const change=()=>setcount(count+1)
  return (
    <div className="App">
      <h1>Count: {count}</h1>
      <button onClick={change}>Increment</button>
      <BrowserRouter>
      <Greeting  test="Welcome to Kiddy"/>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/news" element={<News/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='*' element={<h1>Not Available for Now</h1>}/>
      </Routes>
      <Bottomcontent/>
      <Footer/>
      </BrowserRouter>

{/* 
function App() {
   
  let count=0

  const change=()=>console.log(count++)
  return (
    <div clas */}
    
    </div>
  );
}

export default App;
