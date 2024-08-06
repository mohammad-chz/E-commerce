import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../context/StoredContext';
const Product = () => {
    const { id } = useParams();
    const { device, itemCount, addItem, removeItem } = useContext(StoreContext);


    const productId = Number(id);
    const product = device[productId - 1];

    if (productId < 1 || productId > device.length) {
        return <h1>صفحه ای یافت نشد</h1>;
    }
    return (
        <div className='flex items-center justify-between p-16'>
            <div>
                <div className='flex items-center justify-between'>
                    <div className='flex flex-col'>
                        <h1 className='font-bold text-3xl'>{product.name}</h1>
                        <h1>{product.about}</h1>
                    </div>
                    <img src={product.image} alt="product" />
                </div>
            </div>
            <div className='flex items-center flex-col gap-2 justify-center bg-orange-100 p-24'>
                <button onClick={() => addItem(id)} className='bg-orange-500 py-2 px-6 rounded-lg cursor-pointer text-white'>افزودن به سبد خرید</button>
                <p>تعداد محصول: <span>{itemCount[id]}</span></p>
            </div>
        </div>
    )
}

export default Product