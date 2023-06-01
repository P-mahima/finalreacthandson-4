import React from 'react'
import {BrowserRouter,Routes,Route } from 'react-router-dom'
import Home from './router/home';
import Contact from './router/contact';
import Student from './router/student';



const App = () => {
  return (
    <div className='backside'>
      <BrowserRouter>
        <Routes>

          <Route path="/"element={<Home/>}/>
          <Route path="/student"element={<Student/>}/>
          <Route path="/contact"element={<Contact/>}/>
          
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;