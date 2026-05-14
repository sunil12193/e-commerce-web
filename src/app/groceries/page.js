import React from "react";
import MainCard from "@/component/mainCard";
import Banner from "@/component/banner";    

function GroceriesPage() {

    const bannerImages = [
        "/banner-4.jpg",
        "/banner-2.jpg",
        "/banner-1.jpg",
        "/banner-3.jpg",
        "/banner-5.jpg",
    ];

    const groceriesProducts = [
        {
            id: 1,
            image: "/groce-1.webp",
            title: "Lady's Finger",
            price: 0.99,
            description: "Unbranded Lady's Finger ",
            previousAmmount: 1.49,
            stock: 100
        },
    ];
    return (
        <div className="ml-8 mr-8 mt-6 pb-4">
            <Banner />
            <h2 className="text-start text-2xl font-bold mb-6">Groceries Products</h2>
            <div className="ml-8 mr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {
                    groceriesProducts.map((product) => (
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

export default GroceriesPage;