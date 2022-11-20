import React, { useState, useEffect } from "react";
import { CardBlog } from "../components/CardBlog";
import CreatePost from "./CreatePost";
import service from "../../../assets/icons/community.png";
import community from "../../../assets/icons/community.png";

// หน้ารวม Blog ใหม่ๆ
const Blog = () => {
  return (
    <div className="container items-center justify-center mx-auto w-full md:w-3/5 bg-slate-200">
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:h-auto w-full md:w-8/12 lg:w-[516px] mx-1.5 md:mb-0">
          <CreatePost />
        </div>
        {/* right side */}
        <div className="container w-full md:w-[816px] lg:w-[875px] h-full bg-white-100 rounded-xl drop-shadow-md px-10 py-10">
          {/* card ข่าวสารใหม่ๆ */}
          <div className="flex flex-col mx-1.5 gap-5">
            <h1 className="py-4 font-bold text-2xl leading-8 md:text-3xl text-primary-80 font-body">
              ข่าวสาร
            </h1>
            <CardBlog title="It" content="เลือก" />
            <CardBlog title="It’s " content="เลือกสอ" />
            <CardBlog title="Itgewqqqqqqqqqqqq" content="เลือก" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
