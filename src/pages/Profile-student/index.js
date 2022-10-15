import React, { useState, useEffect } from "react";
import Profile from "../../assets/pics/Profile.png";
import MyFileBase64 from "../../components/file-base64";



function ProfileStudent() {
    const it = document.createElement('it');

    const [values, setValues] = useState({    //เก็บค่าตัวแปรต่างๆ
        name: "",               //ชื่อ-นามสกุล
        nickname:"",            //ชื่อเล่น
        school:"",              //โรงเรียน มหาลัย
        grade:"",               //ชั้นปีที่ศึกษา
        email: "",              //อีเมล
        phone: "",              //เบอร์ติดต่อ
        address: "",            //ที่อยู่
        line: "",               //id line
        img: null,

      });
      const handleChange = (e) => {   //การเปลี่ยนแปรงค่าเมื่อกรอก
         setValues({ ...values, 
           [e.target.name]: e.target.value });
       };
       const handleSubmit = (e) => {
    //     console.log("proIm isL",values.img)
    //     if (values.img === null || values.img === '' ){
    //         alert('please upload profile image')
    //     }
    //     else{
    //     alert("Saved");
    //     e.preventDefault();
    //     setValues({
    //       img:values.img,

    //     });
     }
    return (

        <div className="font-sans my-20 mx-24 text-black ">
            <div className=" font-bold text-6xl ">
            Profile
            </div>
            <form className="mx-20 " onSubmit={handleSubmit}>
                <img className="absolute top-24 right-24  h-56 w-50"                               // รูปภาพ
                img
                
                src={values.img === null ? Profile : values.img}
                alt="profile"
                
                />
                <div className="absolute top-80 right-20 w-64 ">
                    <MyFileBase64                                                           //ช่อง input รูป
                           
                        name = {it}
                        disabled={values.editable === false}
                        mutiple = {false} 
                        onDone = {({base64})=>setValues ({...values,
                        img:base64})} 
                    />
        </div>

       


                <div className="px-20 my-10 flex flex-row ml-auto space-x-20">
                    <div>
                        <label className="block text-gray-700 text-m font-bold mb-2" // ชื่อ-นามสกุล
                        >       
                            ชื่อ-นามสกุล *
                        </label> 
                        <input className="shadow appearance-none border rounded w-96 h-12 py-2 px-3  text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"    
                        id="name"
                        type="name"
                        onChange={handleChange}
                        name="name"
                        value={values.name}
                        required
                        autoComplete="none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-m font-bold mb-2" // ชื่อเล่น
                        >       
                            ชื่อเล่น *
                        </label> 
                        <input className="shadow appearance-none border rounded w-64 h-12  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"    
                        id="nickname"
                        onChange={handleChange}
                        name="nickname"
                        value={values.nickname}
                        required
                        autoComplete="none"
                        />
                    </div>
                </div>

                
                <div className="px-20 my-10 flex flex-row ml-auto space-x-20">
                    <div>
                        <label className="block text-gray-700 text-m font-bold mb-2" // โรงเรียน/มหาลัยที่กำลังศึกษา
                        >       
                            โรงเรียน/มหาลัยที่กำลังศึกษา *
                        </label> 
                        <input className="shadow appearance-none border rounded w-96 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"    
                        id="school"
                        onChange={handleChange}
                        name="school"
                        value={values.school}
                        required
                        autoComplete="none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-m font-bold mb-2" // ชั้นปีที่ศึกษา
                        >       
                            ชั้นปีที่ศึกษา *
                        </label> 
                        <input className="shadow appearance-none border rounded w-64 h-12  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"    
                        id="grade"
                        onChange={handleChange}
                        name="grade"
                        value={values.grade}
                        required
                        autoComplete="none"
                        />
                    </div>              
                </div>

                <div className="px-20 my-10 flex flex-row ml-auto space-x-20">
                    <div>
                        <label className="block text-gray-700 text-m font-bold mb-2" // E-mail
                        >       
                            E-mail *
                        </label> 
                        <input className="shadow appearance-none border rounded w-96 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"    
                        id="email"
                        type="email"
                        onChange={handleChange}
                        name="email"
                        value={values.email}
                        required
                        autoComplete="none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-m font-bold mb-2" // เบอร์ติดต่อ
                        >       
                            เบอร์ติดต่อ *
                        </label> 
                        <input className="shadow appearance-none border rounded w-96 h-12  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"    
                        id="phone"
                        type="phone"
                        pattern="[0-9]*"
                        onChange={handleChange}
                        name="phone"
                        value={values.phone}
                        required
                        autoComplete="none"
                        />
                    </div>              
                </div>

                <div className="px-20 my-10 flex flex-row ml-auto space-x-20">
                    <div>
                        <label className="block text-gray-700 text-m font-bold mb-2" // ที่อยู่ปัจจุบัน (หรือสถานที่ที่สะดวกเรียน)
                        >       
                            ที่อยู่ปัจจุบัน (หรือสถานที่ที่สะดวกเรียน) *
                        </label> 
                        <input className="shadow appearance-none border rounded w-96 h-12 py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"    
                        id="address"
                        onChange={handleChange}
                        name="address"
                        value={values.address}
                        required
                        autoComplete="none"
                        />
                    </div>
                    <div>
                        <label className="block text-gray-700 text-m font-bold mb-2" // ID line
                        >       
                            ID line *
                        </label> 
                        <input className="shadow appearance-none border rounded w-96 h-12  py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:border-purple-500 focus:shadow-outline"    
                        id="line"
                        onChange={handleChange}
                        name="line"
                        value={values.line}
                        required
                        autoComplete="none"
                        />
                    </div>              
                </div>
                <div className="text-center">
                    <button
                        className=" flex-center inline-block px-24 py-3 bg-[#855CF8] text-white text-md font-bold leading-tight rounded-2xl shadow-md  hover:shadow-lg  focus:shadow-lg focus:outline-none  hover:bg-[#503795] hover:ring-2 hover:ring-white active:shadow-lg transition duration-150 ease-in-out"
                        id="submit" 
                    >
                        Confirm
                    </button>
                </div>


            </form>
      </div>
        
    );
}
export default ProfileStudent;