import React, { useContext } from 'react'
import { StoreContext } from '../context/StoredContext'

const ExploreMenu = ({ category, setCategory }) => {
    const {menu_category} = useContext(StoreContext)

    return (
        <div className='md:p-14 p-6 text-center'>
            <p className='mb-4 md:font-bold md:text-lg text-orange-600'>دسته بندی کالا مورد نظر خود را انتخاب کنید</p>
            <div className='flex items-center justify-between max-sm:overflow-x-scroll max-sm:py-4 max-sm:px-6 max-sm:gap-12'>
                {menu_category.map((item, index) => {
                    return (
                        <div onClick={() => setCategory(item.category)}
                            key={index} 
                            className={`flex flex-col items-center justify-center hover:scale-110 cursor-pointer transition min-w-16`}>
                            <img className={`w-36 h-36 rounded-full max-sm:w-16 max-sm:h-16 ${category === menu_category[index].category ? 'border-solid border-4 border-orange-600' : ""}`} src={item.menu_list_image} alt="menu search" />
                            <p className='max-sm:text-sm'>{item.menu_list_item}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default ExploreMenu