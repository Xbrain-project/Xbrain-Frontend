// import { isDisabled } from "@testing-library/user-event/dist/utils";
import React, { useState } from "react";
import avatarTutor from "../../../assets/pics/avatar.jpg";
import PopUp from "../components/Popup";
import PopupSuccess from "../components/PopupSuccess";

import "../DetailTutor/index.css";

function DetailTutor() {
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

  const handleChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const [showModal, setShowModal] = useState(false);
  const [showModalSuccess, setShowModalSuccess] = useState(false);
  return (
    <>
      <div className="  ">
        <div className="h-28 w-screen bg-white-100 shadow-lg mb-20 absolute z-20 top-0 flex items-center text-3xl font-bold pl-10 ">
          Navbar
        </div>

        <div className=" bg-[#ACB9FF] flex flex-nowrap pb-20 w-screen top-15 pt-14  mt-28 absolute z-20  pl-1ถ ">
          <img
            alt="..."
            src={avatarTutor} //ดึงจากหลังบ้าน
            className="max-w-xs ml-20 shadow-lg rounded-lg group-hover:opacity-75"
          />
          <div className="pl-20 font-bold">
            <h4 className=" text-[#855CF8]  mb-5 text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
              พี่หญิง {/*ดึงจากหลังบ้าน*/}
            </h4>
            <p> กำลังศึกษาอยู่ที่ วิทยาลัยเทคโนโลยีมารีย์บริหารธุรกิจ</p>{" "}
            {/*ดึงจากหลังบ้าน*/}
            <p> วิชาที่สอน คณิตศาสตร์</p>
            <p> ระดับชั้นที่สอน มัธยมต้น มัธยมปลาย</p>
            <p> เป้าหมาย เพิ่มความรู้</p>
          </div>

          <PopUp visible={showModal} onClose={() => setShowModal(false)}>
            <div
              id="defaultModal"
              className="relative p-4 w-full max-w-2xl h-full md:h-auto"
            >
              {/* <!-- Modal content --> */}
              <div className="relative bg-white rounded-lg shadow bg-[white]">
                {/* <!-- Modal header --> */}
                <div className="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 className="text-xl font-semibold text-[black]">
                    จองวัน/เวลาเรียน
                  </h3>
                </div>
                {/* <!-- Modal body --> */}
                <div className="p-6 space-y-6">
                  <div className=" ">
                    <h4 className="text-xl font-semibold ">
                      เลือกวันที่ต้องการจะเรียน
                    </h4>

                    <div className=" grid grid-cols-7 gap-3">
                      <div id="ck-button">
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
                            }`}
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

                  <div className="text-xl grid grid-rows">
                    <h2> วันจันทร์</h2> {/*ดึงจากหลังบ้าน*/}
                    <p className="text-base leading-relaxed text-[black] ">
                      17:00 - 18:30 {/*ดึงจากหลังบ้าน*/}
                    </p>
                    <h2> วันเสาร์</h2> {/*ดึงจากหลังบ้าน*/}
                    <p className="text-base leading-relaxed text-[black] ">
                      11:00 - 12:30 {/*ดึงจากหลังบ้าน*/}
                    </p>
                    <p className="text-base leading-relaxed text-[black] ">
                      13:00 - 16:00 {/*ดึงจากหลังบ้าน*/}
                    </p>
                  </div>
                  <p className=" flex justify-start text-sm leading-relaxed  text-[gray] dark:border-gray-600">
                    นี่คือเวลาว่างของติวเตอร์ท่านนี้ หากมีเวลาว่างตรงกัน
                    สามารถเลือกเรียนเวลานั้นได้เลย!
                  </p>
                  <form className="grid " onSubmit={handleSubmit}>
                    <h3 className="text-sm font-semibold leading-relaxed mb-1 text-[black] ">
                      รายละเอียดคอร์ส/วิชาที่ต้องการจะเรียน
                    </h3>

                    {/* <!-- รายละเอียดคอร์ส/วิชาที่ต้องการจะเรียน  ส่งไปหลังบ้าน--> */}

                    <textarea
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
                    </p>
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
                    className={`  ${
                      values.detailStudy.length >= 1
                        ? "text-[black]"
                        : "text-gray-400 bg-[gray]" 
                    } text-[white] bg-[#855CF8] hover:bg-[#855CF8]-800 focus:ring-4 focus:outline-none focus:ring-[#855CF8]-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center dark:bg-[#855CF8]-600 dark:hover:bg-[#855CF8]-700 dark:focus:ring-[#855CF8]-800"`}
                      id="submit"
                    disabled={values.detailStudy.length<1} //แก้แบบ โง่ๆ55555555
                    onClick={() => setShowModal(false) & setShowModalSuccess(true)}
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
                    รายละเอียด
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-normal uppercase">
                    <p>1. เอ่ออออออ</p>
                    <p>2. เอ่ออออออ</p>
                  </div>
                  <h3 className="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    ประสบการณ์
                  </h3>
                  <div className="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-normal uppercase">
                    <p>
                      1. มีประสบการณ์การสอน เด็ก ระดับ ประถมปลาย (น้อง ป.5
                      ระยะเวลาสอน 2 เดือน เน้นการวิเคราะห์โจทย์ปัญหาธุรกิจ)
                    </p>
                    <p>
                      2. มีประสบการณ์การสอน ม.ต้น (น้องเรียชั้น ม. 2 ระยะเวลาสอน
                      1 เดือน
                      เน้นทำความเข้าใจพื้นฐานเพื่อสามารถทำข้อสอบประยุกต์ได้)
                    </p>
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
