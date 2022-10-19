import React from "react";
import Hero from "./components/Hero";
import Card from "./components/Card";

const HomeTutor = () => {
  return (
    <div>
      <div className="h-28 w-screen bg-white-100 shadow-lg mb-20 absolute z-20 top-0 flex items-center text-3xl font-bold pl-10 ">
        Navbar
      </div>

      <Hero />

      <Card />
    </div>
  );
};

export default HomeTutor;
