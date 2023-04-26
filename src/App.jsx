// import logo from './logo.svg';
import './App.css';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/RegisterForm';
import { createBrowserHistory } from "history";

const history = createBrowserHistory();

function App() {
  return (
      <Routes history={history}>
       <Route path={"/"} element={<Login />} />
       <Route path={"/signup"} element={<Register />} />
      </Routes>
  );
}

export default App;
