import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const accountType = useSelector((store) => store.user.accountType);
    const userData = useSelector((store) => store.user.userData);
  return (
    <div className='text-white p-5'>
      {
        accountType === "Driver" ? `Welcome ${userData.name}, start your driving journery with us` : `Welcome ${userData.name}, enjoy riding`
      }
    </div>
  )
}

export default Home
