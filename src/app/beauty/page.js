import Banner from "@/component/banner";
import React from "react";

function BeautyPage() {
    const bannerImages = [
        "/banner-3.jpg",
        "/banner-2.jpg",
        "/banner-1.jpg",
        "/banner-4.jpg",
        "/banner-5.jpg",
    ];
    return (
        <div className="ml-8 mr-8 mt-6 pb-4">
            <Banner />
            <h2 className="text-start text-2xl font-bold mb-6">Beauty Products</h2>
            <p className="text-gray-600">This is the beauty page.</p>
        </div>
    );
}

export default BeautyPage;  