import React, { useState } from "react";
import avatarTutor from "../../../assets/pics/avatar.jpg";
import PopUp from "../components/Popup";
import "../DetailTutor/index.css";

function DetailTutor() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <div className="  ">
        <div className="h-28 w-screen bg-white-100 shadow-lg mb-20 absolute z-20 top-0 flex items-center text-3xl font-bold pl-10 ">
          Navbar
        </div>

        <div className=" bg-[#ACB9FF] flex flex-nowrap pb-20 w-screen top-15 pt-14  mt-28 absolute z-20  pl-1ถ ">
          <img
            alt="..."
            src={avatarTutor}
            class="max-w-xs ml-20 shadow-lg rounded-lg group-hover:opacity-75"
          />
          <div className="pl-20 font-bold">
            <h4 class=" text-[#855CF8]  mb-5 text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
              พี่หญิง
            </h4>
            <p> กำลังศึกษาอยู่ที่ วิทยาลัยเทคโนโลยีมารีย์บริหารธุรกิจ</p>
            <p> วิชาที่สอน คณิตศาสตร์</p>
            <p> ระดับชั้นที่สอน มัธยมต้น มัธยมปลาย</p>
            <p> เป้าหมาย เพิ่มความรู้</p>
          </div>

          <PopUp visible={showModal} onClose={() => setShowModal(false)}>
            <div
              id="defaultModal"
              class="relative p-4 w-full max-w-2xl h-full md:h-auto"
            >
              {/* <!-- Modal content --> */}
              <div class="relative bg-white rounded-lg shadow bg-[white]">
                {/* <!-- Modal header --> */}
                <div class="flex justify-between items-start p-4 rounded-t border-b dark:border-gray-600">
                  <h3 class="text-xl font-semibold text-[black]">
                    จองวัน/เวลาเรียน
                  </h3>
                </div>
                {/* <!-- Modal body --> */}
                <div class="p-6 space-y-6">
                  <div className=" ">
                    <h4 className="text-xl font-semibold ">
                      เลือกวันที่ต้องการจะเรียน
                    </h4>

                    <div className=" grid grid-cols-7 gap-3">
                      <div id="ck-button">
                        <label>
                          <input type="checkbox" value="1" hidden />

                          <span className="text-xl">จ</span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input type="checkbox" value="1" hidden />

                          <span className="text-xl">อ</span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input type="checkbox" value="1" hidden disabled="" />

                          <span className="text-xl">พ</span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input
                            type="checkbox"
                            value="1"
                            hidden
                            disabled="True"
                          />

                          <span className="text-xl text-[gray]">พฤ</span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input type="checkbox" value="1" hidden />

                          <span className="text-xl">ศ</span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input type="checkbox" value="1" hidden />

                          <span className="text-xl">ส</span>
                        </label>
                      </div>

                      <div id="ck-button">
                        <label>
                          <input type="checkbox" value="1" hidden />

                          <span className="text-xl">อา</span>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className="text-xl grid grid-rows-2">
                    <h2> วันจันทร์</h2>
                    <p class="text-base leading-relaxed text-[black] ">
                      17:00 - 18:30
                    </p>
                    <h2> วันเสาร์</h2>
                    <p class="text-base leading-relaxed text-[black] ">
                      11:00 - 12:30 
                    </p>
                    <p class="text-base leading-relaxed text-[black] ">
                      13:00 - 16:00
                    </p>
                  </div>
                  <p class=" flex justify-start text-sm leading-relaxed text-[gray] dark:border-gray-600">
                    นี่คือเวลาว่างของติวเตอร์ท่านนี้ หากมีเวลาว่างตรงกัน
                    สามารถเลือกเรียนเวลานั้นได้เลย!
                  </p>
                  <div className="grid grid-rows-2">
                    <h3 class="text-sm font-semibold leading-relaxed text-[black] ">
                      รายละเอียดคอร์ส/วิชาที่ต้องการจะเรียน
                    </h3>
                    <input
                      class=" shadow appearance-none border rounded w-full mr-2 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                      id="username"
                      type="text"
                      placeholder="ตัวอย่าง 1.คอร์สเพิ่มเติมความรู้การบริหารธุรกิจ"
                    />
                  </div>
                </div>
                {/* <!-- Modal footer --> */}
                <div class="flex justify-end p-6 space-x-2  rounded-b border-t border-gray-200 dark:border-gray-600">
                  <button
                    data-modal-toggle="book-modal"
                    type="button"
                    onClick={() => setShowModal(false)}
                    class="text-[white] bg-[#656262] hover:bg-[#656262]-100 focus:ring-4 focus:outline-none focus:ring-[#656262]-300 rounded-lg border border-[#656262]-200 text-sm font-medium px-5 py-2.5 hover:text-[#656262]-900 focus:z-10 dark:bg-[#656262]-700 dark:text-[#656262]-300 dark:border-[#656262]-500 dark:hover:text-white dark:hover:bg-[#656262]-600 dark:focus:ring-[#656262]-600"
                  >
                    ปิด
                  </button>

                  <button
                    data-modal-toggle="book-modal"
                    type="button"
                    class="  text-[white] bg-[#855CF8] hover:bg-[#855CF8]-800 focus:ring-4 focus:outline-none focus:ring-[#855CF8]-300 font-medium rounded-lg text-sm px-9 py-2.5 text-center dark:bg-[#855CF8]-600 dark:hover:bg-[#855CF8]-700 dark:focus:ring-[#855CF8]-800"
                  >
                    จอง
                  </button>
                </div>
              </div>
            </div>
          </PopUp>
        </div>

        <div class="pt-16 bg-blueGray-50">
          <div class="w-full px-4 mx-auto pt-20">
            <div class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg mt-16">
              <div class="px-6 mt-20 pt-20">
                {/* ---------------- */}
                <div class="text-left mt-20 pt-5 ml-10 mb-7">
                  <h3 class="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    รายละเอียด
                  </h3>
                  <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-normal uppercase">
                    <p>1. เอ่ออออออ</p>
                    <p>2. เอ่ออออออ</p>
                  </div>
                  <h3 class="text-xl font-semibold leading-normal text-blueGray-700 mb-2">
                    ประสบการณ์
                  </h3>
                  <div class="text-sm leading-normal mt-0 mb-2 text-blueGray-400 font-normal uppercase">
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
                  {/* <div class="mb-2 text-blueGray-600 mt-10">
                  <i class="fas fa-briefcase mr-2 text-lg text-blueGray-400"></i>
                  Solution Manager - Creative Tim Officer
                </div>
                <div class="mb-2 text-blueGray-600">
                  <i class="fas fa-university mr-2 text-lg text-blueGray-400"></i>
                  University of Computer Science
                </div> */}
                </div>
                {/* <div class="mt-10 py-10 border-t border-blueGray-200 text-center">
                <div class="flex flex-wrap justify-center">
                  <div class="w-full lg:w-9/12 px-4">
                    <p class="mb-4 text-lg leading-relaxed text-blueGray-700">
                      An artist of considerable range, Jenna the name taken by
                      Melbourne-raised, Brooklyn-based Nick Murphy writes,
                      performs and records all of his own music, giving it a
                      warm, intimate feel with a solid groove structure. An
                      artist of considerable range.
                    </p>
                    <a
                      href="javascript:void(0);"
                      class="font-normal text-pink-500"
                    >
                      Show more
                    </a>
                  </div>
                </div>
              </div> */}
              </div>
            </div>
          </div>
          {/* <footer class="relative  pt-8 pb-6 mt-8">
          <div class="container mx-auto px-4">
            <div class="flex flex-wrap items-center md:justify-between justify-center">
              <div class="w-full md:w-6/12 px-4 mx-auto text-center">
                <div class="text-sm text-blueGray-500 font-semibold py-1">
                  Made with{" "}
                  <a
                    href="https://www.creative-tim.com/product/notus-js"
                    class="text-blueGray-500 hover:text-gray-800"
                    target="_blank"
                  >
                    Notus JS
                  </a>{" "}
                  by{" "}
                  <a
                    href="https://www.creative-tim.com"
                    class="text-blueGray-500 hover:text-blueGray-800"
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
          class="     container mx-auto fixed w-1/3 bottom-5 inset-x-10  bg-[#855CF8] hover:bg-[#854CF8] text-3xl text-[#FFFFFF] font-bold py-2 px-4 rounded-full"
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
