import React from 'react'
import { images } from '../assets/assets'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <div className='flex items-center justify-between bg-slate-900 text-white py-5 px-14'>
        <img className='w-36' src={images.logo} alt="Logo" />
        <div className='flex flex-col items-start justify-center gap-4'>
            <p className='hover:text-orange-400 cursor-pointer'>دسترسی سریع</p>
            <p className='hover:text-orange-400 cursor-pointer'>منو</p>
            <p className='hover:text-orange-400 cursor-pointer'>ارتباط با ما</p>
            <p className='hover:text-orange-400 cursor-pointer'>ثبت نام</p>
        </div>
        <div className='flex flex-col items-center justify-center gap-4'>
            <p className='font-bold'>شبکه های اجتماعی</p>
            <div className='flex items-center gap-4'>
            <Link><img className='w-12' src={images.instagram} alt="instagram" /></Link>
            <Link><img className='w-12' src={images.telegram} alt="telegram" /></Link>
            <Link><img className='w-12' src={images.youtube} alt="youtube" /></Link>
            </div>
        </div>
    </div>
  )
}

export default Footer