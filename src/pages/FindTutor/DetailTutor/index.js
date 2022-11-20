// import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import avatarTutor from "../../../assets/pics/avatar.jpg";
import PopUp from "../components/Popup";
import PopupSuccess from "../components/PopupSuccess";

import "../DetailTutor/index.css";

function DetailTutor() {
  const [infotutor, setInfotutor] = useState({
    // เก็บค่า infotutor    ดึงจากหลังบ้าน
    id: "1",
    image: `${avatarTutor}`,
    nameTutor: "พี่หญิง",
    gradFrom: "วิทยาลัยเทคโนโลยีมารีย์บริหารธุรกิจ",
    subject: "คณิตศาสตร์",
    classTeach: "มัธยมต้น มัธยมปลาย",
    category: "เพิ่มความรู้",
    introduce:"ดีค่าา สำหรับใครที่อยากจะเพิ่มเติม ความรู้เกี่ยวกับการบริหารธุรกิจ สามารถมาคุยกันได้ก่อนได้นะคะ",
      detailTech:"เน้นทำความเข้าใจพื้นฐานเพื่อสามารถทำข้อสอบประยุกต์ได้",
      experience:"มีประสบการณ์การสอน เด็ก ระดับ ประถมปลาย (น้อง ป.5 ระยะเวลาสอน 2 เดือน เน้นการวิเคราะห์โจทย์ปัญหาธุรกิจ)",
  });
  
  const [subject, setSubject] = useState({
    // เก็บค่า checkbox ของวิชาต่างๆ จากที่post ดึงมาจากหลังบ้าน
    english: false,
    maths: true,
    bio: false,
    physics: false,
    chemistry: false,
    thai: false,
    social: false,
    gat: true,
    astronomy: false,
    science: false,
    french: false,
    german: false,
    japanese: false,
    arabic: false,
    korean: false,
    russian: false,
    chinese: false,
    programming: false,
  });

  const [type, setType] = useState({
    // เก็บค่า checkbox ของประเภทการสอนต่างๆ
    grade: false,
    enHigh: false,
    knowledge: false,
    enPrimary: false,
    entrance: false,
  });

  const [place, setPlace] = useState({
    // เก็บค่า checkbox ของสภานที่สอนต่างๆ
    online: false,
    onsite: false,
  });

  const [day, setDay] = useState({
    // เก็บค่า text เวลาของวันต่างๆ
    monday: "11:00 - 99:30",
    tuesday: "11:00 - 99:30",
    wednesday: "11:00 - 99:30",
    thursday: "11:00 - 99:30",
    friday: "11:00 - 99:30",
    saturday: "11:00 - 99:30",
    sunday: "11:00 - 99:30",
  });

  const [price, setprice] = useState({
    // เก็บค่าตัวเลข ราคาของวิชาต่างๆ
    english: "",
    maths: "1000",
    bio: "",
    physics: "",
    chemistry: "",
    thai: "",
    social: "",
    gat: "1000",
    astronomy: "",
    science: "",
    french: "",
    german: "",
    japanese: "",
    arabic: "",
    korean: "",
    russian: "",
    chinese: "",
    programming: "",
  });

  const [values, setValues] = useState({
    monDayTeach: true, //วันว่างของติวเตอร์
    tuesDayTeach: true, //
    wednesDayTeach: true, //
    thursDayTeach: true, //
    friDayTeach: true, //
    saturDayTeach: true, //
    sunDayTeach: false, //
    detailStudy: "",
    submitable: true,
  });

  const handleSubmit = (e) => {
    console.log("proIm isL", values.detailStudy);
    if (values.detailStudy.length < 1) {
      //ยีงเหมือน บัคๆ อยู่ เลยออกมาเป็นแบบ บรรทัด 297
      alert("please input detail"); // Disabling the button if length is < 1
    } else {
      console.log("valingis:", values.detailStudy);
      alert("Saved");
      e.preventDefault();
      setValues({
        submitable: false,
      });
    }
  };

  const handleChangeSubjectCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox วิชาต่างๆ
    setSubject({ ...subject, [e.target.name]: !subject[e.target.name] });
  };

  const handleChangeTypeCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox ประเภทสอนต่างๆ
    setType({ ...type, [e.target.name]: !type[e.target.name] });
  };

  const handleChangePlaceCheckbox = (e) => {
    //การเปลี่ยนแปรงค่าเมื่อ checkbox ประเภทสอนต่างๆ
    setPlace({ ...place, [e.target.name]: !place[e.target.name] });
  };

  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  return (
    <>
      <div className="  ">
        <div className="h-28 w-screen bg-white-100 shadow-lg mb-20 absolute z-20 top-0 flex items-center text-3xl font-bold pl-10 ">
          Navbar
        </div>

        <div className=" bg-[#ACB9FF] flex flex-nowrap pb-20 w-screen top-15 pt-14  mt-28 absolute z-20  pl-1  ">
          <img
            alt="..."
            src={avatarTutor} //ดึงจากหลังบ้าน
            className="max-w-xs ml-20 shadow-lg rounded-lg group-hover:opacity-75"
          />
          <div className="pl-20 font-bold">
            <h4 className=" text-[#855CF8]  mb-5 text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
              {infotutor.nameTutor} {/*ดึงจากหลังบ้าน*/}
            </h4>
            <p> กำลังศึกษาอยู่ที่ {infotutor.gradFrom}</p>   {/*ดึงจากหลังบ้าน*/}
            {/*ดึงจากหลังบ้าน*/}
            <p> วิชาที่สอน {infotutor.subject}</p>   {/*ดึงจากหลังบ้าน*/}
            <p> ระดับชั้นที่สอน {infotutor.classTeach}</p>   {/*ดึงจากหลังบ้าน*/}
            <p> ประเภทการสอน {infotutor.category}</p>   {/*ดึงจากหลังบ้าน*/}
          </div>

          <PopUp visible={showModal} onClose={() => setShowModal(false)}>
            <div
              id="defaultModal"
              className="   relative p-4 w-full max-w-2xl h-auto md:h-auto"
            >
              {/* <!-- Modal content --> */}
              <div className=" relative bg-white rounded-lg shadow bg-[white] ">
                {/* <!-- Modal header --> */}
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-[black]">
                    จองวัน/เวลาเรียน
                  </h3>
                </div>
                {/* <!-- Modal body --> */}
                <div className=" pl-6 pr-6 pt-1 pb-1 space-y-auto overscroll-auto ">
                  <div className=" ">
                    <h4 className="text-xl  font-semibold ">
                      เลือกวันที่ต้องการจะเรียน
                    </h4>

                    <div className=" grid grid-cols-7 gap-3">
                      <div id="ck-button" className="">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            hidden
                            disabled={!values.monDayTeach}
                          />

                          <span
                            className={`text-xl ${
                              values.monDayTeach
                                ? "text-[black]"
                                : "text-gray-400"
                            } `}
                          >
                            จ
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            hidden
                            disabled={!values.tuesDayTeach}
                          />

                          <span
                            className={`text-xl ${
                              values.tuesDayTeach
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            อ
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            hidden
                            disabled={!values.wednesDayTeach}
                          />

                          <span
                            className={`text-xl ${
                              values.wednesDayTeach
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            พ
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            hidden
                            disabled={!values.thursDayTeach}
                          />

                          <span
                            className={`text-xl ${
                              values.thursDayTeach
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            พฤ
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            hidden
                            disabled={!values.friDayTeach}
                          />

                          <span
                            className={`text-xl ${
                              values.friDayTeach
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            ศ
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            hidden
                            disabled={!values.saturDayTeach}
                          />

                          <span
                            className={`text-xl ${
                              values.saturDayTeach
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            ส
                          </span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            hidden
                            disabled={!values.sunDayTeach}
                          />

                          <span
                            className={`text-xl ${
                              values.sunDayTeach
                                ? "text-[black]"
                                : "text-gray-400"
                            }`}
                          >
                            อา
                          </span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="text-xl grid grid-flow-col auto-cols-2 gap-12 overflow-y-auto h-32">
                    {" "}
                    {/*overflow-y-auto h-64*/}
                    <div>
                      <div>
                        <h2> วันจันทร์</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.monday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                      <div>
                        <h2> วันอังคาร</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.tuesday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                      <div>
                        <h2> วันพุธ</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.wednesday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                      <div>
                        <h2> วันพฤหัสบดี</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.thursday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                    </div>
                    <div>
                      <div>
                        {" "}
                        <h2> วันศุกร์</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.friday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                      <div>
                        <h2> วันเสาร์</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.saturday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                      <div>
                        {" "}
                        <h2> วันอาทิตย์</h2> {/*ดึงจากหลังบ้าน*/}
                        <p className="text-base leading-relaxed text-[black] ">
                          {day.sunday} {/*ดึงจากหลังบ้าน*/}
                        </p>
                      </div>
                    </div>
                  </div>
                  <p className=" flex justify-start text-sm leading-relaxed  text-[gray] dark:border-gray-600">
                    นี่คือเวลาว่างของติวเตอร์ท่านนี้ หากมีเวลาว่างตรงกัน
                    สามารถเลือกเรียนเวลานั้นได้เลย!
                  </p>
                  <form
                    className="grid  overflow-y-auto h-64"
                    onSubmit={handleSubmit}
                  >
                    <h3 className="text-sm font-semibold leading-relaxed mb-1 text-[black] ">
                      รายละเอียดคอร์ส/วิชาที่ต้องการจะเรียน
                    </h3>

                    {/* <!-- รายละเอียดคอร์ส/วิชาที่ต้องการจะเรียน  ส่งไปหลังบ้าน--> */}

                    <label
                      className="block text-[black] text-m font-bold mb-4" // วิชาที่สอน
                    >
                      วิชาที่สอน
                    </label>
                    <div className="pb-5 pt-5 flex flex-row space-x-1">
                      <div className="ml-1 mr-3">
                        <div className="flex items-center mb-4 ">
                          <input
                            id="english"
                            name="english"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.english
                            }
                            className="w-4  h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.english}
                          />

                          <label className="block text-gray-700 text-m ml-4 mr-1 ">
                            ภาษาอังกฤษ
                          </label>
                          <labe
                            className={`text-m ml-1   
                          ${subject.english ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.english} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="maths"
                            name="maths"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.maths
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.maths}
                          />

                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            คณิตศาสตร์
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.maths ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.maths} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="bio"
                            name="bio"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.bio
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.bio}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ชีวะ
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.bio ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.bio} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="physics"
                            name="physics"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.physics
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.physics}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ฟิสิกส์
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.physics ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.physics} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="chemistry"
                            name="chemistry"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.chemistry
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.chemistry}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            เคมี
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.chemistry ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.chemistry} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="thai"
                            name="thai"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.thai
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.thai}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาไทย
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.thai ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.thai} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="social"
                            name="social"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.social
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.social}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            สังคม
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.social ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.social} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="gat"
                            name="gat"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.gat
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.gat}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            GAT เชื่อมโยง
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.gat ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.gat} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="astronomy"
                            name="astronomy"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.astronomy
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.astronomy}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ดาราศาสตร์
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.astronomy ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.astronomy} บาท/ชม.
                          </labe>
                        </div>
                      </div>
                      <div className="ml-1">
                        <div className="flex items-center mb-4">
                          <input
                            id="science"
                            name="science"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.science
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.science}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            วิทยาศาสตร์
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.science ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.science} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="french"
                            name="french"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.french
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.french}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาฝรั่งเศส
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.french ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.french} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="german"
                            name="german"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.german
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.german}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาเยอรมัน
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.german ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.german} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="japanese"
                            name="japanese"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.japanese
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.japanese}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาญี่ปุ่น
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.japanese ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.japanese} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="arabic"
                            name="arabic"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.arabic
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.arabic}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาอาหรับ
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.arabic ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.arabic} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="korean"
                            name="korean"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.korean
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.korean}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาเกาหลี
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.korean ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.korean} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="russian"
                            name="russian"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.russian
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.russian}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษารัสเซีย
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.russian ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.russian} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="chinese"
                            name="chinese"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.chinese
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.chinese}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            ภาษาจีน
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${subject.chinese ? "text-[black]" : "invisible"}`}
                          >
                            ราคา: {price.chinese} บาท/ชม.
                          </labe>
                        </div>
                        <div className="flex items-center mb-4">
                          <input
                            id="programming"
                            name="programming"
                            type="checkbox"
                            onChange={
                              handleChangeSubjectCheckbox && subject.programming
                            }
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            disabled={!subject.programming}
                          />
                          <label className="block text-gray-700 text-m ml-4 mr-1">
                            เขียนโปรแกรม
                          </label>
                          <labe
                            className={`text-m ml-1
                          ${
                            subject.programming ? "text-[black]" : "invisible"
                          }`}
                          >
                            ราคา: {price.programming} บาท/ชม.
                          </labe>
                        </div>
                      </div>
                    </div>

                    <label
                      className="block text-[black] text-m font-bold my-4" // ประเภทการสอน
                    >
                      ประเภทการสอน
                    </label>
                    <div>
                      <div className="px-10 flex flex-row space-x-10">
                        <div>
                          <div className="flex items-center mb-4">
                            <input
                              id="default-checkbox"
                              type="checkbox"
                              name="grade"
                              checked={type.grade}
                              onChange={handleChangeTypeCheckbox}
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                              required={
                                !type.enHigh &
                                !type.enPrimary &
                                !type.entrance &
                                !type.grade &
                                !type.knowledge
                              }
                            />
                            <label className="block text-gray-700 text-m mx-4">
                              เพิ่มเกรดแต่ละชั้นปี
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              id="checked-checkbox"
                              type="checkbox"
                              name="enHigh"
                              checked={type.enHigh}
                              onChange={handleChangeTypeCheckbox}
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="block text-gray-700 text-m mx-4">
                              สอบเข้ามัธยมปลาย
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              id="checked-checkbox"
                              type="checkbox"
                              name="knowledge"
                              checked={type.knowledge}
                              onChange={handleChangeTypeCheckbox}
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="block text-gray-700 text-m mx-4">
                              เพิ่มความรู้ทั่วไป
                            </label>
                          </div>
                        </div>

                        <div>
                          <div className="flex items-center mb-4">
                            <input
                              id="default-checkbox"
                              type="checkbox"
                              name="enPrimary"
                              checked={type.enPrimary}
                              onChange={handleChangeTypeCheckbox}
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="block text-gray-700 text-m mx-4">
                              สอบเข้ามัธยมต้น
                            </label>
                          </div>
                          <div className="flex items-center mb-4">
                            <input
                              id="checked-checkbox"
                              type="checkbox"
                              name="entrance"
                              checked={type.entrance}
                              onChange={handleChangeTypeCheckbox}
                              className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            />
                            <label className="block text-gray-700 text-m mx-4">
                              สอบเข้ามหาลัย
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>

                    <label
                      className="block text-[black] text-m font-bold mt-6 mb-4" // สถานที่สอน
                    >
                      สถานที่สอน
                    </label>
                    <div>
                      <div className="px-10 flex flex-row space-x-10">
                        <div className="flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            name="online"
                            checked={place.online}
                            onChange={handleChangePlaceCheckbox}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                            required={!place.online & !place.onsite}
                          />
                          <label className="block text-gray-700 text-m mx-4">
                            Online (ออนไลน์)
                          </label>
                        </div>

                        <div className="flex items-center mb-4">
                          <input
                            id="default-checkbox"
                            type="checkbox"
                            name="onsite"
                            checked={place.onsite}
                            onChange={handleChangePlaceCheckbox}
                            className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                          />
                          <label className="block text-gray-700 text-m mx-4">
                            Onsite (ออนไซต์)
                          </label>
                        </div>
                      </div>
                    </div>

                    {/* <textarea
                      name="detailStudy"
                      id="detailStudy"
                      type="text"
                      cols="30"
                      rows="3"
                      required
                      onChange={handleChange}
                      placeholder="ตัวอย่าง 1.คอร์สเพิ่มเติมความรู้การบริหารธุรกิจ"
                      className="peer border border-slate-400 pl-1"
                      value={values.detailStudy}
                    ></textarea>
                    <p className="invisible peer-invalid:visible text-red-700 font-light">
                      *กรุณากรอก รายละเอียดคอร์ส/วิชาที่ต้องการจะเรียน
                    </p> */}
                  </form>
                </div>
                {/* <!-- Modal footer --> */}
                <div className="flex justify-end p-6 space-x-2  rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button
                    data-modal-toggle="book-modal"
                    type="button"
                    onClick={() => setShowModal(false)}
                    className="text-[white] bg-[#656262] hover:bg-[#656262]-100 focus:ring-4 focus:outline-none focus:ring-[#656262]-300 rounded-lg border border-[#656262]-200 text-sm font-medium px-5 py-2.5 hover:text-[#656262]-900 focus:z-10 dark:bg-[#656262]-700 dark:text-[#656262]-300 dark:border-[#656262]-500 dark:hover:text-white dark:hover:bg-[#656262]-600 dark:focus:ring-[#656262]-600"
                  >
                    ปิด
                  </button>
                  <button
                    data-modal-toggle="book-modal"
                    type="submit"
                    className={` ${
                      place.online || place.onsite //งงๆ แต่อย่าใส่ใจ
                        ? "text-[black]"
                        : "text-gray-400"
                    } text-[white] bg-[#855CF8] hover:bg-[#855CF8]-800 focus:ring-4 focus:outline-none focus:ring-[#855CF8]-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center dark:bg-[#855CF8]-600 dark:hover:bg-[#855CF8]-700 dark:focus:ring-[#855CF8]-800"`}
                    id="submit"
                    disabled={(place.online || place.onsite) === false} //งงๆอยู่ เดะมาเพิ่ม
                    onClick={() =>
                      setShowModal(false) & setShowModalSuccess(true)
                    }
                  >
                    จอง
                  </button>
                  {/* กดส่งไปหลังบ้าน */}
                </div>
              </div>
            </div>
          </PopUp>

          <PopupSuccess
            visible={showModalSuccess}
            onClose={() => setShowModalSuccess(false)}
          >
            <div
              id="defaultModal"
              className="relative p-4  max-w-2xl h-full md:h-auto"
            >
              {/* <!-- Modal content --> */}

              <div
                id="alert-additional-content-3"
                class="p-4 mb-4 border border-[#855CF8]-800 rounded-lg bg-[green] dark:bg-[white]"
                role="alert"
              >
                <div class="flex items-center  justify-center">
                  <svg
                    aria-hidden="true"
                    class="w-5 h-5 mr-2 text-green-700 dark:text-green-800"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill-rule="evenodd"
                      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
                      clip-rule="evenodd"
                    ></path>
                  </svg>
                  <span class="sr-only">Info</span>
                  <h6 class="font-md text-2xl text-green-700 dark:text-green-800 pb-1 ">
                    จองสำเร็จ!!!
                  </h6>
                </div>
                <div class="mt-2 mb-4 text-sm text-[green] dark:text-[green]">
                  เราได้ทำการจองวัน และ เวลาเรียนให้ท่านแล้ว <br></br>
                  โปรดรอการยืนยันจากติวเตอร์อีกครั้ง
                  โดยสามารถตรวจสอบได้ที่หน้าประวัติการจอง
                </div>
                <div class="flex justify-center">
                  <button
                    type="button"
                    class="text-md text-[#855CF8] bg-transparent border border-green-700 hover:bg-[gray] hover:text-[white] focus:ring-2 focus:outline-none focus:ring-green-300 font-medium rounded-lg  px-5 py-1.5 text-center dark:border-green-800 dark:text-green-800 dark:hover:text-white"
                    data-dismiss-target="#alert-additional-content-3"
                    aria-label="Close"
                    onClick={() => setShowModalSuccess(false)}
                  >
                    ปิด
                  </button>
                </div>
              </div>
            </div>
          </PopupSuccess>
        </div>

        <div className="pt-16 bg-blueGray-50">
          <div className="w-full px-4 mx-auto pt-20">
            <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
              <div className="px-6 mt-20 pt-20">
                {/* ---------------- */}
                <div className="text-left mt-20 pt-5 ml-10 mb-7">
                <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    แนะนำตัว
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-normal uppercase">
                    <label> 
                      {infotutor.introduce}     {/* ------แนะนำตัว---หลังบ้าน---- */}
                    </label>
                  </div>
                  <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    รายละเอียดเกี่ยวกับวิชาที่สอน 
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-normal uppercase">
                    <label>
                     {infotutor.detailTech}      {/* ------รายละเอียดเกี่ยวกับวิชาที่สอน----หลังบ้าน--- */}
                    </label>
                  </div>
                  <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    ประสบการณ์
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-normal uppercase">
                    <label>
                      {infotutor.experience}       {/* -------ประสบการณ์-----หลังบ้าน---- */}
                    </label> 
                  </div>
                  {/* <div className="mb-2 text-blueGray-600 mt-10">
                  <i className="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  Solution Manager - Creative Tim Officer
                </div>
                <div className="mb-2 text-blueGray-600">
                  <i className="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  University of Computer Science
                </div> */}
                </div>
                {/* <div className="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div className="flex flex-wrap justify-center">
                  <div className="w-full lg:w-9/12 px-4">
                    <p className="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a
                      href="javascript:void(0);"
                      className="font-normal text-pink-500"
                    >
                      Show more
                    </a>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
          {/* <footer className="relative  pt-8 pb-6 mt-8">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap items-center md:justify-between justify-center">
              <div className="w-full md:w-6/12 px-4 mx-auto text-center">
                <div className="text-sm text-blueGray-500 font-semibold py-1">
                  Made with{" "}
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    className="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  >
                    Notus JS
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    className="text-blueGray-500 hover:text-blueGray-800"
                    target="_blank"
                  >
                    {" "}
                    Creative Tim
                  </a>
                  .
                </div>
              </div>
            </div>
          </div>
        </footer> */}
        </div>

        <button
          title="จองวันและเวลาเรียน"
          className="     container mx-auto fixed w-1/3 bottom-5 inset-x-10  bg-[#855CF8] hover:bg-[#854CF8] text-3xl text-[#FFFFFF] font-bold py-2 px-4 rounded-full"
          type="button"
          data-modal-toggle="book-modal"
          onClick={() => setShowModal(true)}
        >
          จองวัน/เวลาเรียน
        </button>
      </div>
    </>
  );
}

export default DetailTutor;
