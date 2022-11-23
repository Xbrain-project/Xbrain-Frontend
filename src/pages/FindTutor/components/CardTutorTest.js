import React, { Fragment, useState } from "react";
import avatarTutor from "../../../assets/pics/avatar.jpg";
import "../components/CardStyle.css";

function CardTutorTest() {
  /* InfoCard*/

  const cardInfo = [
    {
      id: "1",
      image: `${avatarTutor}`,
      nameTutor: "พี่โอม",
      gradFrom: "KMITL",
      subject: "ไทย",
      classTeach: "ปริญญาตรี",
      goal: "ติว",
      introduce:
        "ดีค่าา สำหรับใครที่อยากจะเพิ่มเติม ความรู้เกี่ยวกับการบริหารธุรกิจ สามารถมาคุยกันได้ก่อนได้นะคะ",
    },
    {
      id: "2",
      image: `${avatarTutor}`,
      nameTutor: "พี่เอ๋",
      gradFrom: "KMITL",
      subject: "อังกฤษ",
      classTeach: "ปริญญาโท",
      goal: "เข้าสอบ",
      introduce:
        "ดีค่าา สำหรับใครที่อยากจะเพิ่มเติมความรู้เกี่ยวกับการบริหารธุรกิจสามารถมาคุยกันได้ก่อนได้นะคะ",
    },
    {
      id: "3",
      image: `${avatarTutor}`,
      nameTutor: "พี่ตู้",
      gradFrom: "KMITL",
      subject: "อังกฤษ ไทย",
      classTeach: "ปริญญาเอก",
      goal: "ไม่รู้1",
      introduce: "ไม่รู้ว้อยยยยยsdcccccccccccccccccccccccccccccccccccccccccccccccccccccccc",
    },
    {
      id: "4",
      image: `${avatarTutor}`,
      nameTutor: "พี่Henry",
      gradFrom: "KMITL",
      subject: "ประวัติศาสตร์",
      classTeach: "ปริญญาใจ",
      goal: "ไม่รู้2",
      introduce: "1245",
    },
    {
      id: "5",
      image: `${avatarTutor}`,
      nameTutor: "พี่Shopee",
      gradFrom: "KMITL",
      subject: "ไม่สอน!!!",
      classTeach: "ปานาติปาตา",
      goal: "ไม่รู้3",
      introduce: "ชิวๆ ซิ่วเลย",
    },
  ];

  const [detail, setDetail] = useState(cardInfo);

  /* TheCard*/

  return (
    <div className="    pt-16 mx-auto h-screen grid grid-flow-row auto-rows-max  md:justify-center md:gap-3 md:items-center xl:gap-5  ">
      {detail.map((detail) => {
        return (
          <Fragment>
            {/* Card Start*/}

            <a
              to="DetailTutor"
              class="flex flex-col items-center ml-2 mr-5 rounded-lg border shadow-md md:flex-row  hover:bg-gray-100 dark:border-gray-400 bg-[white]  dark:hover:bg-gray-400 "
            >
              <img
                class="object-cover ml-2 w-full h-96 rounded-t-lg md:h-full md:w-48 md:rounded-none md:rounded-l-lg"
                src={detail.image}
                alt=""
              />
              <div class=" grid grid-flow-col  p-4"> {/* */}
                <div className="">
                  <h4 class=" text-[#855CF8] underline  text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                    {detail.nameTutor}
                  </h4>

                  <p class="mt-3 text-md font-bold text-skin-base leading-5">
                    จบจาก: {detail.gradFrom}
                  </p>
                  <p class="mt-3 text-md font-bold text-skin-base leading-5">
                    วิชาที่สอน: {detail.subject}
                  </p>
                  <p class="mt-3 text-md font-bold text-skin-base leading-5 ">
                    ระดับชั้นที่สอน: {detail.classTeach}
                  </p>
                  <p class="mt-3 text-md font-bold text-skin-base leading-5">
                    เป้าหมาย: {detail.goal}
                  </p>
                </div>
                
                <div className="    pl-3 pr-3 pt-1 ">
                  <p class="mb-3 font-normal  text-[black] ">
                    {detail.introduce}
                  </p>
                </div>
              </div>
            </a>

            {/* Card 1 End*/}
          </Fragment>
        );
      })}
    </div>
  );
}

export default CardTutorTest;