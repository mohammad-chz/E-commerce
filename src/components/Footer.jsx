import React from 'react'
import { images } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = ({footerRef, navbarRef}) => {

  const scrollToNavbar = () => {
    navbarRef.current.scrollIntoView({ behavior: 'smooth' });
};

  return (
    <div className='flex relative items-center justify-between bg-slate-900 text-white py-5 px-4 md:px-14' id='footer' ref={footerRef}>
        <img src={images.up} onClick={scrollToNavbar} className='absolute left-1/4 top-1/2 w-12 h-12 rounded-full cursor-pointer' />
        <img className='w-16 md:w-36' src={images.logo} alt="Logo" />
        <div className='flex flex-col items-start justify-center gap-4'>
            <p className='hover:text-orange-400 cursor-pointer'>دسترسی سریع</p>
            <p className='hover:text-orange-400 cursor-pointer'>منو</p>
            <p className='hover:text-orange-400 cursor-pointer'>ارتباط با ما</p>
            <p className='hover:text-orange-400 cursor-pointer'>ثبت نام</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
            <p className='font-bold'>شبکه های اجتماعی</p>
            <div className='flex items-center gap-4'>
            <Link><img className='w-8 md:w-12' src={images.instagram} alt="instagram" /></Link>
            <Link><img className='w-8 md:w-12' src={images.telegram} alt="telegram" /></Link>
            <Link><img className='w-8 md:w-12' src={images.youtube} alt="youtube" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer