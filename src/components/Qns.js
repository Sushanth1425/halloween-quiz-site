import React from 'react'
import { useNavigate } from 'react-router-dom';


const routes= [
  {route: '1'},
  {route: '2'},
  {route: '3'},
  {route: '4'},
  {route: '5'},
  {route: '6'},
  {route: '7'},
  {route: '8'},
  {route: '9'},
  {route: '10'},
]

const Qns = () => {

  const navigate= useNavigate();

  function handleClick(route){
    navigate(`/qn/${route}`);
  }

  return (
    <div className='flex flex-wrap justify-between bg-orange-500 text-white'>
      {routes.map((element) => (
        <button key={element.route} className='border border-solid border-blue-800 bg-black p-20 m-10' onClick={()=>handleClick(element.route)}>
          Qn {element.route}
        </button>
      ))}
    </div>
  )
}

export default Qns