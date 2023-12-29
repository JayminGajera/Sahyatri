import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const accountType = useSelector((store) => store.user.accountType);
  return (
    <div className='text-white'>
      {
        accountType === "Driver" ? "Welcome Driver" : "Welcome Pessanger"
      }
    </div>
  )
}

export default Home
