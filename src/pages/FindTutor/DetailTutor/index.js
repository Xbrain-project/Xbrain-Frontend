import React from "react";
import avatarTutor from "../../../assets/pics/avatar.jpg";

function detailTutor() {
  return (
    <div className="  ">
      <div className="h-28 w-screen bg-white-100 shadow-lg mb-20 absolute z-20 top-0 flex items-center text-3xl font-bold pl-10 ">
        Navbar
      </div>

      <div className=" bg-[#ACB9FF] pb-20 w-screen top-15 pt-14  mt-28 absolute z-20 flex text-5xl font-bold pl-10 ">
        <img
          alt="..."
          src={avatarTutor}
          class="max-w-xs ml-10 shadow-lg rounded-lg group-hover:opacity-75"
        />
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
                    2. มีประสบการณ์การสอน ม.ต้น (น้องเรียชั้น ม. 2 ระยะเวลาสอน 1
                    เดือน เน้นทำความเข้าใจพื้นฐานเพื่อสามารถทำข้อสอบประยุกต์ได้)
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
        onclick=""
        title="จองวันและเวลาเรียน"
        class="     container mx-auto fixed w-1/3 bottom-5 inset-x-10  bg-[#855CF8] hover:bg-[#854CF8] text-3xl text-[#FFFFFF] font-bold py-2 px-4 rounded-full"
      >
        จองวัน/เวลาเรียน
      </button>
    </div>
  );
}

export default detailTutor;
