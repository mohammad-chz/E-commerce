import React, { useContext } from 'react'
import { StoreContext } from '../context/StoredContext'
import { device, images } from '../assets/assets';

const Cart = () => {
  const { itemCount, removeItem } = useContext(StoreContext);
  console.log(Object.keys(itemCount))
  return (
    <div className='overflow-hidden'>
      <div className='grid grid-cols-6 items-center justify-center px-14 py-1 mt-10 font-bold text-lg'>
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
                <div className='grid grid-cols-6 items-center justify-center px-14 py-1'>
                  <p>{item.name}</p>
                  <img className='w-24' src={item.image} alt="product" />
                  <p>{new Intl.NumberFormat().format(item.price)} ریال</p>
                  <p>{itemCount[item._id]}</p>
                  <p>{new Intl.NumberFormat().format(totalPrice)} ریال</p>
                  <img onClick={() => removeItem(item._id)} className='w-8 cursor-pointer' src={images.close2} alt="colse icon" />
                </div>
                <hr />
              </React.Fragment>
            );
          }
        })}
      </div>
        :
        <div className='flex h-screen w-screen justify-center items-center'>
            <h1 className='font-bold md:text-2xl text-orange-500'>هیچ محصولی در سبد خرید شما موجود نیست</h1>
            <img className='w-96' src={images.emptyCart} alt="empty Cart" />
        </div>}
    </div>
  )
}
//  === Object.keys(itemCount)
export default Cart