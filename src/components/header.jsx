import React from 'react';

const Header = () => {
  return (
    <div className="relative h-[500px] bg-center bg-cover bg-no-repeat md:m-14 rounded-lg max-sm:h-[300px] m-6"
      style={{ backgroundImage: "url('../../hero.jpg')" }}>
      <div className='absolute inset-0 flex flex-col gap-4 justify-center items-center text-white'>
          <p className='md:text-2xl text-xl font-bold fade-in'>انواع وسایل دیجیتال با یک کلیک!</p>
          <p className='max-sm:p-4 animate-bounce fade-in max-sm:text-sm'>انواع گوشی، لپتاپ، ساعت دیجیتال، سیستم های گیمینگ و صدها وسایل دیجیتال در کنار شما</p>
          <button className='bg-orange-300 w-38 text-slate-700 font-bold hover:bg-orange-400 outline-none border-none fade-in px-4 py-2 rounded-lg'>مشاهده محصولات</button>
      </div>
    </div>
  );
};

export default Header;
