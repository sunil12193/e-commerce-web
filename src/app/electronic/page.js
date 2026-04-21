import React from "react";
import MainCard from "@/component/mainCard";
import Banner from "@/component/banner";


function ElectronicPage() {

    const electronicsProducts = [
        {
            id: 1,
            image: "/ele-1.jpg",
            title: "Apple",
            price: 999.99,
            description: "iPhone 15 Pro Max",
            previousAmmount: 1099.99,
            stock: 5
        },
        {
            id: 2,
            image: "/ele-2.jpg",
            title: "Apple",
            price: 799.99,
            description: "iPhone 13 Pro Max",
            previousAmmount: 899.99,
            stock: 8
        },
        {
            id: 3,
            image: "/ele-3.webp",
            title: "Apple",
            price: 499.99,
            description: "Apple iPhone 13 256GB",
            previousAmmount: 599.99,
            stock: 15
        },
        {
            id: 4,
            image: "/ele-4.webp",
            title: "Poco",
            price: 1299.99,
            description: "POCO C61, 4GB RAM, 64GB",
            previousAmmount: 1399.99,
            stock: 5
        },
        {
            id: 5,
            image: "/ele-5.jpg",
            title: "Techno",
            price: 1499.99,
            description: "Tecno POP 8 64 GB, 4 GB",
            previousAmmount: 1599.99,
            stock: 3
        }

    ];
    return (
        <div className="ml-8 mr-8 mt-6 pb-4">
            <Banner />
            <h2 className="text-start text-2xl font-bold mb-6 ml-8 mr-8">Electronic Products</h2>
            <div className="ml-8 mr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
                {
                    electronicsProducts.map((product) => (
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

export default ElectronicPage;