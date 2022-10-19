import React from "react";


export default function Payment() {
    return(
        <div class="bg-purple-200 w-full h-full">
            <div 
                // px-80
                class="flex justify-center items-center px- py-12 h-screen font-body">
                <div
                    // mx-40
                    class=" container justify-center items-center mx- bg-white-100 rounded-lg shadow-lg border border-gray-50">
                <div 
                    class="flex justify-center flex-wrap h-full g-6 text-gray-800">
                    <form>
                        <div class="font-extrabold items-start text-4xl">
                            ชำระเงิน
                        </div>

                        <div 
                            class="flex flex-row space-x-4">
                                <div>รูปแสกน</div>
                                <div>ข้อมูลฝั่งขวา</div>
                        </div>
                    </form>
                </div>
                </div>
            </div>
        </div>
    );
    }