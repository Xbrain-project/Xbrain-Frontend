import { check } from "prettier";
import React, { useState, useEffect } from "react";


function PostTeach() {

    const [values, setValues] = useState({    //เก็บค่าตัวแปรต่างๆ
        subject: "",                 //วิชาที่สอน
        class: "",                   //ระดับชั้นที่สอน
        type: "",                    //ประเภทที่สอน
        price: "",                   //ราคา
        place: "",                   //สถานที่สอน
        experience: "",              //รายละเอียดเพิ่มเติม (คะแนนสอบต่างๆ ประสบการณ์)
        day: "",                     //สะดวกสอนวัน/เวลาไหนบ้าง


      });
      const handleChange = (e) => {                             //การเปลี่ยนแปรงค่าเมื่อกรอก
         setValues({ ...values, 
           [e.target.name]: e.target.value });
       };
       const handleSubmit = (e) => {                            //ฟังชั่นจากการกด submit
                alert("Saved");
        };

    return (   
        <div className="font-body  my-20 mx-24 text-black ">
            <div className=" font-bold text-5xl ">
            ลงสอนพิเศษ
            </div>
            <form  onSubmit={handleSubmit} >  
                <div className="px-16 my-10 flex-row space-x-24  flex justify-center ml-16">
                        <div value = {values.subject}                                       //ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                        >                                      
                            <label className="block text-gray-700 text-m font-bold mb-4" // วิชาที่สอน 
                            >       
                                วิชาที่สอน *
                            </label> 
                            <div className="px-10 flex flex-row space-x-5"> 
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


                            <label className="block text-gray-700 text-m font-bold my-4" // รายละเอียดเพิ่มเติม(คะแนนสอบต่างๆ ประสบการณ์)
                            >       
                                รายละเอียดเพิ่มเติม (คะแนนสอบต่างๆ ประสบการณ์) *
                            </label> 
                            
                            <textarea className= "ml-10 shadow appearance-none border rounded w-96 h-24  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline "
                                    id="experience"
                                    onChange={handleChange}
                                    name="experience"
                                    rows="3"
                                    placeholder="สอวน. ฟิสิกส์ ค่าย 1 และ 2"
                                    autoComplete="none"
                                    value={values.experience}
                                    required
                            >

                            </textarea>


                            

                            
                        </div>
                        
                        <div>
                            <label className="block text-gray-700 text-m font-bold mb-4" // ระดับชั้นที่สอน
                            >       
                                ระดับชั้นที่สอน *
                            </label> 
                            <div value = {values.subject}                                   //ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                            >
                                <div className="px-10 flex flex-row space-x-8"> 
                                    <div >
                                        
                                        <div className="flex items-center mb-4">
                                            <input id="default-checkbox" type="checkbox" value="kindergarten" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">อนุบาล</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input  id="checked-checkbox" type="checkbox" value="high" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">มัธยมปลาย</label>
                                        </div>
                                    </div>
                                    <div >
                                        <div className="flex items-center mb-4">
                                            <input id="default-checkbox" type="checkbox" value="primary" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">ประถม</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input  id="checked-checkbox" type="checkbox" value="college" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">มหาลัย</label>
                                        </div>
                                    </div>
                                    <div>
                                        <div className="flex items-center mb-4">
                                            <input id="default-checkbox" type="checkbox" value="middle" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">มัธยมต้น</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input  id="checked-checkbox" type="checkbox" value="graduated" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">วัยทำงาน</label>
                                        </div>
                                    </div>
                                </div>
                            </div>  


                            <label className="block text-gray-700 text-m font-bold my-4" // ประเภทการสอน
                            >       
                                ประเภทการสอน *
                            </label> 
                            <div value = {values.subject}                                   //ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                            >
                                <div className="px-10 flex flex-row space-x-10"> 

                                    <div >                 
                                        <div className="flex items-center mb-4">
                                            <input id="default-checkbox" type="checkbox" value="grade" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">เพิ่มเกรดแต่ละชั้นปี</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input  id="checked-checkbox" type="checkbox" value="enHigh" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">สอบเข้ามัธยมปลาย</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input  id="checked-checkbox" type="checkbox" value="knowledge" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">เพิ่มความรู้ทั่วไป</label>
                                        </div>
                                    </div>

                                    <div >
                                        <div className="flex items-center mb-4">
                                            <input id="default-checkbox" type="checkbox" value="enPrimary" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">สอบเข้ามัธยมต้น</label>
                                        </div>
                                        <div className="flex items-center mb-4">
                                            <input  id="checked-checkbox" type="checkbox" value="entrance" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">สอบเข้ามหาลัย</label>
                                        </div>
                                    </div>                     
                                </div>  
                            </div> 


                            <label className="block text-gray-700 text-m font-bold mt-6 mb-4" // สถานที่สอน
                            >       
                                สถานที่สอน *
                            </label> 
                            <div value = {values.place}                                   //ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                            >
                                <div className="px-10 flex flex-row space-x-10"> 

                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="online" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">Online (ออนไลน์)</label>
                                    
                                    </div>

                                    <div className="flex items-center mb-4">
                                        <input id="default-checkbox" type="checkbox" value="onsite" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                        <label className="block text-gray-700 text-m mx-4">Onsite (ออนไซต์)</label>
                                    </div>
                                        
                                </div>  
                            </div>      


                            <label className="block text-gray-700 text-m font-bold my-4" // รายละเอียดราคาที่สอนแต่ละวิชา
                            >       
                                รายละเอียดราคาที่สอนแต่ละวิชา *
                            </label> 
                            
                            <textarea className= "ml-10 shadow appearance-none border rounded w-96 h-24  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline "
                                    id="price"
                                    onChange={handleChange}
                                    name="price"
                                    rows="3"
                                    placeholder="ฟิสิกส์ชั่วโมงละ 250 บาท , คณิตชั่วโมงละ 350 บาท"
                                    autoComplete="none"
                                    required
                                    value={values.price}
                            >

                            </textarea>

                                
                        </div>

                        


                    </div>

                    <label className="block text-gray-700 text-m font-bold mb-4 px-14 ml-20 " // สะดวกสอนวัน/เวลาไหนบ้าง
                    >       
                        สะดวกสอนวัน/เวลาไหนบ้าง *
                    </label> 
                    <div value = {values.day}                                   //ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                            >
                                <div className="flex flex-row space-x-36 px-24 ml-20"> 
                                    <div >
                                        
                                        <div className="flex items-center mb-2">
                                            <input id="day" type="checkbox" value={values.day} onChange={handleChange}  className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">วันจันทร์</label>
                                            
                                        </div>
                                        <div>
                                            <input className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"    
                                            id="Tmonday"
                                            onChange={handleChange}
                                            name="Tmonday"
                                            value={values.Tmonday}   // ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                                            required
                                            autoComplete="none"
                                            placeholder="18:00 - 20:00 "
                                            />
                                        </div>



                                        <div className="flex items-center mb-2">
                                            <input  id="checked-checkbox" type="checkbox" value="friday" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">วันศุกร์</label>
                                        </div>

                                        <div>
                                            <input className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"    
                                            id="Tfriday"
                                            onChange={handleChange}
                                            name="Tfriday"
                                            value={values.Tfriday}   // ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                                            required
                                            autoComplete="none"
                                            placeholder="18:00 - 20:00 "
                                            />
                                        </div>

                                        
                                    </div>
                                    <div >
                                        <div className="flex items-center mb-2">
                                            <input id="default-checkbox" type="checkbox" value="tuesday" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">วันอังคาร</label>
                                        </div>
                                        <div>
                                            <input className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"    
                                            id="Ttuesday"
                                            onChange={handleChange}
                                            name="Ttuesday"
                                            value={values.Ttuesday}   // ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                                            required
                                            autoComplete="none"
                                            placeholder="18:00 - 20:00 "
                                            />
                                        </div>

                                        
                                        <div className="flex items-center mb-2">
                                            <input  id="checked-checkbox" type="checkbox" value="saturday" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">วันเสาร์</label>
                                        </div>
                                        <div>
                                            <input className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"    
                                            id="Tsaturday"
                                            onChange={handleChange}
                                            name="Tsaturday"
                                            value={values.Tsaturday}   // ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                                            required
                                            autoComplete="none"
                                            placeholder="18:00 - 20:00 "
                                            />
                                        </div>


                                    </div>
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <input id="default-checkbox" type="checkbox" value="wednesday" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">วันพุธ</label>
                                        </div>
                                        <div>
                                            <input className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"    
                                            id="Twednesday"
                                            onChange={handleChange}
                                            name="Twednesday"
                                            value={values.Twednesday}   // ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                                            required
                                            autoComplete="none"
                                            placeholder="18:00 - 20:00 "
                                            />
                                        </div>


                                        <div className="flex items-center mb-2">
                                            <input  id="checked-checkbox" type="checkbox" value="sunday" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">วันอาทิตย์</label>
                                        </div>
                                        <div>
                                            <input className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"    
                                            id="Tsunday"
                                            onChange={handleChange}
                                            name="Tsunday"
                                            value={values.Tsunday}   // ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                                            required
                                            autoComplete="none"
                                            placeholder="18:00 - 20:00 "
                                            />
                                        </div>


                                    </div>
                                    <div>
                                        <div className="flex items-center mb-2">
                                            <input id="default-checkbox" type="checkbox" value="thursday" className="w-4 h-4 text-blue-600 bg-gray-100 rounded border-gray-300 focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"/>
                                            <label className="block text-gray-700 text-m mx-4">วันพฤหัสบดี</label>
                                        </div>
                                        <div>
                                            <input className="shadow appearance-none border rounded w-32 h-10  py-2 px-3 text-gray-700 leading-tight focus:outline-none border-gray-50 focus:border-primary-80 focus:shadow-outline mb-6"    
                                            id="Tthursday"
                                            onChange={handleChange}
                                            name="Tthursday"
                                            value={values.Tthursday}   // ยังไม่แน่ใจเรื่องเก็บค่าของ checkbox
                                            required
                                            autoComplete="none"
                                            placeholder="18:00 - 20:00 "
                                            />
                                        </div>

                                        
                                    </div>
                                </div>
                            </div>  
                            <div className="text-center">
                    <button                                                         //ปุ่ม submit
                        className="mt-5 flex-center inline-block px-24 py-3 bg-primary-80 text-white-100 text-md font-bold leading-tight rounded-2xl shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none  hover:bg-primary-100 hover:ring-2 hover:ring-white active:shadow-lg transition duration-150 ease-in-out"
                        id="submit" 
                    >
                        Confirm
                    </button>
                </div>

            </form>
        </div>
    );
}
    export default PostTeach;      