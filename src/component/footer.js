import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

function Footer() {
    return (
        <footer className="bg-[#f8f8f8] py-4 mt-4">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 mr-8 ml-8 gap-4 py-8 border-t border-gray-300">
                <div className="">
                    <h2 className=" text-[var(--color-blck)] font-bold text-xl">Contact Us</h2>
                    <p className=" text-gray-600 mt-4">Classyshop - Mega Super Store</p>
                    <p className=" text-gray-600 mt-2">507-Union Trade Centre</p>
                    <p className=" text-gray-600 mt-2">India</p>
                    <div className="flex gap-2 items-center mt-2">
                        <MdEmail className="text-[var(--color-black)]"/>
                        <p>Email:</p>
                    </div>
                    <p className=" text-[var(--color-primary)] ">support@classyshop.site</p>
                    <div className="flex gap-2 mt-2">
                        <FaPhoneAlt className="text-[var(--color-black)]"/>
                        <p>Phone:</p>
                    </div>
                    <p className=" text-[var(--color-primary)]">+91 1234567890</p>
                </div>
                <div className="">
                    <h2 className=" text-[var(--color-blck)] font-bold text-xl">Products</h2>
                    <p className=" text-gray-600 mt-4">Prices Drop</p>
                    <p className=" text-gray-600 mt-2">New Products</p>
                    <p className=" text-gray-600 mt-2">Best Sales</p>
                    <p className=" text-gray-600 mt-2">Support</p>
                    <p className=" text-gray-600 mt-2">Sitemap</p>
                    <p className=" text-gray-600 mt-2">Stores</p>
                </div>
                <div className="">
                    <h2 className=" text-[var(--color-blck)] font-bold text-xl">Our Company</h2>
                    <p className=" text-gray-600 mt-4">Delivery</p>
                    <p className=" text-gray-600 mt-2">Legal Notice</p>
                    <p className=" text-gray-600 mt-2">Terms And Conditions Of Use</p>
                    <p className=" text-gray-600 mt-2">About Us</p>
                    <p className=" text-gray-600 mt-2">Secure Payment</p>
                </div>
                <div className="">
                    <h2 className=" text-[var(--color-blck)] font-bold text-xl">Subscribe To Newsletter</h2>
                    <p className=" text-gray-600 mt-4">Subscribe to our latest newsletter to get news about special discounts.</p>
                    <p className=" text-gray-600 mt-2">Your Email Address</p>
                    <input type="text" placeholder="Enter your email address" className="border-none bg-gray-200 rounded-md py-2 mt-2 px-4 w-full outline-none focus:outline-none focus:ring-0" />
                    <button className="w-full bg-[var(--color-primary)] text-white py-2 px-4 rounded-md mt-2 cursor-pointer">Subscribe</button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;