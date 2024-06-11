import React, { useRef } from 'react'
import { images } from '../assets/assets';

const Scroller = () => {
    const categories = [
        { name: "تبلت", image: images.iconCart },
        { name: "گیمینگ", image: images.iconCart },
        { name: "لپتاپ و کامپیوتر", image: images.iconCart },
        { name: "ساعت و بندهوشمند", image: images.iconCart },
        { name: "لوازم جانبی", image: images.iconCart },
        { name: "لوازم خانگی", image: images.iconCart },
        { name: "گوشی موبایل", image: images.iconCart }
    ];

    const scrollerRef = useRef(null);

    const scrollLeft = () => {
        scrollerRef.current.scrollBy({ left: -200, behavior: '' });
    };

    const scrollRight = () => {
        scrollerRef.current.scrollBy({ left: 200, behavior: 'smooth' });
    };
    return (
        <div className="relative">
            <button onClick={scrollLeft} className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                &gt;
            </button>
            <div ref={scrollerRef} className="flex overflow-x-scroll space-x-4 py-4 px-2 gap-36">
                {categories.map((category, index) => (
                    <div key={index} className="flex-none w-32 h-32 rounded-full flex flex-col items-center justify-center border-2 border-red-500">
                        <img src={category.image} alt={category.name} className="w-16 h-16" />
                        <span className="text-center mt-2">{category.name}</span>
                    </div>
                ))}
            </div>
            <button onClick={scrollRight} className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md">
                &lt;
            </button>
        </div>
    );
}

export default Scroller 