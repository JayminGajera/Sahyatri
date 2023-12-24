import React from 'react'
import { useSelector } from 'react-redux'

const Home = () => {
    const isDriver = useSelector((store) => store.user.isDriver);
  return (
    <div className='text-white'>
      {
        isDriver ? "Welcome Driver" : "Welcome Rider"
      }
    </div>
  )
}

export default Home
