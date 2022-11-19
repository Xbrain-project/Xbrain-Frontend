import React from 'react'


export default function SignUpTutor() {
    return(    
        <div class="bg-purple-200 w-full h-full">
        <div 
            class="flex justify-center items-center px-80 py-12 h-screen font-body">
                <div class=" container justify-center items-center mx-40 bg-white-100 rounded-lg shadow-lg border border-gray-50">
                <div 
                    class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div 
                    class=" w-9/12 p-10">
                    {/* <!-- Form --> */}
                    <form>
                    <div class="text-center font-bold text-6xl text-primary-80 py-5">
                        Register
                    </div>
                    
                        <div class="justify-center flex flex-row ">
                            <p 
                                class="text-lg text-gray-400 pr-2">
                                    Role by </p>
                            <p 
                                class="text-lg font-semibold text-white-100 bg-primary-100 pl-1 pr-1 rounded-lg">
                                    Tutor</p>
                        </div>
                    
                    {/* <!-- Email input --> */}
                    <div class="mb-6">
                    <label 
                        class="block font-semibold text-lg md:text-left mb-1 md:mb-0 pr-4 py-2" for="inline-full-name">
                        Email
                        </label>
                        <input
                        type="text"
                        class="form-control block w-full px-4 py-2 bg-white-100 bg-clip-padding border border-solid border-gray-50 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder='you@gmail.com'
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
                        class="form-control block w-full px-4 py-2 bg-white-100 bg-clip-padding border border-solid border-gray-50 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="******************"
                        />
                        
                    </div>

                    {/* <!-- Confirm Password input --> */}
                    <div class="mb-6">
                    <label 
                        class="block font-semibold text-lg md:text-left mb-1 md:mb-0 pr-4 py-2" for="inline-full-name">
                        Confirm Password
                        </label>
                        <input
                        type="password"
                        class="form-control block w-full px-4 py-2 bg-white-100 bg-clip-padding border border-solid border-gray-50 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                        placeholder="******************"
                        />
                        
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                        type="submit"
                        class="inline-block px-7 py-3 bg-primary-80 text-white-100 font-body font-semibold text-lg leading-snug rounded-2xl shadow-md hover:bg-primary-100 hover:shadow-lg focus:bg-primary-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-100 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                    >
                        Sign up
                    </button>
                    <div class="py-2 grid justify-items-center">
                        <p class="font-body text-gray-100">
                    Have an account?
                        <a
                        href="/"
                        class="font-semibold text-primary-80 hover:text-primary-100 hover:underline duration-200 transition ease-in-out pl-2"
                        >Log in
                        </a>
                        </p>
                    </div>
                    </form>
                    </div>
                    </div>
                </div>
            </div>
            </div>
    );
}