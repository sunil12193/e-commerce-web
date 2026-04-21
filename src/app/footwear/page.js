import Banner from "@/component/banner";
import React from "react";
import MainCard from "@/component/mainCard";

function FootwearPage() {

    const bannerImages = [
        "/banner-2.jpg",
        "/banner-1.jpg",
        "/banner-3.jpg",
        "/banner-4.jpg",
        "/banner-5.jpg",
    ];

    const footwearProducts = [
        {
            id: 1,
            image: "/footware-1.webp",
            title: "Nike",
            price: 89.99,
            description: "Nike Air Max 270 React",
            previousAmmount: 109.99,
            stock: 10
        },
    ];
    return (
        <div className="ml-8 mr-8 mt-6 pb-4">
            <Banner />

            <h2 className="text-start text-2xl font-bold mb-6 ml-8 mr-8">Footwear Products</h2>
            <div className="ml-8 mr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {
                    footwearProducts.map((product) => (
                        <MainCard
                            key={product.id}
                            image={product.image}
                            title={product.title}
                            price={product.price}
                            description={product.description}
                            previousAmmount={product.previousAmmount}
                            stock={product.stock}
                        />
                    ))
                }
            </div>
        </div>
    );
}

export default FootwearPage;