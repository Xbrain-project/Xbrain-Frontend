import React from "react";
import CardTutor from "./components/CardTutor"




function FindTutor() {
  return (
    <div className="grid grid-flow-row auto-rows-max   w-screen   bg-[#CFD8DC] ">
    
      <p className=" mt-28 pt-10 pb-10 w-screen absolute z-20 text-5xl font-bold pl-10 bg-[#ACB9FF]">
        หาติวเตอร์ที่โดนใจ
      </p>
   

    <div className="   mt-28 pt-20" key={CardTutor.id}>
      <CardTutor />
    </div>
  </div>
    
  );
}

export default FindTutor;