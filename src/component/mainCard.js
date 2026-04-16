import react from "react";
import Image from "next/image";
import Link from "next/link";
import { GoStarFill } from "react-icons/go";


function MainCard({ image, title, price, description, previousAmmount, stock }) {
    return (
        <div className="bg-white rounded-lg flex flex-col shadow-lg justify-between">
            <div className="flex items-center w-full h-[250px] justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={250}
                    height={250}
                    className="object-cover overflow-hidden h-full w-full rounded-t-lg border-b border-gray-200"
                />
            </div>
            <div className="p-2">

            <div className="p-2">

                <h3 className="text-lg font-bold text-left">
                    {title}
                </h3>
                <p className="text-gray-500 text-left">
                    {description}
                </p>
            </div>
            <div className="flex justify-between p-2 items-center">
                <div>
                    <p className="flex items-center">
                        <GoStarFill className="text-yellow-500" />
                        <GoStarFill className="text-yellow-500" />
                        <GoStarFill className="text-yellow-500" />
                        <GoStarFill className="text-yellow-500" />
                        <GoStarFill className="text-yellow-500" />
                    </p>
                    <p className="line-through text-gray-500">${previousAmmount}</p>
                    <p className="text-gray-500">Stock: <span className="text-[var(--color-primary)] font-bold">{stock}</span></p>

                </div>
                <p className="text-[var(--color-primary)] font-bold">${price}</p>
            </div>
            
            <button className=" text-[var(--color-primary)] py-1 cursor-pointer text-center border font-bold rounded-md w-full hover:text-[var(--color-text)] hover:bg-[var(--color-primary)] hover:border-[var(--color-primary)] transition duration-300 ease-in-out">
                Add to Cart
            </button>
            </div>

        </div>
    );
}

export default MainCard;