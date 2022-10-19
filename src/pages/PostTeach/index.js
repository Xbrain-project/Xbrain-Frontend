import React, { useState, useEffect } from "react";


function PostTeach() {

    const [values, setValues] = useState({    //เก็บค่าตัวแปรต่างๆ
        subject: "",               //วิชาที่สอน
        nickname:"",            //ชื่อเล่น
        Nschool:"",             //ชื่อโรงเรียน มหาลัย
        grade:"",               //ชั้นปีที่ศึกษา
        email: "",              //อีเมล
        phone: "",              //เบอร์ติดต่อ
        address: "",            //ที่อยู่
        line: "",               //id line
        img: null,              //รูปภาพ

      });
      const handleChange = (e) => {                             //การเปลี่ยนแปรงค่าเมื่อกรอก
         setValues({ ...values, 
           [e.target.name]: e.target.value });
       };
       const handleSubmit = (e) => {                            //ฟังชั่นจากการกด submit
                alert("Saved");
        };

    return (   
        <div className="font-body my-20 mx-24 text-black ">
            <div className=" font-bold text-5xl ">
            ลงสอนพิเศษ
            </div>
            <form className="mx-10 " onSubmit={handleSubmit}>  
                <div className="px-20 my-10 flex flex-row ml-auto space-x-20">
                        <div value = {values.subject}>
                            <label className="block text-gray-700 text-m font-bold mb-4" // วิชาที่สอน 
                            >       
                                วิชาที่สอน *
                            </label> 
                            <div className="px-10 flex flex-row ml-auto space-x-5"> 
                                <div className="mr-16">
                                    
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="english" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ภาษาอังกฤษ</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input  id="checked-checkbox" type="checkbox" value="maths" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">คณิตศาสตร์</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="bio" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ชีวะ</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input  id="checked-checkbox" type="checkbox" value="physics" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ฟิสิกส์</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="english" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">เคมี</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input  id="checked-checkbox" type="checkbox" value="maths" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ภาษาไทย</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="bio" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">สังคม</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input  id="checked-checkbox" type="checkbox" value="physics" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">GAT เชื่อมโยง</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input  id="checked-checkbox" type="checkbox" value="physics" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ดาราศาสตร์</label>
                                    </div>
                                </div>
                                <div>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="science" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">วิทยาศาสตร์</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input  id="checked-checkbox" type="checkbox" value="french" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ภาษาฝรั่งเศส</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="german" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ภาษาเยอรมัน</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input  id="checked-checkbox" type="checkbox" value="japanese" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ภาษาญี่ปุ่น</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="arabic" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ภาษาอาหรับ</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input  id="checked-checkbox" type="checkbox" value="korean" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ภาษาเกาหลี</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="russian" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ภาษารัสเซีย</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input  id="checked-checkbox" type="checkbox" value="chinese" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">ภาษาจีน</label>
                                    </div>
                                    <div className="flex items-center mb-4">
                                        <input  id="checked-checkbox" type="checkbox" value="programming" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">เขียนโปรแกรม</label>
                                    </div>

                                </div>
                            </div>


                            
                        </div>
                        <div>
                            <label className="block text-gray-700 text-m font-bold mb-2" // ชื่อเล่น
                            >       
                                ระดับชั้นที่สอน *
                            </label> 
                            <div value = {values.subject}>
                                </div>
                           
                        </div>
                    </div>



            </form>
        </div>
    );
}
    export default PostTeach;      