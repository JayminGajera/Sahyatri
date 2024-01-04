import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const loginInfo = useSelector((store) => store.user.loginInfo);
  return (
    <div className='text-white p-5'>
      {
        loginInfo?.accountType === "Driver" ? `Welcome ${loginInfo?.name}, start your driving journery with us` : `Welcome ${loginInfo?.name}, enjoy riding`
      }
    </div>
  )
}

export default Home
