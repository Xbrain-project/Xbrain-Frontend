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

  //ผลการสมัคร

  const [value, setValue] = useState({
    ClickYes: false,
    ClickNo: false,
    canClick: true,
  });

  const handleApprove = (e) => {
    alert("ยืนยันผลการสมัคร");
    e.preventDefault();
    setValue({
      canClick: false,
      ClickYes: true,
    });
    console.log("yes");
  };

  const handleReject = (e) => {
    alert("ยืนยันผลการสมัคร");
    e.preventDefault();
    setValue({
      canClick: false,
      ClickNo: true,
    });
    console.log("no");
  };

  // const [result, setResult] = useState({
  //   ClickYes: false,
  //   ClickNo: false,
  //   canClick: true,
  // });

  // const handleApprove = () => {
  //   alert("ยืนยันผลการสมัคร");
  //   //e.preventDefault();

  //   setResult({
  //     canClick: false,
  //     ClickYes: true,
  //   });

  //   console.log("yes");
  //   console.log(setValues);
  // };

  // const handleReject = (index) => {
  //   alert("ยืนยันผลการสมัคร");
  //   //e.preventDefault();
  //   setResult({
  //     canClick: false,
  //     ClickNo: true,
  //   });
  //   console.log("no");
  //   console.log(index);
  // };

  return (
    <div className="md:mt-32 md:mb-32">
      <div className="mt-20 text-center md:text-center xl:text-center">
        <h1 className="font-bold text-2xl leading-8 md:text-3xl font-body">
          ใบสมัคร
        </h1>
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
