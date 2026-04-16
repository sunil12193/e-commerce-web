import react from "react";
import Image from "next/image";

function SmallCard({ image, title, }) {
    return (
        <div className="bg-white rounded-lg p-2 flex flex-col shadow-lg justify-between p-4">
            <div className="px-10 h-auto flex items-center justify-center">
                <Image
                    src={image}
                    alt={title}
                    width={80}
                    height={80}
                    className="object-contain h-full w-full"
                />
            </div>
            <h3 className="text-lg font-bold text-center p-2">
                {title}
            </h3>

        </div>
    );
}

export default SmallCard;