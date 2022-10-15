import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavbarStudent from "./components/navbar/NavbarStudent";
// import NavbarTutor from "./components/navbar/NavbarTutor";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ChooseRole from "./pages/ChooseRole";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        <Route path="/" element={<Login/>}/>
        <Route path="/forgotpass" element={<ForgotPassword/>}/>
        <Route path="/chooserole" element={<ChooseRole/>}/>
        {/* <Route path="/" element={<NavbarStudent/>} />
        <Route path="/1" element={<NavbarTutor/>} /> */}
      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
