import React from 'react'
import { useState } from 'react'


function RandomColor() {

    const [color, setColor] = useState ("black")

    const a = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

    const changeColor = () => {
        let newColor = "#";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * 15)
            newColor = newColor + a[randomIndex]
        }
        setColor(newColor)
    }

  return (

    <div
    style={{ backgroundColor: color }}
    className={`flex items-center h-screen flex-col `} >
        <button 
        onClick={changeColor}
        className=' mt-8 py-2 px-4 border-4 border-[#1b1b1b] bg-[#fff] shadow-lg shadow-[#60ddff] rounded-lg w-fit'
        >
        Random Color
        </button>
        {console.log(color)}
        
    </div>
  )
}

export default RandomColor