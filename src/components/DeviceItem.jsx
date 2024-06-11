import React, { useContext, useState } from 'react'
import { images } from '../assets/assets'
import { StoreContext } from '../context/StoredContext'
import { Link } from 'react-router-dom'

const ShowDevice = ({ id, name, image, price }) => {

  const { itemCount, addItem, removeItem } = useContext(StoreContext)

  const formattedPrice = new Intl.NumberFormat().format(price);

  return (
      <div className='flex flex-col items-center justify-center md:h-80 shadow-item gap-2 p-5 rounded-lg hover:scale-110 transition cursor-pointer fade-in'>
        <div className='relative'>
          <Link to={`/product/${id}`}><img className='w-52' src={image} alt="product" /></Link>
          <div className='bg-gray-200 hover:bg-gray-300 transition p-1 rounded-lg flex items-center absolute bottom-0 right-0'>
            <div className='bg-green-500 p-1 rounded-full cursor-pointer' onClick={() => addItem(id)}>
              <img className='w-6' src={images.add} alt="add Icon" />
            </div>
            {itemCount[id] > 0 && (
              <>
                <p className='mx-2'>{itemCount[id]}</p>
                <div className='bg-red-500 p-1 rounded-full cursor-pointer' onClick={() => removeItem(id)}>
                  <img className='w-6' src={images.remove} alt="remove Icon" />
                </div>
              </>
            )}
          </div>
        </div>
        <p>{name}</p>
        <p className='text-orange-500 font-bold'>{formattedPrice} ریال</p>
      </div>
  )
}

export default ShowDevice
