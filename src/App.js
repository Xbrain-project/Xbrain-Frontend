import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileStudent from "./pages/ProfileStudent";
import ProfileTutor from "./pages/ProfileTutor";
import NavbarStudent from "./components/navbar/NavbarStudent"
import PostTeach from "./pages/PostTeach";
import Search from "./pages/Search"
import Contact from "./pages/Contact"




function App() {
  return (
    <div>
      <Routes>
        <Route path="/ProfileStudent" element={<ProfileStudent/>} />
        <Route path="/ProfileTutor" element={<ProfileTutor/>} />
        <Route path="/NavbarStudent" element={<NavbarStudent/>} />
        <Route path="/PostTeach" element={<PostTeach/>}/>
        <Route path="/Search" element={<Search/>}/>
        <Route path="/Contact" element={<Contact/>}/>

      </Routes>
    </div>
  );
}

export default App;
