import React, { useState } from 'react'
import { images } from '../assets/assets'

const handleInvalid = (event) => {
  event.target.setCustomValidity('لطفا این فیلد را پر کنید');
};


const LoginSignUp = ({ setIsShow }) => {
  const [currentState, setCurrentState] = useState("Sign up");
  return (
    <div className='fixed flex items-center justify-center z-30 w-full h-full bg-black bg-opacity-80'>
      <div className='flex flex-col justify-center bg-orange-300 md:py-10 md:px-28 px-8 py-2 rounded-lg'>
        <img onClick={() => setIsShow(false)} src={images.close2} alt="close button" className='w-6 cursor-pointer md:mb-4' />
        <h1 className='font-bold text-center md:mb-4 mb-1 text-lg'>{currentState === "Sign up" ? "ثبت نام" : "ورود"}</h1>
        <form className='flex flex-col items-center justify-center md:gap-5 gap-2'>
          <input className='px-2 md:py-2 py-1 rounded-md outline-none	w-full max-sm:w-3/4 max-sm:text-sm' type="text" placeholder='اسم خود را وارد کنید' required onInvalid={handleInvalid}/>
          {currentState === "Sign up" ?<input className='px-2 md:py-2 py-1 outline-none	w-full max-sm:w-3/4 rounded-md max-sm:text-sm' type="text" placeholder='ایمیل خود را وارد کنید' required onInvalid={handleInvalid}/> : <></>}
          <input className='px-2 md:py-2 py-1 outline-none rounded-md	w-full max-sm:w-3/4 max-sm:text-sm' type="text" placeholder='پسورد خود را وارد کنید' required onInvalid={handleInvalid}/>
          <label className='flex items-center justify-center md:gap-2 maxsm:text-xs max-sm:w-full'>
            شرایط و ضوابط سایت را می پذیرم
            <input type="checkbox" required/>
          </label>
          <button className='bg-orange-700 md:py-2 py-1 w-full rounded-xl hover:opacity-80 transition font-bold max-sm:w-3/5'>{currentState === "Sign up" ? "ثبت نام" : "ورود"}</button>
        </form>
       {currentState === "login" ? <p className='mt-2 max-sm:text-sm'>اگر تابحال ثبت نام نکرده اید <span onClick={() =>{setCurrentState("Sign up")}} className='text-orange-500 cursor-pointer'>اینجا</span> کلید کنید</p>
        : <p className='mt-2 max-sm:text-sm'>اگر قبلا اکانت ساخته اید<span onClick={() =>{setCurrentState("login")}} className='text-orange-500 cursor-pointer'>اینجا</span> کلید کنید</p>
      }
      </div>
    </div>
  )
}

export default LoginSignUp