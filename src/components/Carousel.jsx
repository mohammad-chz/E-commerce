// Carousel.js
import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const Carousel = ({ slides, className }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    fade: true,
  };

  return (
    <Slider {...settings} className={className}>
      {slides.map((slide, index) => (
        <div key={index} className="relative">
          <div
            className="h-[500px] md:m-0 rounded-lg max-sm:h-[300px] m-0 bg-center bg-cover bg-no-repeat"
            style={{
              backgroundImage: `url(${slide.image})`,
            }}
          ></div>
          <div className={`absolute flex flex-col md:gap-4 ${slide.position} items-center text-white`}>
            <p className="md:text-2xl text-xl font-bold fade-in">{slide.title}</p>
            <p className="max-sm:p-4 animate-bounce fade-in max-sm:text-sm">{slide.description}</p>
            <button className="bg-orange-300 w-38 text-slate-700 font-bold hover:bg-orange-400 outline-none border-none fade-in px-4 py-2 rounded-lg">
              مشاهده محصولات
            </button>
          </div>
        </div>
      ))}
    </Slider>
  );
};

export default Carousel;
