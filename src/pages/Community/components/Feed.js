import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import community from "../../../assets/icons/community.png";
import TestData from "./TestData";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Moment from "react-moment";
import "moment/locale/th";

//คลิกเข้าไป comment
const Feed = () => {
  //back button : useNavigate
  let navigate = useNavigate();
  const [values, setValues] = useState({
    id: "",
    timestap: "",
    title: "",
    content: "",
  });
  const [comment, setComment] = useState([]);
  const [newComment, setNewComment] = useState({
    id: "",
    textReview: "",
  });

  const handleSubmit = (e) => {
    setComment({ ...comment, [e.target.comment]: e.target.value });
    console.log("comment");
  };
  //comment toggle
  const [isExpand, setExpand] = useState(false);
  const toggle = () => setExpand((e) => !e);

  return (
    <div className="container mx-auto mt-6 md:w-3/5 rounded-xl drop-shadow-lg font-body">
      <button className="text-black-100" onClick={() => navigate(-1)}>
        <FontAwesomeIcon
          icon={faArrowLeft}
          className="text-primary-80 text-2xl"
        />
      </button>
      <div className="px-10 py-4 mt-6 flex flex-col font-body w-full bg-white-100 rounded-t-xl">
        {/* Title */}
        <h1 className="py-2 text-primary-80 font-semibold text-xl text-left md:text-3xl font-body">
          Title : ตามหาหนังสือมือสอง
        </h1>
        <div className="mt-3 flex w-full items-center space-x-4">
          <img
            src={community}
            className="aspect-square shrink-0 w-14 h-14 rounded-full "
            alt="ImageTutor"
          />
          <div className="flex w-full min-w-0 flex-col -space-y-1">
            {/* ชื่อคนโพสต์ + ชื่อมหาลัย */}
            <div className="pb-2 text-blck font-semibold text-lg text-left md:text-xl">
              นายสมคำ ใจดี
            </div>
            <div className="text-sm font-normal">25/06/2020</div>
          </div>
        </div>

        <p className="py-6 text-left text-base md:text-lg">
          content : อยากได้หนังสือวิทยาศาสตร์ว้อยยย
        </p>
      </div>
      {/* comment toggle */}
      <div
        className="flex h-14 cursor-pointer items-center text-white-100 px-10 bg-primary-80 "
        onClick={(e) => toggle()}
      >
        <div className="mr-3 text-lg md:text-xl font-semibold text-white-100">
          Comment
        </div>
        <FontAwesomeIcon
          icon={faChevronDown}
          className={`text-white-100 text-xs transition-transform ${
            isExpand && "rotate-180 "
          }`}
        />
      </div>
      {/* comment */}
      <div className="w-full bg-slate-200 py-4 pb-4 px-10 rounded-b-xl">
        <div className="flex w-full first:mt-0 space-x-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
            <img src={community} alt="profile" className="h-full w-full" />
          </div>
          <div className="rounded-md px-6 py-2 bg-[#D7C9FF]">
            <div className="font-semibold text-lg">นายจูเนียร์คุง</div>
            <div className="text-base md:text-lg">comment : ฉันมีจ้า</div>
          </div>
          <Moment
            className="mx-4 self-end whitespace-nowrap text-sm text-[#999999]"
            locale="th"
            fromNow
          >
            {comment.created_at}
          </Moment>
        </div>

        {/* พิมพ์เเสดงความคิดเห็น */}
        <div className="mt-8 mb-6 flex w-full items-start space-x-4">
          <div className="h-14 w-14 shrink-0 overflow-hidden rounded-full">
            <img src={community} alt="profile" className="h-full w-full" />
          </div>
          <div className="relative flex h-16 w-full items-center ">
            <textarea
              id="textarea"
              placeholder="เเสดงความคิดเห็น"
              className="mt-1 w-full h-20 px-3 py-2 bg-white-100 border border-slate-300 rounded-md text-base md:text-lg shadow-sm placeholder-slate-400
              focus:outline-none focus:border-primary-80 focus:ring-1 focus:ring-primary-80
              invalid:border-[#FF3358] invalid:text-[#FF3358]
              focus:invalid:border-[#FF3358] focus:invalid:ring-[#FF3358]"
            />
            <button
              type="submit"
              onClick={handleSubmit}
              className="absolute right-4 text-white-100 text-lg font-semibold px-3 py-1 bg-primary-80 rounded-2xl hover:bg-primary-100"
            >
              send
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
