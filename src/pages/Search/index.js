import React, { useState, useEffect } from "react";


function Search(){
    // const handleChange = (e) => {                             //การเปลี่ยนแปรงค่าเมื่อกรอก
    //     setValues({ ...values, 
    //       [e.target.name]: e.target.value });
    //   };
      const handleSubmit = (e) => {                            //ฟังชั่นจากการกด submit
               alert("Saved");
       };
    return(
        <div className="font-body ">
            <div className="mx-24 text-black border-2 border-gray-200"      //ส่วนของการเลือกฟิลเตอร์
            >

                <div                                             //เลือกฟิลเตอร์วิชา เว้น value ไว้ก่อนนะ 
                >                                               


                    <div className="text-xl text-center mt-16 font-bold"        
                    >
                        วิชาที่ต้องการเรียน

                    </div>


                    <div className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center"         //แถวแรก
                    >


                    <div>
                        <input type="checkbox" id="english" value="" className="hidden peer"            // checkbox อังกฤษ
                        ></input>
                        <label for="english" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">อังกฤษ</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="maths" value="" className="hidden peer"               // checkbox คณิตศาสตร์
                        ></input>
                        <label for="maths" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">คณิตศาสตร์</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="bio" value="" className="hidden peer"                // checkbox ชีวะ
                        ></input>
                        <label for="bio" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">ชีวะ</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="physics" value="" className="hidden peer"            // checkbox ฟิสิกส์
                        ></input>
                        <label for="physics" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">ฟิสิกส์</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="chemistry" value="" className="hidden peer"          // checkbox เคมี
                        ></input>
                        <label for="chemistry" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">เคมี</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="thai" value="" className="hidden peer"               // checkbox ภาษาไทย
                        ></input>
                        <label for="thai" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">ภาษาไทย</div>
                        </label>
                    </div>

                    </div>


                    <div className="flex flex-row ml-auto space-x-10 mb-5 justify-center"               //แถวสอง
                    >


                    <div>
                        <input type="checkbox" id="science" value="" className="hidden peer"            // checkbox อังกฤษ
                        ></input>
                        <label for="science" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">วิทยาศาสตร์</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="social" value="" className="hidden peer"               // checkbox คณิตศาสตร์
                        ></input>
                        <label for="social" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">สังคม</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="gat" value="" className="hidden peer"                // checkbox ชีวะ
                        ></input>
                        <label for="gat" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">GAT เชื่อมโยง</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="astronomy" value="" className="hidden peer"            // checkbox ฟิสิกส์
                        ></input>
                        <label for="astronomy" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">ดาราศาสตร์</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="french" value="" className="hidden peer"          // checkbox เคมี
                        ></input>
                        <label for="french" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">ภาษาฝรั่งเศส</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="german" value="" className="hidden peer"               // checkbox ภาษาไทย
                        ></input>
                        <label for="german" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">ภาษาเยอรมัน</div>
                        </label>
                    </div>

                    </div>



                    <div className="flex flex-row ml-auto space-x-10 mb-5 justify-center"               //แถวสาม
                    >


                    <div>
                        <input type="checkbox" id="japanese" value="" className="hidden peer"            // checkbox อังกฤษ
                        ></input>
                        <label for="japanese" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">ภาษาญี่ปุ่น</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="arabic" value="" className="hidden peer"               // checkbox คณิตศาสตร์
                        ></input>
                        <label for="arabic" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">ภาษาอาหรับ</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="korean" value="" className="hidden peer"                // checkbox ชีวะ
                        ></input>
                        <label for="korean" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">ภาษาเกาหลี</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="russian" value="" className="hidden peer"            // checkbox ฟิสิกส์
                        ></input>
                        <label for="russian" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">ภาษารัสเซีย</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="chinese" value="" className="hidden peer"          // checkbox เคมี
                        ></input>
                        <label for="chinese" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">ภาษาจีน</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="programming" value="" className="hidden peer"               // checkbox ภาษาไทย
                        ></input>
                        <label for="programming" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">เขียนโปรแกรม</div>
                        </label>
                    </div>

                    </div>

                </div>



                <div                                //เลือกฟิลเตอร์ระดับชั้น เว้น value ไว้ก่อนนะ 
                >


                    <div className="text-xl text-center mt-10 font-bold"         
                    >
                        ระดับชั้น

                    </div>

                    <div className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center"         //แถวแรก
                    >


                    <div>
                        <input type="checkbox" id="kindergarten" value="" className="hidden peer"            // checkbox อนุบาล
                        ></input>
                        <label for="kindergarten" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">อนุบาล</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="primary" value="" className="hidden peer"               // checkbox ประถม
                        ></input>
                        <label for="primary" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">ประถม</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="middle" value="" className="hidden peer"                // checkbox มัธยมต้น
                        ></input>
                        <label for="middle" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">มัธยมต้น</div>
                        </label>
                    </div>

                    </div>
                    <div className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center"         //แถวสอง
                    >


                    <div>
                        <input type="checkbox" id="high" value="" className="hidden peer"            // checkbox มัธยมปลาย
                        ></input>
                        <label for="high" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">มัธยมปลาย</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="college" value="" className="hidden peer"               // checkbox มหาลัย
                        ></input>
                        <label for="college" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">มหาลัย</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="graduated" value="" className="hidden peer"                // checkbox เรียนจบแล้ว
                        ></input>
                        <label for="graduated" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">เรียนจบแล้ว</div>
                        </label>
                    </div>

                    </div>

                </div>


                <div                                //เลือกฟิลเตอร์เป้าหมายการเรียน เว้น value ไว้ก่อนนะ 
                >


                    <div className="text-xl text-center mt-10 font-bold"         
                    >
                        เป้าหมายการเรียน

                    </div>

                    <div className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center"         //แถวแรก
                    >


                    <div>
                        <input type="checkbox" id="grade" value="" className="hidden peer"            // checkbox เพิ่มเกรดแต่ละชั้นปี
                        ></input>
                        <label for="grade" className="inline-flex justify-between items-center h-12 w-44 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">เพิ่มเกรดแต่ละชั้นปี</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="enPrimary" value="" className="hidden peer"               // checkbox สอบเข้ามัธยมต้น
                        ></input>
                        <label for="enPrimary" className="inline-flex justify-between items-center h-12 w-44 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">สอบเข้ามัธยมต้น</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="enHigh" value="" className="hidden peer"                // checkbox สอบเข้ามัธยมปลาย
                        ></input>
                        <label for="enHigh" className="inline-flex justify-between items-center h-12 w-44 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">สอบเข้ามัธยมปลาย</div>
                        </label>
                    </div>

                    </div>
                    <div className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center"         //แถวสอง
                    >


                    <div>
                        <input type="checkbox" id="entrance" value="" className="hidden peer"            // checkbox สอบเข้ามหาลัย
                        ></input>
                        <label for="entrance" className="inline-flex justify-between items-center h-12 w-44 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">สอบเข้ามหาลัย</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="knowledge" value="" className="hidden peer"               // checkbox เพิ่มความรู้
                        ></input>
                        <label for="knowledge" className="inline-flex justify-between items-center h-12 w-44 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">เพิ่มความรู้</div>
                        </label>
                    </div>



                    </div>
                    
                </div>



                <div                                             //เลือกฟิลเตอร์สถานที่ เว้น value ไว้ก่อนนะ 
                >                                               


                    <div className="text-xl text-center mt-10 font-bold"        
                    >
                        สถานที่

                    </div>


                    <div className="flex flex-row ml-auto space-x-10 mt-5 mb-5 justify-center"         //แถวแรก
                    >


                    <div>
                        <input type="checkbox" id="online" value="" className="hidden peer"            // checkbox ออนไลน์
                        ></input>
                        <label for="online" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg   text-center">ออนไลน์</div>
                        </label>
                    </div>

                    <div>
                        <input type="checkbox" id="onsite" value="" className="hidden peer"               // checkbox ออนไซต์
                        ></input>
                        <label for="onsite" className="inline-flex justify-between items-center h-12 w-36 text-black-100 rounded-lg border-2 border-gray-200 cursor-pointer  bg-[#D7C9FF] peer-checked:bg-primary-80   peer-checked:text-white-100 hover:border-primary-80 ">                           
                            <div className="w-full text-lg  text-center">ออนไซต์</div>
                        </label>
                    </div>

                    </div>

                </div>

                <div className="text-center">
                    <button                                                         //ปุ่ม submit
                        className="mt-5 flex-center inline-block px-16 py-3 mb-8 bg-primary-80 text-white-100 text-xl font-bold leading-tight rounded-2xl shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none  hover:bg-primary-100 hover:ring-2 hover:ring-white active:shadow-lg transition duration-150 ease-in-out"
                        id="submit" 
                        onClick = {handleSubmit}

                    >
                        Search
                    </button>
                </div>
                
            </div>

            <div className="mx-24 text-black h-screen border-2 border-gray-200 bg-blue-100"   //ผลลัพธ์จากการกด search
            >

            </div>

        </div>



        


    );

}
export default Search;