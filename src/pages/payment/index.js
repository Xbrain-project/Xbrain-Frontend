import React from "react";

import PaypalCheckoutButton from "../../components/paypalcheckoutbutton";

export default function Payment() {
  const product = {
    description: "Design+Code React Hooks Course",
    price: 100
  };
    return(
        <div class="bg-purple-200 w-full h-full">
            <div 
                // px-80
                class="flex justify-center items-center px-12 py-12 h-screen font-body">
                <div
                    // mx-40
                    class=" container justify-center items-center py-3 bg-white-100 rounded-lg shadow-lg border border-gray-50">
                <div 
                    class="flex justify-center flex-wrap h-full g-6 text-gray-800">
                    <form>
                        <div class="font-extrabold items-start text-6xl text-center">
                            ชำระเงิน
                        </div>

                        <div class="font-extrabold items-start text-2xl text-center">
                            ราคา 100 บาท
                        </div>
                        
                            <div className="paypal-button-container">
                            <PaypalCheckoutButton product={product} />
                            </div>
                        
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
    }