import React, { useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom';


const cards = [
  { id: 1, title: 'What type of music do mummies listen to?', answer: 'wrap', route: '/q1' },
  { id: 2, title: "What has many legs but can't walk?", answer: 'spiderweb', route: '/q2' },
  { id: 3, title: 'Where do baby ghosts go?', answer: 'scarecare', route: '/q3' },
  { id: 4, title: "What's a ghost's favorite exercise?", answer: 'deadlifts', route: '/q4' },
  { id: 5, title: "What's something vampires can't see, but everyone else can?", answer: 'reflection', route: '/q5' },
  { id: 6, title: "What does a witch use in place of a GPS?", answer: 'broom', route: '/q6' },
  { id: 7, title: 'What did the ghost say when it won the talent show?', answer: 'faboolous', route: '/q7' },
  { id: 8, title: "What's a ghost's favorite ride at the amusement park?", answer: 'rollerghoster', route: '/q8' },
  { id: 9, title: 'What do you call a fat pumpkin?', answer: 'plumpkin', route: '/q9' },
  { id: 10, title: 'What do you call two witches living together?', answer: 'broommates', route: '/q10' }
];

const Qn = () => {

  const {id} = useParams();
  const navigate= useNavigate();
  const question = cards.find(card=>card.id===parseInt(id));
  const [answer, setAnswer]= useState('');

  const check = (e) => {
    e.preventDefault(); 
    if (answer.trim().toLowerCase().replace(/\s+/g, '') === question.answer) {
      alert("Right answer!!");
    } else {
      alert("OOPS, YOU LOST :(");
    }
    setTimeout(() => {
      navigate('/'); 
    }, 500);
  };

  return (
    <div className='flex h-screen  bg-orange-500 flex-col items-center justify-center '>
      <p className='text-center font-bold text-4xl m-10'>{question.title}</p>
      <form className='flex flex-col m-10' onSubmit={check} >
        <input className='p-3 px-10 rounded-md'
          type="text" 
          name="answer" 
          placeholder="Type your answer here" 
          required 
          value={answer}
          onChange={(e)=>setAnswer(e.target.value)}
        />
        <button type="submit" className='bg-black text-white m-10 rounded-md p-3 ' >Submit</button>
      </form>
    </div>
  )
}

export default Qn