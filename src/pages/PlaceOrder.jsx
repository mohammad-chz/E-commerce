import React, { useContext } from 'react'
import { StoreContext } from '../context/StoredContext';

const PlaceOrder = () => {
  const { getTotalPrice } = useContext(StoreContext);
  return (
    <div className='flex flex-col md:flex-row items-center justify-between p-6 md:p-14'>
      <div className='flex flex-col md:px-10 basis-3/4'>
        <h1 className='text-center mb-3 font-bold text-lg text-orange-700'>اطلاعات تحویل گیرنده</h1>
        <form className='flex flex-col gap-6'>
          <div className='flex items-center justify-between gap-3'>
            <input className='bg-orange-400 w-1/2 py-2 px-4 rounded-md outline-none placeholder-slate-300' type="text" placeholder='نام' />
            <input className='bg-orange-400  w-1/2 py-2 px-4 rounded-md outline-none placeholder-slate-300' type="text" placeholder='نام خانوادگی' />
          </div>
          <input className='bg-orange-400 py-2 px-4 rounded-md outline-none placeholder-slate-300' type="text" placeholder='کد پستی' />
          <input className='bg-orange-400 py-2 px-4 rounded-md outline-none placeholder-slate-300' type='email' placeholder="ایمیل" />
          <input className='bg-orange-400 py-2 px-4 rounded-md outline-none placeholder-slate-300' type="text" placeholder='آدرس' />
          <div className='flex items-center justify-between gap-3'>
            <input className='bg-orange-400 w-1/2 py-2 px-4 rounded-md outline-none placeholder-slate-300' type="text" placeholder='تلفن همراه' />
            <input className='bg-orange-400 w-1/2 py-2 px-4 rounded-md outline-none placeholder-slate-300' type="text" placeholder='تلفن ثابت' />
          </div>
        </form>
      </div>
        <div className='flex basis-1/4 flex-col md:min-w-64 md:flex-row max-md:gap-4 items-center justify-between p-5 md:py-10 font-bold'>
          <div className='flex flex-col items-center gap-5 bg-orange-500 p-5 rounded text-white'>
            <div className='flex items-center gap-5'>
              <p>قیمت محصولات</p>
              <p>{new Intl.NumberFormat().format(getTotalPrice())} ریال</p>
            </div>
            <div className='flex items-center gap-5'>
              <p>قیمت ارسال</p>
              <p>180،000 ریال</p>
            </div>
            <div className='flex items-center gap-5'>
              <p>جمع کل</p>
              <p>{new Intl.NumberFormat().format(getTotalPrice() + 180000)} ریال</p>
            </div>
            <button onClick={() => navigate('/placeOrder')} className='bg-orange-800 py-1 px-8 rounded-md cursor-pointer'>پرداخت</button>
          </div>
      </div>
    </div>
  )
}

export default PlaceOrder