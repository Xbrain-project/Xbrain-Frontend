import React, {useState} from 'react'
import Parse from 'parse/react-native';
import forgotpass from "../../assets/pics/forgotpass1.jpg";

export default function ForgotPassword() {
    const[email,setEmail] = useState();
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        console.log({
          email: data.get("email"),
          password: data.get("password"),
        });
      };
    
      const doRequestPasswordReset = async function () {
        // Note that this value come from state variables linked to your text input
        const emailValue = email;

        parseFloat.U
      };
    return(
        <div class="flex flex-row">
        <img 
            class="h-screen object-contain opacity-1" 
            src={forgotpass}>
            </img>

        <div
            class="container px-6 py-12 h-screen bg-white-100 w-full">
                <div 
                class="flex justify-center items-center flex-wrap h-full g-6 text-gray-800">
                    <div 
                    class=" w-9/12 p-10">
                    {/* <!-- Form --> */}
                    <form>
                    <div class="font-body text-center font-bold text-6xl text-primary-80 py-5">
                        Forgot Password
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
                        />
                    </div>

                    {/* <!-- Submit button --> */}
                    <button
                        type="submit"
                        class="inline-block px-7 py-3 bg-primary-80 text-white-100 font-body font-semibold text-lg leading-snug rounded-2xl shadow-md hover:bg-primary-100 hover:shadow-lg focus:bg-primary-100 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-primary-100 active:shadow-lg transition duration-150 ease-in-out w-full"
                        data-mdb-ripple="true"
                        data-mdb-ripple-color="light"
                        onSubmit={handleSubmit}
                    >
                        Send recovery email 
                    </button>
                    </form>
                    </div>
                </div>

            </div>   
        </div> 
    );
}