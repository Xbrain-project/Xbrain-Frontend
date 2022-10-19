import React from "react";
import Card from "./components/Card";

function findTutor() {
  return (
    <div  className="  bg-[#ACB9FF] ">
   
      <div className="h-28 w-screen bg-white-100 shadow-lg mb-20 absolute z-20 top-0 flex items-center text-3xl font-bold pl-10 ">
        Navbar
      </div>
      <div className="  top-20  mt-28 absolute z-20 flex text-6xl font-bold pl-10 ">
      หาติวเตอร์ที่โดนใจ
      </div>
      <Card />
      
    </div>
  );
}

export default findTutor;
