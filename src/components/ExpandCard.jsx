import React, { useState } from 'react'
import data from './data.json'

function Expandcard() {

  const [selected, setSelected] = useState(null);

  const expand = (id) => {
    setSelected(prev => (prev == id) ? null : id )
  };
    

  return (
    <div className=' shadow-2xl shadow-[#000000] mx-auto items-center flex flex-col w-fit p-10 rounded-lg bg-[#1d1d1d]'>

      <div className=' bg-[#f2f2f2] w-[40rem] items-center rounded-lg flex flex-col m-4'>
      <div className=' text-4xl font-bold pt-10 text-orange-500'>Expanding cards</div>
      <p className='pb-10'>Click on the questons to see the answers</p>
      </div>
      

      {data.accordion_items.map((items) => (
        <div 
        key={items.id} 
        className=' cursor-pointer text-xl w-[40rem] m-2 text-center text-[#2d2d2d] p-2 flex items-center flex-col font-bold bg-[#1692d0]'
        onClick={ () => expand(items.id)}
        >
          {items.question} <br/>
          {items.id == selected ? (<div className=' text-base font-normal text-white'>{items.answer}</div>) : (<div className=' rotate-90 font-bold text-[#f2f2f2] text-3xl'> &#62; </div>)}
        </div>
      ))}
    </div>
  )
}

export default Expandcard