import React from "react";
import avatarTutor from "../../../assets/pics/avatar.jpg";
import "../components/CardStyle.css";

const CardTutorTest = () => (
  /* TheCard*/
  <div className="    pt-16 mx-auto h-screen grid grid-flow-row auto-rows-max  md:justify-center md:gap-3 md:items-center xl:gap-5  ">
    {/* Card 1*/}

    <a
      href="#"
      class="flex flex-col items-center ml-2 mr-5 rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-400 bg-[white]  dark:hover:bg-gray-400"
    >
      <img
        class="object-cover ml-2 w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
        src={avatarTutor}
        alt=""
      />
      <div class=" grid grid-cols-2  auto-rows-max  p-4">
        <div className="">
          <h4 class=" text-[#855CF8] underline  text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
            พี่หญิง
          </h4>
          <p class="mt-3 text-md font-bold text-skin-base leading-5">จบจาก</p>
          <p class="mt-3 text-md font-bold text-skin-base leading-5">
            วิชาที่สอน
          </p>
          <p class="mt-3 text-md font-bold text-skin-base leading-5 ">
            ระดับชั้นที่สอน
          </p>
          <p class="mt-3 text-md font-bold text-skin-base leading-5">
            เป้าหมาย
          </p>
        </div>
        <div className="border pl-3 pr-3 pt-1">
          <p class="mb-3 font-normal text-[black] ">
     
              ดีค่าา สำหรับใครที่อยากจะเพิ่มเติม ความรู้
              เกี่ยวกับการบริหารธุรกิจ สามารถมาคุยกันได้ก่อนได้นะคะ
       
          </p>
        </div>
      </div>
    </a>

    {/* Card 2*/}

    <a
      href="#"
      class="flex flex-col items-center ml-2 mr-5 rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-400 bg-[white]  dark:hover:bg-gray-400"
    >
      <img
        class="object-cover ml-2 w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
        src={avatarTutor}
        alt=""
      />
      <div class=" grid grid-cols-2  auto-rows-max  p-4">
        <div className="">
          <h4 class=" text-[#855CF8] underline  text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
            พี่หญิง
          </h4>
          <p class="mt-3 text-md font-bold text-skin-base leading-5">จบจาก</p>
          <p class="mt-3 text-md font-bold text-skin-base leading-5">
            วิชาที่สอน
          </p>
          <p class="mt-3 text-md font-bold text-skin-base leading-5 ">
            ระดับชั้นที่สอน
          </p>
          <p class="mt-3 text-md font-bold text-skin-base leading-5">
            เป้าหมาย
          </p>
        </div>
        <div className="border pl-3 pr-3 pt-1">
          <p class="mb-3 font-normal text-[black] ">
     
              ดีค่าา สำหรับใครที่อยากจะเพิ่มเติม ความรู้
              เกี่ยวกับการบริหารธุรกิจ สามารถมาคุยกันได้ก่อนได้นะคะ
       
          </p>
        </div>
      </div>
    </a>

    
  </div>
);

export default CardTutorTest;
