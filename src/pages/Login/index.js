import React, {useState} from 'react'

import tutorpic from "../../assets/pics/login1.jpg";

export default function Login() {
    //เก็บค่า form login
    const [form, setForm] = useState({ 
        email: "",
        password: "",
    })

    //role
    const roleBase = (role) => {
        console.log('roleBase', role);
        if (role == 'student') {
            window.location = '/homestudent'
        } else {
            window.location = '/homestudent' 
        }
    }
    
    // change
    const handleChange = (e) => {  
        setForm({ ...form, 
           [e.target.name]: e.target.value });
         
    };

    //submit
    const handleSubmit = (e) => { 
        e.preventDefault()
        
        //check blank required
        if(form.email !== '' && form.password !== ''){
            const user={form}
            console.log(user)
        } else if (form.email === '' && form.password !== ''){
            alert('Email is required.');
        } else if (form.email !== '' && form.password === ''){
            alert('Password is required.');
        } else {
            alert('Email and a password are required.');
        }
        
          
    }


    return(
        <div class="flex flex-row">
        <img 
            class="h-screen object-contain opacity-1" 
            src={tutorpic}>
            </img>

        <div
            class="container px-6 py-12 h-screen bg-white-100 w-full">
                <div 
                class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div 
                    class=" w-9/12 p-10">
                    {/* <!-- Form --> */}
                    {/* <pre>{JSON.stringify(userInfo, undefined, 2)}</pre> //check  */}
                    <form>
                    <div class="font-body text-center font-bold text-6xl text-primary-80 py-5">
                        Login
                    </div>
                    {/* <!-- Email input --> */}
                    <div class="mb-6">
                    <label 
                        class="block font-semibold text-lg md:text-left mb-1 md:mb-0 pr-4 py-2" for="inline-full-name">
                        Email
                        </label>
                        <input
                        type="email"
                        name="email"
                        class="form-control block w-full px-4 py-2 bg-white-100 bg-clip-padding border border-solid border-gray-50 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="you@gmail.com"
                        value={form.email}
                        onChange={handleChange}
                        
                        />
                    </div>
                    

                    {/* <!-- Password input --> */}
                    <div class="mb-6">
                    <label 
                        class="block font-semibold text-lg md:text-left mb-1 md:mb-0 pr-4 py-2" for="inline-full-name">
                        Password
                        </label>
                        <input
                        type="password"
                        name="password"
                        class="form-control block w-full px-4 py-2 bg-white-100 bg-clip-padding border border-solid border-gray-50 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="******************"
                        value={form.password}
                        onChange={handleChange}
                        />
                    </div>

                    <div class="py-2 grid justify-items-end">
                        <a
                        href="/forgotpass"
                        class="font-body text-gray-100 hover:text-primary-100 hover:underline duration-200 transition ease-in-out"
                        >Forgot password?
                        </a>
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                        type="submit"
                        class="inline-block px-7 py-3 bg-primary-80 text-white-100 font-body font-semibold text-lg leading-snug rounded-2xl shadow-md hover:bg-primary-100 hover:shadow-lg focus:bg-primary-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-100 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onClick={handleSubmit}
                        
                    >
                        Login
                    </button>
                    <div class="py-2 grid justify-items-center">
                        <p class="font-body text-gray-100">
                    Don’t have an account?
                        <a
                        href="/chooserole"
                        class="font-semibold text-primary-80 hover:text-primary-100 hover:underline duration-200 transition ease-in-out pl-2"
                        >Sign up
                        </a>
                        </p>
                    </div>
                    </form>
                    </div>
                </div>

            </div>   
        </div> 
    );
}