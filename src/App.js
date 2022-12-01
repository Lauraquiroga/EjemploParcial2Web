import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from 'react';
import './App.css';
import Espacios from './components/espacios';
import Rooms from './components/rooms';


function App() {
  
  return (
    <div className="App">
     <BrowserRouter>
       <Routes>
         <Route path="/" element={<Espacios />} />
         <Route path="/espacios" element={<Espacios />} />
         <Route path="/espacios/:espacioId" element={<Rooms />} />
       </Routes>
     </BrowserRouter>
   </div>
  );
}

export default App;
