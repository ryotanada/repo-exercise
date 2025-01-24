import './App.css';
import React from "react";
import Home from "./Home";
import Menu from "./Menu";
import Contact from "./Contact";
import BookingPage from "./BookingPage";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { useReducer} from 'react';
import {fetchAPI} from "./api.js";

function App() {  
  const updateTimes = (state, action) => {
    console.log("entering update");
    const initialState = state;
    try{
      const result = () => {
        return fetchAPI(new Date(action.date));
      };
      return result;
    }
    catch{
      return initialState;
    }
  };
  
  const initializeTimes = () => {
    return ["17:00","18:00","19:00","20:00","21:00","22:00"];
  }

  const [
    availableTimes, 
    dispatchOnChange
  ] = useReducer(updateTimes, initializeTimes);

  const handleDate = (chosenDate) => {
    dispatchOnChange({ date: chosenDate});
  };
  
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" exact element={<Home/>} />
          <Route path="/menu" element={<Menu/>} />
          <Route path="/contact" element={<Contact/>} />
          <Route path="/booking" element={<BookingPage availableTimes={availableTimes} dispatchOnChange={dispatchOnChange} handleDate={handleDate} />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;
