import React from "react";
import MainCard from "@/component/mainCard";
import Banner from "@/component/banner";


function BagsPage() {


    const bagsProducts = [
        {
            id: 1,
            image: "/bag-1.webp",
            title: "Nike",
            price: 49.99,
            description: "Nike Brasilia Training Duffel Bag",
            previousAmmount: 59.99,
            stock: 12
        },
        {
            id: 2,
            image: "/bag-2.png",
            title: "Adidas",
            price: 39.99,
            description: "Adidas Defender III Duffel Bag",
            previousAmmount: 49.99,
            stock: 20
        },
    ];
    return (
        <div className="ml-8 mr-8 mt-6 pb-4">
            <Banner />
            <h2 className="text-start text-2xl font-bold mb-6 ml-8 mr-8">Bags Products</h2>
            <div className="ml-8 mr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {
                    bagsProducts.map((product) => (
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

export default BagsPage;    