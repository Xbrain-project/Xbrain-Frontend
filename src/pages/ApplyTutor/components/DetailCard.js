import React, { useState, useEffect } from "react";
import community from "../../../assets/icons/community.png";
import TestData from "./TestData"; //fake data เอามา test จร้า

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

  return (
    <div className="md:mt-32 md:mb-32">
      <div className="mt-20 text-center md:text-center xl:text-center">
        <h1 className="font-bold text-2xl leading-8 md:text-3xl font-body">
          ใบสมัคร
        </h1>
      </div>
      ;{/* Cards */}
      {values.map((item) => (
        <div className="container mx-auto px-10 py-4 gap-5 mt-6 flex flex-col rounded-xl drop-shadow-lg font-body md:w-2/4 bg-white-100">
          <div className="mt-3 flex w-full items-center space-x-4">
            <img
              src={community}
              className="aspect-square w-12 shrink-0 rounded-full "
              alt="ImageTutor"
            />
            <div className="flex w-full min-w-0 flex-col -space-y-1">
              <div className="ellipsis font-bold text-lg">{item.student}</div>
              <div className="text-sm font-normal">{item.college}</div>
            </div>
          </div>

          <div className=" border-b-2 border-[#999999]"></div>

          <div className="flex flex-row text-base">
            <div className="flex flex-row flex-auto space-x-[84px]">
              <label className="font-semibold">วิชา</label>
              <div className="font-normal">{item.subject}</div>
            </div>

            <div className="flex flex-row flex-auto space-x-8">
              <label className="font-semibold">ประเภท</label>
              <div className="font-normal">{item.type}</div>
            </div>
          </div>

          <div className="flex flex-row items-end space-x-8">
            <label className="font-semibold">ค่าตอบเเทน</label>
            <div className="font-normal">{item.wage}</div>
          </div>

          <div className="flex flex-row items-end space-x-16">
            <label className="font-semibold">สถานที่</label>
            <div className="font-normal">{item.place}</div>
          </div>

          <div className="flex flex-row flex-auto space-x-3 mb-6">
            <label className="font-semibold">คำขอการสมัคร</label>
            <button
              className={` ${
                item.status === "Approved"
                  ? "bg-[#E2E2E2] hover:bg-[#E2E2E2]"
                  : "bg-primary-80 hover:bg-primary-100 "
              } mt-1 px-3 py-1 font-normal rounded-2xl text-white-100  `}
              onClick={handleApprove}
              disabled={value.canClick === false}
            >
              ยอมรับคำขอ
            </button>

            <button
              className={` ${
                item.status === "Rejected"
                  ? "bg-[#E2E2E2] hover:bg-[#E2E2E2]"
                  : "bg-[#FF3358] hover:bg-[#CE2D4A]"
              } mt-1 px-3 py-1 font-normal rounded-2xl text-white-100  `}
              onClick={handleReject}
              disabled={value.canClick === false}
            >
              ปฏิเสธคำขอ
            </button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default DetailCard;
