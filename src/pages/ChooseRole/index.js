import React from 'react'
import { useState, useEffect } from "react";
import chooserole1 from "../../assets/pics/chooserole1.jpg";
import chooserole2 from "../../assets/pics/chooserole2.jpg";

export default function ChooseRole() {
    return(
        <div class="flex flex-row">
            <div class="w-full h-screen ">
                <img 
                class="w-full h-screen bg-cover opacity-75 hover:bg-primary-80"
                src={chooserole1}>
                    
                </img>
            </div>
            <div class="w-full h-screen ">
            <img class="w-full h-screen bg-cover opacity-75 hover:opacity-100"
                src={chooserole2}>

                </img>
            </div>
            </div>
        );
}