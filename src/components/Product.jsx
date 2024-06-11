import React, { useContext } from 'react'
import { useParams } from 'react-router-dom';
import { StoreContext } from '../context/StoredContext';
const Product = () => {
    const { id } = useParams();
    const { device } = useContext(StoreContext);

    const productId = Number(id);
    const product = device[productId - 1];

    if (productId  < 1 || productId  > device.length) {
        return <h1>صفحه ای یافت نشد</h1>;
    }
    return (
        <div>
            <h1>{product.name}</h1>
        </div>
    )
}

export default Product