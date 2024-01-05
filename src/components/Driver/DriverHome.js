import React from 'react'
import { useSelector } from 'react-redux';

const DriverHome = () => {
    const loginInfo = useSelector((store) => store.user.loginInfo);
  return (
    <div className='p-5 md:w-1/3 mx-auto'>
       <h1 className='text-xl'>Welcome <span className='text-[#FF8000]'>{loginInfo?.name}</span>, start your driving journery with us</h1>
       <div className='border border-gray-400 rounded-md p-2 mt-4'>
         <p>Start Driving</p>
       </div>
    </div>
  )
}

export default DriverHome
