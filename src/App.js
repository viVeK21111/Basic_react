import React,{useContext} from 'react';
import Lab6 from './components/Lab6'
import Emailform from './components/Emailfrom'
import './App.css';
import {Authcontext} from './components2/Authprovider';

import Login from './components2/Login';


function App() {
  return (
    <div className='App'>
      <header className='App-header'>
      <Lab6/ >
      </header>
    </div>
)
}


/*
function App() {
  return (
   <div>
    <Emailform/ >
   </div>
  );
};
*/

   
/*
import Home from './components2/Home';
function App() {
  const {user}= useContext(Authcontext);
  return (
    <div>
      {user? <Home/ > : <Login/ >}
    </div>
  );
};
*/


/*
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components3/Home';
import About from './components3/About';
import Navbar from './components3/Navbar';

function App() {
    return (
        <Router>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
            
                </Routes>
            </div>
        </Router>
    );
}
*/

/*
import Home from './components4/Home/Home'
import Navbar from './components4/Navbar'
import Footer from './components4/Footer'
import Homechild from './components4/Home/Homechild';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/home" element = {<Home />} />
        <Route path="/contact" element = {<div>welcome to contact</div>} />
        <Route path="/work" element = {<div>welcome to work</div>} />
        <Route path="/about" element = {<div>welcome to about</div>} />
      </Routes>
      <Footer />
    </Router>
  )
}

*/
export default App;

// check './components3/read.txt'