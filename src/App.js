import React from "react";
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavbarStudent from "./components/navbar/NavbarStudent";
// import NavbarTutor from "./components/navbar/NavbarTutor";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ChooseRole from "./pages/ChooseRole";
import SignUpStudent from "./pages/SignUpStudent";
import SignUpTutor from "./pages/SignUpTutor";

import Payment from "./pages/Payment";

import LayoutStudent from "./pages/Layout/LayoutStudent";
import RoutesStudent from "./pages/Layout/RoutesStudent";


function App() {
  return (
    <BrowserRouter>
    <div>
      <Routes>
        {/* <Route path="/" element={<NavbarStudent/>} />
        <Route path="/1" element={<NavbarTutor/>} /> */}
        <Route path="/" element={<Login/>}/>
        <Route path="/forgotpass" element={<ForgotPassword/>}/>
        <Route path="/chooserole" element={<ChooseRole/>}/>
        <Route path="/signupstudent" element={<SignUpStudent/>}/>
        <Route path="/signuptutor" element={<SignUpTutor/>}/>
        <Route path="/payment" element={<Payment/>}/>
        
        {/* Layout Navbar ยังทำไม่ได้คร่า*/}
        {/* <Route element={<LayoutStudent/>}>
          <Route element={<RoutesStudent/>}>
          </Route>
        </Route>  */}

      </Routes>
      </div>
      </BrowserRouter>
  );
}

export default App;
