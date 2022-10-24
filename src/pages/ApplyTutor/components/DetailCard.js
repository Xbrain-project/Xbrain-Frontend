import React from "react";
import community from "../../../assets/icons/community.png";

const DetailCard = () => {
  return (
    <div className="md:mt-32 md:mb-32">
      <div className="mt-20  text-center md:text-center xl:text-center">
        <h1 className="font-bold text-2xl leading-8 md:text-3xl font-body">
          ใบสมัคร
        </h1>
      </div>

      {/* Cards */}
      <div className="container mx-auto px-10 py-4 gap-5 mt-6 flex flex-col rounded-xl drop-shadow-lg font-body md:w-2/4 bg-white-100">
        <div className="mt-3 flex w-full items-center space-x-4">
          <img
            src={community}
            className="aspect-square w-12 shrink-0 rounded-full "
            alt="ImageTutor"
          />
          <div className="flex w-full min-w-0 flex-col -space-y-1">
            <div className="ellipsis font-bold text-lg">
              เด็กหญิงสมหญิง ใจงาม
            </div>
            <div className="text-sm font-normal">โรงเรียน</div>
          </div>
        </div>

        <div className=" border-b-2 border-[#999999]"></div>

        <div className="flex flex-row text-base">
          <div className="flex flex-row flex-auto space-x-[84px]">
            <label className="font-semibold">วิชา</label>
            <div className="font-normal">รอหลังบ้าน</div>
          </div>

          <div className="flex flex-row flex-auto space-x-8">
            <label className="font-semibold">ประเภท</label>
            <div className="font-normal">รอหลังบ้าน</div>
          </div>
        </div>

        <div className="flex flex-row items-end space-x-8">
          <label className="font-semibold">ค่าตอบเเทน</label>
          <div className="font-normal">ชั่วโมงละ 250 บาท</div>
        </div>

        <div className="flex flex-row items-end space-x-16">
          <label className="font-semibold">สถานที่</label>
          <div className="font-normal">ออนไลน์</div>
        </div>

        <div className="flex flex-row flex-auto space-x-3">
          <label className="font-semibold">คำขอการสมัคร</label>
          <button className="-mt-1 px-3 py-1 font-normal rounded-2xl text-white-100 bg-primary-80 hover:bg-primary-100">
            ยอมรับคำขอ
          </button>
        </div>
      </div>
    </div>
  );
};

export default DetailCard;
