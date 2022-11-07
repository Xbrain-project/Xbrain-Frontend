import React from "react";
import avatarTutor from "../../../assets/pics/avatar.jpg";
import "../components/CardStyle.css";

const Card = () => (
  <div className="    pt-16 mx-auto h-screen flex flex-col relative  md:justify-center md:gap-8 md:items-center xl:gap-10  ">
    <div className="  absolute inset-x-0 p-1 border-4 bg-[#855CF8]">
      <div className="  mx-auto  flex flex-col relative  md:justify-center md:gap-8 xl:gap-1  bg-[#CFD8DC] ">
        {/* card1 */}
        <div class="  space-y-4  lg:grid  grid grid-cols-4 lg:items-start lg:gap-10 lg:space-y-0 lg:space-x-10 bg-[#FFF] ">
          <a href="" class="group">
            <div class="aspect-w-3 aspect-h-2 ">
              <img
                class="max-w-xs ml-10 shadow-lg rounded-lg group-hover:opacity-75"
                src={avatarTutor}
                alt="Avatar of Tutor"
              />
            </div>
          </a>

          <div class="sm:col-span-1 ">


            <div class="mt-2 flex flex-rows-3">
              <a href="" class="group">
                <h4 class=" text-[#855CF8] underline  text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                  พี่หญิง
                </h4>
              </a>
            </div>
            <p class="mt-3 text-md font-normal text-skin-base leading-5">
              จบจาก
            </p>
            <p class="mt-3 text-md font-normal text-skin-base leading-5">
              วิชาที่สอน
            </p>
            <p class="mt-3 text-md font-normal text-skin-base leading-5">
              ระดับชั้นที่สอน
            </p>
            <p class="mt-3 text-md font-normal text-skin-base leading-5">
              เป้าหมาย
            </p>
          </div>

          <a>
            <p class="mt-3 text-md text-skin-base font-bold leading-5  ">
              ดีค่าา สำหรับใครที่อยากจะเพิ่มเติม ความรู้
              เกี่ยวกับการบริหารธุรกิจ สามารถมาคุยกันได้ก่อนได้นะคะ
            </p>
          </a>
        </div>

        {/* card2 */}
        <div class="  space-y-4  lg:grid  grid grid-cols-4 lg:items-start lg:gap-10 lg:space-y-0 lg:space-x-10 bg-[#FFF] ">
          <a href="" class="group">
            <div class="aspect-w-3 aspect-h-2">
              <img
                class="max-w-xs ml-10 shadow-lg rounded-lg group-hover:opacity-75"
                src={avatarTutor}
                alt="Featured Photo"
              />
            </div>
          </a>

          <div class="sm:col-span-1">
          

            <div class="mt-2 flex flex-rows-3">
              <a href="" class="group">
                <h4 class=" text-[#855CF8] underline  text-3xl leading-6 font-semibold font-sans text-skin-inverted group-hover:text-skin-primary">
                  พี่เอ้
                </h4>
              </a>
            </div>
            <p class="mt-3 text-md font-normal text-skin-base leading-5">
              จบจาก
            </p>
            <p class="mt-3 text-md font-normal text-skin-base leading-5">
              วิชาที่สอน
            </p>
            <p class="mt-3 text-md font-normal text-skin-base leading-5">
              ระดับชั้นที่สอน
            </p>
            <p class="mt-3 text-md font-normal text-skin-base leading-5">
              เป้าหมาย
            </p>
          </div>

          <a>
            <p class="mt-3 text-md text-skin-base font-bold leading-5  ">
              สวัสดีครับ น้องๆ สอนเฉียบ สอนใจเย็น เน้นเนื้อหาได้
              สนใจเน้นเนื้อหาตรงไหนคุยกัน ได้ครับ
            </p>
          </a>
        </div>
      </div>
    </div>
  </div>
);

export default Card;
