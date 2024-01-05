import React from 'react'
import { useSelector } from 'react-redux'
import DriverHome from './Driver/DriverHome';
import PessangerHome from './Pessanger/PessangerHome';

const Home = () => {
    const loginInfo = useSelector((store) => store.user.loginInfo);
  return (
    <div className='text-white p-5'>
      {
        loginInfo?.accountType === "Driver" ? <DriverHome/> : <PessangerHome/> 
      }
    </div>
  )
}

export default Home
