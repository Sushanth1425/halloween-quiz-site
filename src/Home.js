import React from 'react'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  
  const navigate= useNavigate()
  const handleStart =()=>{
    navigate('/qns');
  }  
  return (
    <div className='flex items-center justify-center h-screen flex-col bg-orange-500'>
      <h1 className='font-bold text-6xl   '>Welcome to Trick Stall</h1>
      <button className='p-3 m-10 bg-black text-white px-7 active:bg-slate-600 hover:bg-slate-800' onClick={handleStart}>
        Start
      </button>
    </div>
    
  )
}

export default Home