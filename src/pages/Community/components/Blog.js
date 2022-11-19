import React, { useState, useEffect } from "react";
import { CardBlog } from "../components/CardBlog";
import service from "../../../assets/icons/community.png";
import community from "../../../assets/icons/community.png";

const Blog = () => {
  return (
    // <div className="md:mt-32 md:mb-32">
    //   <div className="mt-20 text-center md:text-center xl:text-center">
    //     <h1 className="font-bold text-2xl leading-8 md:text-3xl font-body">
    //       ข่าวสาร
    //     </h1>
    //   </div>

    //   {/* Cards */}
    //   <div className="flex flex-col w-full h-full justify-center items-center">
    //     <CardBlog
    //       title="It’s more than service"
    //       content="เลือกสอนได้ทั้งออนไลน์เเละออนไซต์ เเถมยังช่วยพัฒนาทักษาด้านความเป็นผู้นำเเละสร้างอาชีพในการช่วยเหลือผู้อื่น"
    //     />
    //     <link to></link>
    //   </div>
    // </div>
    <div className="md:w-3/5 mx-auto px-10 py-4 bg-pink-200">
      <div className="flex flex-col md:flex-row -mx-1.5 p-4">
        <div className="h-72 md:h-auto w-full md:w-7/12 mx-1.5 mb-6 md:mb-0 group">
          <div className="h-72 md:h-full relative">
            <img
              src="https://images.unsplash.com/photo-1633265486064-086b219458ec?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=96&amp;q=80"
              className="absolute z-0 object-cover w-full h-72 md:h-full rounded-md"
            />

            <div className="absolute left-0 right-0 bottom-0 p-4 z-30">
              <h1 className="font-bold text-white leading-tight sm:mb-1.5 group-hover:underline text-2xl md:text-3xl">
                ข่าวสาร
              </h1>
              <div className="text-xs text-white hidden sm:block">
                <div className="flex items-center">
                  <span className="text-xs text-white">
                    18h | Stephen Ainsworth
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right side */}
        <div className="flex flex-col w-full md:w-10/12 mx-1.5">
          <CardBlog
            title="It’s more than service"
            content="เลือกสอนได้ทั้งออนไลน์เเละออนไซต์ เเถมยังช่วยพัฒนาทักษาด้านความเป็นผู้นำเเละสร้างอาชีพในการช่วยเหลือผู้อื่น"
          />
        </div>
      </div>
    </div>
  );
};

export default Blog;
