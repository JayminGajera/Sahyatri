import React from 'react'
import sahyatri from "../assets/logo/sahyatri-logo.png";
import { useNavigate } from 'react-router-dom';

const Start = () => {

    const navigate = useNavigate();

  return (
    <div className='flex flex-col h-screen justify-center items-center'>
      <img src={sahyatri} alt='app-logo'/>

      <div onClick={() => navigate("/choice")}>
        <button className='bg-[#FF8000] text-white rounded-full text-xl px-16 py-3'>Get Started</button>
      </div>
    </div>
  )
}

export default Start
