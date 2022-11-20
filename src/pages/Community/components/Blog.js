import React, { useState, useEffect } from "react";
import { CardBlog } from "../components/CardBlog";
import CreatePost from "./CreatePost";
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
    <div className="flex items-center justify-center mx-auto w-full md:w-3/5 bg-slate-200">
      <div className="flex flex-col md:flex-row gap-10">
        <div className="md:h-auto w-full md:w-7/12 mx-1.5 md:mb-0">
          <CreatePost />
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
