import React, { useState, useEffect } from "react";
import CardTutor from "./CardTutor";
import axios from "axios";
import { Link } from "react-router-dom";
import TestData from "./TestData";

const DetailTutor = () => {
  //เอา Data มา test เหมือนหน้า applytutor เลย
  const [values, setValues] = useState([]);

  useEffect(() => {
    setValues(TestData);
    //console.log(TestData);
  }, [TestData]);

  //อันนี้เป็นที่มึงทำใน appplytutor เก่ากู
  // const [values, setValues] = useState({
  //   id: "",
  //   image: "",
  //   nameTutor: "",
  //   gradFrom: "",
  //   subject: "",
  //   classTeach: "",
  //   category: "",
  //   introduce: "",
  // });

  // useEffect(() => {
  //   loadData(1);
  // });

  //To do : เเก้ให้เป็น api backend !!!
  // const loadData = (post_id) => {
  //     listApplyPostStudent(post_id).then((res) => {
  //       console.log("res.data.apply",res.data["applyPostEntity"])
  //       console.log("res.data",res.data)
  //       var b = res.data["applyPostEntity"]
  //       setValues(res.data)
  //     } ).catch((err) => {
  //       //err
  //       console.log("Error loadData", err.response.data);
  //     })
  //   };

  return (
    <div className="md:mt-32 md:mb-32">
      <div className="mt-20 text-center md:text-center xl:text-center">
        <div className="container mx-auto px-10 py-4 gap-5 mt-6 flex flex-col rounded-xl drop-shadow-lg font-body md:w-3/5 bg-[#503795]">
          <h1 className="font-bold text-2xl leading-8 md:text-3xl text-white-100">
            หาติวเตอร์ที่โดนใจ
          </h1>
        </div>
      </div>

      {/* Map data */}
      {/* { Object.values(values).map((value) =>  ( */}
      {values.map((value, index) => (
        //link ไปยัง detail tutor ของเเต่ละ user
        <Link to={`/DetailTutor/${value.id}`}>
          <CardTutor
            key={value.id}
            index={index}
            image={value.image}
            nameTutor={value.nameTutor}
            gradFrom={value.gradFrom}
            subject={value.subject}
            classTeach={value.classTeach}
            category={value.category}
            introduce={value.introduce}
          />
        </Link>
      ))}
    </div>
  );
};

export default DetailTutor;
