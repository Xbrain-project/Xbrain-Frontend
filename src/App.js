import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import ForgotPassword from "./pages/ForgotPassword";
import ChooseRole from "./pages/ChooseRole";
import SignUpStudent from "./pages/SignUpStudent";
import SignUpTutor from "./pages/SignUpTutor";
import Payment from "./pages/Payment";
import LayoutStudent from "./pages/Layout/LayoutStudent";
import RoutesStudent from "./pages/Layout/RoutesStudent";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import NavbarStudent from "./components/navbar/NavbarStudent";
import NavbarTutor from "./components/navbar/NavbarTutor";
import HomeStudent from "./pages/HomeStudent";
import HomeTutor from "./pages/HomeTutor";
import HistoryStudent from "./pages/HistoryStudent";
import ApplyTutor from "./pages/ApplyTutor";
import Community from "./pages/Community";
import Feed from "./pages/Community/components/Feed";
import ProfileStudent from "./pages/ProfileStudent";
import ProfileTutor from "./pages/ProfileTutor";
import PostTeach from "./pages/PostTeach";
import Search from "./pages/Search"
import Contact from "./pages/Contact"
import FindTutor from "./pages/FindTutor"



function App() {
  return (
    <PayPalScriptProvider
      options={{
        "client-id":
          "AdS3Mz9uK1KTWcLAynhFS5Cm-S1xdkf6JCeLy8S_WNXwUwdJkXG-Ter1OcXreOsHTYHP7biV-WYbGwn-",
        currency: "THB",
      }}
    >
      <div>
        <Routes>
          {/* <Route path="/" element={<NavbarStudent/>} />
             <Route path="/1" element={<NavbarTutor/>} /> */}
          <Route path="/" element={<Login />} />
          <Route path="/forgotpass" element={<ForgotPassword />} />
          <Route path="/chooserole" element={<ChooseRole />} />
          <Route path="/signupstudent" element={<SignUpStudent />} />
          <Route path="/signuptutor" element={<SignUpTutor />} />
          <Route path="/payment" element={<Payment />} />

          <Route path="/homestudent" element={<HomeStudent />} />
          <Route path="/hometutor" element={<HomeTutor />} />
          <Route path="/historystudent" element={<HistoryStudent />} />
          <Route path="/applytutor" element={<ApplyTutor />} />

          <Route path="/community" element={<Community />} />
          <Route path="/feed/:id" element={<Feed />} />


          <Route path="/profilestudent" element={<ProfileStudent/>} />
          <Route path="/profiletutor" element={<ProfileTutor/>} />
          <Route path="/postteach" element={<PostTeach/>}/>
          <Route path="/search" element={<Search/>}/>
          <Route path="/contact" element={<Contact/>}/>
          <Route path="/findtutor" element={<FindTutor/>}/>

          {/* Layout Navbar ยังทำไม่ได้คร่า*/}
          {/* <Route element={<LayoutStudent/>}>
          <Route element={<RoutesStudent/>}>
          </Route>
        </Route>  */}
        </Routes>
      </div>
    </PayPalScriptProvider>
  );
}

export default App;
