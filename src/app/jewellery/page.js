"use client"
import Banner from "@/component/banner";
import React, { use } from "react";
import MainCard from "@/component/mainCard";


import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";


function JewelleryPage() {

    const bannerImages = [
        "/banner-1.jpg",
        "/banner-2.jpg",
        "/banner-3.jpg",
        "/banner-4.jpg",
        "/banner-5.jpg",
    ];

    const jewelleryProducts = [
        {
            id: 1,
            image: "/jewe-1.webp",
            title: "Gold Necklace",
            price: 199.99,
            description: "RUBANS Brass Gold, Multicolor, Adjustable",
            previousAmmount: 249.99,
            stock: 5
        },
    ];
    return (
        <div className="ml-8 mr-8 mt-6 pb-4">
            <Banner />

            <h2 className="text-start text-2xl font-bold mb-6 ml-8 mr-8">Jewellery Products</h2>
            <div className="ml-8 mr-8 gap-4 mb-8">
                <Swiper
                    modules={[Navigation]}
                    navigation
                    spaceBetween={10}
                    slidesPerView={1}
                    breakpoints={{
                        0: {
                            slidesPerView: 1,
                        },
                        768: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 5,
                        },
                    }}
                >

                    {
                        jewelleryProducts.map((product) => (
                            <SwiperSlide key={product}>
                                <MainCard
                                    key={product.id}
                                    image={product.image}
                                    title={product.title}
                                    price={product.price}
                                    description={product.description}
                                    previousAmmount={product.previousAmmount}
                                    stock={product.stock}
                                />
                            </SwiperSlide>
                        ))
                    }
                </Swiper>
            </div>
        </div>
    );
}

export default JewelleryPage;