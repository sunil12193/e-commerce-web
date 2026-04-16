"use client";
import React from "react";
import Image from "next/image";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { useState, useEffect } from "react";    

function Banner() {
    const Images = [

        "/banner-1.jpg",
        "/banner-2.jpg",
        "/banner-3.jpg",
        "/banner-4.jpg",
        "/banner-5.jpg",
    ]

    const [currentImg , setCurrentImg] = useState(0);

    const prevSlide = () => {
        setCurrentImg(currentImg === 0 ? Images.length -1 : currentImg - 1);
    }

    const nextSlide = () => {
        setCurrentImg(currentImg === Images.length - 1 ? 0 : currentImg + 1);
    }

    return (
        <div className="w-full h-[500px] flex justify-center items-center mt-4 mb-4">
            <div className="h-[450px] px-14 flex justify-center items-center gap-4 relative">
                <button 
                onClick={prevSlide}
                className="p-2 bg-white rounded-full cursor-pointer">
                    <IoIosArrowBack className="text-xl"/>
                </button>

                <Image
                    src={Images[currentImg]}
                    alt="banner"
                    width={700}
                    height={600}
                    className="h-full w-full object-cover transition duration-300s ease-in-out"
                />

                <button
                onClick={nextSlide}
                className="p-2 bg-white rounded-full cursor-pointer">
                    <IoIosArrowForward className="text-xl"/>

                </button>

            </div>
        </div>
    );
}

export default Banner;