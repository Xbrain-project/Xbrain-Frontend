import React, { useState, useEffect } from "react";
import community from "../../../assets/icons/community.png";

import TestData from "./TestData"; //fake data เอามา test จร้า

import CardApply from "./CardApply";

const DetailCard = () => {
  //รอเอาค่าจริงมาใส่ , [] ใส่มาเพื่อจะดู values. บลาๆ
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(TestData);
    //console.log(TestData);
  }, [TestData]);

  return (
    <div className="md:mt-32 md:mb-32">
      <div className="mt-20 text-center md:text-center xl:text-center">
        <div className="container mx-auto px-10 py-4 gap-5 mt-6 flex flex-col rounded-xl drop-shadow-lg font-body md:w-2/4 bg-[#503795]">
          <h1 className="font-bold text-2xl leading-8 md:text-3xl text-white-100">
            ใบสมัคร
          </h1>
        </div>
      </div>

      {/* Map data */}
      {values.map((value, index) => (
        <CardApply
          key={values.id}
          index={index}
          student={value.student}
          college={value.college}
          subject={value.subject}
          type={value.type}
          wage={value.wage}
          place={value.place}
        />
      ))}
    </div>
  );
};

export default DetailCard;
