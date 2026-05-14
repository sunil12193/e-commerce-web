"use client"
import Banner from "@/component/banner";
import React from "react";
import MainCard from "@/component/mainCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";



function FashionPage() {
    const bannerImages = [
        "/banner-2.jpg",
        "/banner-1.jpg",
        "/banner-3.jpg",
        "/banner-4.jpg",
        "/banner-5.jpg",
    ];

    const fashionProducts = [
        {
            id: 1,
            image: "/mainCard-1.jpg",
            title: "Gespo",
            price: 19.99,
            description: "This is a great product!",
            previousAmmount: 29.99,
            stock: 10
        },
        {
            id: 2,
            image: "/mainCard-2.jpg",
            title: "Gespo",
            price: 33,
            description: "This is a great product!",
            previousAmmount: 39.99,
            stock: 22
        },
        {
            id: 3,
            image: "/mainCard-3.jpg",
            title: "Gespo",
            price: 13.99,
            description: "This is a great product!",
            previousAmmount: 20.99,
            stock: 40
        },
        {
            id: 4,
            image: "/mainCard-4.webp",
            title: "Gespo",
            price: 41.99,
            description: "This is a great product!",
            previousAmmount: 21,
            stock: 4
        },
        {
            id: 5,
            image: "/mainCard-5.jpg",
            title: "Gespo",
            price: 2.99,
            description: "This is a great product!",
            previousAmmount: 5.99,
            stock: 1
        },
    ];

    return (
        <div className="mt-4">
            <Banner />

            {/* MainCard */}
            <h2 className="text-start text-2xl font-bold mb-6 ml-8 mr-8">Fashion Products</h2>
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
                    fashionProducts.map((product) => (
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

export default FashionPage;