"use client";
import Link from "next/link";
import React, { useState } from "react";
import Image from "next/image";
import { FaSearch } from "react-icons/fa";
import { IoBagHandleSharp } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { CiShoppingCart } from "react-icons/ci";
import { CiSettings } from "react-icons/ci";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoIosArrowDown } from "react-icons/io";
import { usePathname } from "next/navigation";

function Header() {
    const [active, setActive] = useState("home");
    const pathname = usePathname();
    const menu = [
        { name: "Home", key: "home" },
        { name: "Fashion", key: "fashion" },
        { name: "Electronic", key: "electronic" },
        { name: "Bags", key: "bags" },
        { name: "Footwear", key: "footwear" },
        { name: "Groceries", key: "groceries" },
        { name: "Beauty", key: "beauty" },
        { name: "Wellness", key: "wellness" },
        { name: "Jewellery", key: "jewellery" },
    ];
    return (
        <header >
            <div className=" border-[#eadddd] border-t-[1px] border-b-[1px] py-2 mt-1">
                <div className="ml-8 mr-8 flex justify-between items-center">

                    <div>
                        <p className="cursor-pointer font-[500] text-[14px]">Get Up to 50% Off on Selected Items</p>
                    </div>

                    <div className="flex gap-4">
                        <Link href="#" className="cursor-pointer link-hover text-[14px]">Help Center</Link>
                    </div>
                </div>
            </div>

            <div className=" border-[#eadddd] border-t-[1px] border-b-[1px]">
                <div className=" ml-8 mr-8 flex justify-between items-center">
                    <div>
                        <Link href="/">
                            <Image src="/logo-light.png" alt="logo" width={200} height={200} className="mt-4 mb-4 cursor-pointer" />
                        </Link>
                    </div>

                    <div className="lg:flex hidden justify-center text-center items-center">
                        <input type="text" placeholder="Search for products...." className="border-none bg-gray-200 rounded-l-md py-2 px-4 w-[550px] outline-none focus:outline-none focus:ring-0" />
                        <div className="bg-gray-200 py-2 px-2 rounded-r-md cursor-pointer">
                            <FaSearch className="text-gray-500 text-2xl" />
                        </div>
                    </div>
                    <div className="gap-2 lg:flex hidden justify-center text-center items-center">
                        <button className="bg-gray-200 py-2 px-4 rounded-4xl cursor-pointer bg-color text-[var(--color-text)] font-bold">Login</button>
                        <p>|</p>
                        <button className=" py-2 px-4 rounded-4xl cursor-pointer text-[var(--color-text)] font-bold bg-[#475569] ">Register</button>
                        <button className="">
                            <IoBagHandleSharp className="text-[#475569] text-2xl link-hover cursor-pointer font-bold" />
                        </button>
                        <button className="">
                            <CiHeart className="text-[#475569] text-2xl link-hover cursor-pointer font-bold" />
                        </button>
                        <button className="">
                            <CiShoppingCart className="text-[#475569] text-2xl link-hover cursor-pointer font-bold" />
                        </button>
                        <button className="">
                            <CiSettings className="text-[#475569] text-2xl link-hover cursor-pointer font-bold" />
                        </button>

                    </div>
                </div>
            </div>

            <div className=" ml-8 mr-8 lg:flex hidden justify-between items-center py-2">
                <div className="flex justify-center items-center gap-2 p-2 hover-bg link-hover cursor-pointer rounded-md font-bold">
                    <RxHamburgerMenu className="text-2xl cursor-pointer font-bold" />
                    <h3>SHOP BY CATEGORY</h3>
                    <IoIosArrowDown className="text-lg cursor-pointer font-bold" />
                </div>

                <div className="font-bold flex gap-2">
                    {menu.map((item) => {
                        const href = item.key === "home" ? "/" : `/${item.key}`;

                        const isActive =
                            pathname === href ||
                            (href !== "/" && pathname.startsWith(href));

                        return (
                            <Link
                                key={item.key}
                                href={href}
                                className={`px-3 py-2 rounded transition ${isActive
                                        ? "bg-[var(--color-bg)] text-white"
                                        : "text-gray-700 hover:text-primary"
                                    }`}
                            >
                                {item.name}
                            </Link>
                        );
                    })}
                </div>

                <div className="">
                    <p>Free All India Delivery</p>
                </div>
            </div>
        </header>
    );
}

export default Header;