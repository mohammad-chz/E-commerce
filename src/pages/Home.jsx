import React, { useState } from 'react'
import Hearder from '../components/header'
import ExploreMenu from '../components/ExploreMenu'
import DeviceDisplay from '../components/DeviceDisplay'

const Home = () => {
  const [category, setCategory] = useState("all")
  return (
    <div className=''>
        <Hearder />
        <ExploreMenu category={category} setCategory={setCategory}/>
        <DeviceDisplay category={category}/>
    </div>
  )
}

export default Home