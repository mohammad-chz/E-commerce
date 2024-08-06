import React, { useContext } from 'react'
import { StoreContext } from '../context/StoredContext'
import ShowDevice from './DeviceItem';

const DeviceDisplay = ({category}) => {
    const {device} = useContext(StoreContext);

    return (
        <div>
            <h1 className='text-center font-bold text-orange-600 text-lg'>محصولات</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 items-center justify-between p-6 md:p-12 gap-6'>
                {device.map((item, index) => {
                    if(category === "all" || category === device[index].category){
                        return <ShowDevice key={index} id={item._id} name={item.name} image={item.image} price={item.price} about={item.about}/>
                    }
                })}
            </div>
        </div>
    )
}

export default DeviceDisplay