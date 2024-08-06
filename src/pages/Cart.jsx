import React, { useContext } from 'react'
import { StoreContext } from '../context/StoredContext'
import { device, images } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const { itemCount, removeItem, getTotalPrice } = useContext(StoreContext);
  const navigate = useNavigate();

  return (
    <div className='overflow-hidden'>
      <div className='grid grid-col-cart md:grid-cols-6 items-center justify-center md:px-14 px-4 py-1 mt-10 font-bold text-sm md:text-lg'>
        <p>محصول</p>
        <p>عکس</p>
        <p>قیمت</p>
        <p>تعداد</p>
        <p>جمع کل</p>
        <p>حذف</p>
      </div>
      {Object.keys(itemCount).some(key => itemCount[key] > 0) ? <div className='grid grid-cols-1 items-center justify-center'>
        {device.map((item, index) => {
          if (itemCount[item._id] > 0) {
            const totalPrice = item.price * itemCount[item._id];

            return (
              <React.Fragment key={index}>
                <div className='grid grid-col-cart md:grid-cols-6 items-center justify-center text-sm px-4 md:px-14 py-1'>
                  <p className='max-sm:text-xs'>{item.name}</p>
                  <img className='w-8 md:w-24' src={item.image} alt="product" />
                  <p className='text-xs'>{new Intl.NumberFormat().format(item.price)} ریال</p>
                  <p className='max-sm:pr-2'>{itemCount[item._id]}</p>
                  <p className='text-xs'>{new Intl.NumberFormat().format(totalPrice)} ریال</p>
                  <img onClick={() => removeItem(item._id)} className='w-8 cursor-pointer max-sm:pr-3' src={images.close2} alt="colse icon" />
                </div>
                <hr />
              </React.Fragment>
            );
          }
        })}
      </div>
        :
        <div className='flex flex-col sm:flex-row h-screen w-screen justify-center items-center'>
            <h1 className='font-bold md:text-2xl text-orange-500'>هیچ محصولی در سبد خرید شما موجود نیست</h1>
            <img className='w-96' src={images.emptyCart} alt="empty Cart" />
        </div>}

        <div className='flex flex-col md:flex-row max-md:gap-4 items-center justify-between  bg-orange-200 p-5 md:py-5 md:px-16 font-bold'>
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
            <div>
                <form className='flex'>
                <input className='bg-orange-800 px-4 py-1 text-white outline-none rounded' type="text" placeholder='وارد کرد کد تخفیف'/>
                <button className='bg-orange-500 text-white px-4 py-1 rounded'>تایید </button>
                </form>
            </div>
        </div>
    </div>
  )
}
//  === Object.keys(itemCount)
export default Cart