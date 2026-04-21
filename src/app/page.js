"use client";
import Image from "next/image";
import Header from "../component/header";
import Banner from "../component/banner";
import SmallCard from "@/component/smallCard";
import { useState } from "react";
import MainCard from "@/component/mainCard";

export default function Home() {

  const [active, setActive] = useState("fashionProducts");
  const products = [
    {
      image: "/sm-1.png",
      title: "Fashion"
    },
    {
      image: "/sm-2.png",
      title: "Electronics"
    },
    {
      image: "/sm-3.png",
      title: "Bags"
    },
    {
      image: "/sm-4.png",
      title: "Footwear"
    },
    {
      image: "/sm-5.png",
      title: "Groceries"
    },
    {
      image: "/sm-6.png",
      title: "Beauty"
    },
    {
      image: "/sm-7.png",
      title: "Wellness"
    },
    {
      image: "/sm-8.png",
      title: "Jewellery"
    },
  ];

  const popularProductsButtons = [
    { name: "Fashion", key: "fashionProducts" },
    { name: "Electronics", key: "electronicsProducts" },
    { name: "Bags", key: "bagsProducts" },
    { name: "Footwear", key: "footwearProducts" },
    { name: "Groceries", key: "groceriesProducts" },
    { name: "Jewellery", key: "jewelleryProducts" }
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
      image: "/bag-2.webp",
      title: "Adidas",
      price: 39.99,
      description: "Adidas Defender III Duffel Bag",
      previousAmmount: 49.99,
      stock: 20
    },
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

  const filteredProducts = () => {
    switch (active) {
      case "fashionProducts":
        return fashionProducts;
      case "electronicsProducts":
        return electronicsProducts;
      case "bagsProducts":
        return bagsProducts;
      case "footwearProducts":
        return footwearProducts;
      case "groceriesProducts":
        return groceriesProducts;
      case "jewelleryProducts":
        return jewelleryProducts;
      default:
        return fashionProducts;
    }
  };

  const latestProducts = [
    {
      id: 1,
      image: "/jewe-1.webp",
      title: "Gold Necklace",
      price: 199.99,
      description: "RUBANS Brass Gold, Multicolor, Adjustable",
      previousAmmount: 249.99,
      stock: 5
    },
    {
      id: 1,
      image: "/groce-1.webp",
      title: "Lady's Finger",
      price: 0.99,
      description: "Unbranded Lady's Finger ",
      previousAmmount: 1.49,
      stock: 100
    },
    {
      id: 3,
      image: "/footware-1.webp",
      title: "Nike",
      price: 89.99,
      description: "Nike Air Max 270 React",
      previousAmmount: 109.99,
      stock: 10
    },
    {
      id: 4,
      image: "/bag-1.webp",
      title: "Nike",
      price: 49.99,
      description: "Nike Brasilia Training Duffel Bag",
      previousAmmount: 59.99,
      stock: 12
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

  const popularProducts = filteredProducts();


  return (
    <div className="">
      <Banner />
      {/* Small Cards */}
      <div className="grid grid-cols-2 md:grid-cols-5 lg:grid-cols-8 gap-4 ml-8 mr-8">
        {
          products.map((product, index) => (
            <SmallCard
              key={index}
              image={product.image}
              title={product.title}
            />
          ))
        }
      </div>

      <div className="text-center">
        <h2 className="text-2xl font-bold mt-8 mb-2 ">Popular Products</h2>
        <p className="text-gray-500">Don’t miss the current offers until the end of March.</p>
      </div>

      {/* opularProductsButtons */}
      <div className="text-center mt-4 mb-4">
        {
          popularProductsButtons.map((button, index) => (
            <button key={index} onClick={() => setActive(button.key)}
              className={`cursor-pointer text-[16px] px-3 py-2 rounded font-[600] ${active === button.key
                ? "text-[var(--color-primary)]"
                : "text-gray-700 hover:text-primary"
                }`}
            >
              {button.name}
            </button>
          ))
        }
      </div>

      {/* MainCard */}
      <div className="ml-8 mr-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        {
          popularProducts.map((product) => (
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

      <div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 px-8 py-2 pb-8">

          {/* LEFT BIG IMAGE */}
          <div className="relative text-right">
            <img
              src="/slider-1.jpg"
              alt="Banner 1"
              className="w-full h-full object-cover rounded-lg"
            />
            <h5 className="absolute lg:top-45 top-5  lg:text-2xl text-sm right-4 text-[var(--color-primary)] font-bold ">Big Saving Days Sale </h5>
            <h2 className="absolute lg:top-55 top-10 lg:text-3xl text-sm right-4 text-[var(--color-black)] font-bold ">Buy New Women Trend | Black <br />
              Top Cotton Blend Top
            </h2>
            <p className="absolute lg:top-75 top-20 right-4 lg:text-2xl text-sm text-[var(--color-black)]">Starting At Only <span className="font-bold text-[var(--color-primary)]">₹1,500.00</span></p>
          </div>

          {/* RIGHT SIDE */}
          <div className="grid grid-rows-2 gap-4 ">

            <div className="relative">
              <img src="/mobile-img.jpg" className="w-full lg:h-[275px] h-[150px] md:h-[250px] object-cover rounded-lg" />
              <h5 className="absolute lg:top-35 top-10 lg:text-2xl text-sm left-4 text-[var(--color-black)] font-bold ">
                Buy Apple iPhone
              </h5>
              <span className="absolute lg:top-45 top-15 lg:text-2xl text-sm left-4 text-[var(--color-primary)] font-bold ">45000</span>
            </div>

            <div className="relative">

              <img
                src="/shoes.webp"
                alt="Banner 3"
                className="w-full lg:h-[275px] h-[150px] md:h-[250px] object-cover rounded-lg"
              />
              <h5 className="absolute lg:top-10 top-5 lg:text-2xl text-sm right-4 text-[var(--color-black)] font-bold ">
                Buy Nike Shoes
              </h5>
              <span className="absolute lg:top-20 top-10 lg:text-2xl text-sm right-4 text-[var(--color-primary)] font-bold ">3500</span>
            </div>
          </div>

        </div>
      </div>

      <div className="lg:ml-16 hidden lg:mr-16 gap-4 mb-8 border border-[var(--color-primary)] py-8 px-8 bg-white lg:flex justify-between items-center">
        <div className="flex items-left gap-4">
          <Image
            src="/freeshiping-truck.svg"
            alt="Footer Banner"
            width={40}
            height={40}
            className="object-cover rounded-lg"
          />
          <h3 className="text-3xl font-[500] ">Free-Shipping</h3>
        </div>
        <p className="text-gray-600">Free Delivery Now On Your First Order and over 2000</p>
        <p className="text-3xl font-[700]">- Only 2000*</p>
      </div>

      <div className="ml-8 mr-8 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="relative h-[224px] rounded-md shadow-lg">
            <Image
              src="/girl-img.jpg"
              alt="Footer Banner"
              width={300}
              height={200}
              className="object-contain w-full rounded-lg"
            />
            <h4 className="absolute top-10 text-lg font-bold text-right right-4 text-[var(--color-black)]">
              Women<br />
              products with<br />
              low price
            </h4>
            <span className="absolute top-30 text-xl right-4 text-right text-[var(--color-primary)] font-bold ">900</span>
          </div>
          <div className="relative h-[224px] rounded-md shadow-lg">
            <Image
              src="/mobile-img.jpg"
              alt="Footer Banner"
              width={300}
              height={200}
              className="object-contain w-full rounded-lg"
            />
            <h4 className="absolute top-10 text-xl left-4 text-[var(--color-black)] font-bold ">
              Apple iPhone
            </h4>
            <span className="absolute top-17 text-xl left-4 text-[var(--color-primary)] font-bold ">45000</span>
          </div>
          <div className="relative h-[224px] rounded-md shadow-lg">
            <Image
              src="/bag-2.png"
              alt="Footer Banner"
              width={300}
              height={200}
              className="object-contain w-full rounded-lg"
            />
            <h4 className="absolute top-10 text-xl left-4 text-[var(--color-black)] font-bold ">
              Men's bags <br />
              with low price
            </h4>
            <span className="absolute top-25 text-xl left-4 text-[var(--color-primary)] font-bold ">900</span>
          </div>
          <div className="relative h-[224px] rounded-md shadow-lg ">
            <Image
              src="/shoes.webp"
              alt="Footer Banner"
              width={300}
              height={200}
              className="object-cover h-full w-full rounded-lg"
            />
            <h4 className="absolute top-10 text-xl right-4 text-right text-[var(--color-black)] font-bold ">
              Nike Shoes
            </h4>
            <span className="absolute top-17 text-xl right-4 text-right text-[var(--color-primary)] font-bold ">5000</span>
          </div>
        </div>
      </div>

      <div className="ml-8 mr-8 mt-6 pb-4">
        <h2 className="text-start text-2xl font-bold mb-6">Latest Product</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {
            latestProducts.map((product) => (
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

      <div className="ml-8 mr-8 mt-6 pb-4">
        <h2 className="text-start text-2xl font-bold mb-6">Feature Products</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
          {
            fashionProducts.map((product) => (
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

    </div>
  );
}
