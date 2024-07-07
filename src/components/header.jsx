// Header.js
import React from 'react';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Carousel from './Carousel';

const Header = () => {
  const slides = [
    {
      image: '../../hero-main.jpg',
      title: 'انواع وسایل دیجیتال با یک کلیک!',
      description: 'انواع گوشی، لپتاپ، ساعت دیجیتال، سیستم های گیمینگ و صدها وسایل دیجیتال در کنار شما',
      position: 'justify-center inset-0'
    },
    {
      image: '../../ecommerce.webp',
      title: 'بهترین قیمت‌ها در بازار',
      description: 'تضمین بهترین قیمت برای تمامی محصولات دیجیتال',
      position: 'md:top-2/4 md:right-4',
    },
    {
      image: '../../shop-hero.jpg',
      title: 'خرید آسان و سریع',
      description: 'تجربه خریدی لذت‌بخش با خدمات ویژه ما',
      position: 'md:top-2/4 md:right-4',
    },
  ];

  return (
    <div className="relative">
      <Carousel slides={slides} className="relative h-[500px] md:m-14 rounded-lg max-md:h-[250px] m-6" />
    </div>
  );
};

export default Header;
