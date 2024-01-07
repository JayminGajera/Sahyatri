import React from 'react'
import { useSelector } from 'react-redux';

const PessangerHome = () => {
    const loginInfo = useSelector((store) => store.user.loginInfo);
    const user = useSelector((store) => store.user.user);
  return (
    <div className='p-5 md:w-1/3 mx-auto'>
    <h1 className='text-xl'>Welcome <span className='text-[#FF8000]'>{loginInfo ? loginInfo?.name : user.name}</span>, Enjoy your riding.</h1>
    <div className='border border-gray-400 rounded-md p-2 mt-4'>
      <p>Start Ride Booking</p>
    </div>
 </div>
  )
}

export default PessangerHome
