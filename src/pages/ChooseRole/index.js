import React from 'react'
import { useState, useEffect } from "react";
import chooserole1 from "../../assets/pics/chooserole1.jpg";
import chooserole2 from "../../assets/pics/chooserole2.jpg";

export default function ChooseRole() {
    return(
        <div class="flex items-center justify-center h-screen font-body">
    
        <div class="bg-white text-white font-bold rounded-xl border shadow-lg p-10">
            <div class="font-bold text-4xl text-primary-100 text-center py-2">
                Who are you?
            </div>
            <div class="flex flex-row items-center justify-center ">
                <div class="h-72 w-72 bg-white-100 border-2 shadow-sm rounded-lg text-center ">
                

                    Student
                </div>
                <div class="h-72 w-72 bg-white-100 border-2 shadow-sm rounded-lg ml-5 text-center">
                    Tutor
                </div>
            </div>
        </div>
        
      </div>
        );
}