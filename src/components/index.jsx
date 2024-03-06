import React from 'react'
import { useState } from 'react'


function RandomColor() {

    const [color, setColor] = useState ("#000000")
    const [rgbcolor, setRGBColor] = useState ({R:0, G:0, B:0})

    const a = [1,2,3,4,5,6,7,8,9,'a','b','c','d','e','f']

    const changeColor = () => {
        let newColor = "#";
        for (let i = 0; i < 6; i++) {
            const randomIndex = Math.floor(Math.random() * 15)
            newColor = newColor + a[randomIndex]
        }
        setColor(newColor)
        
            let newwColor = newColor.slice(1)

            let R = parseInt(newwColor.substring(0,2),16)
            let G = parseInt(newwColor.substring(2,4),16)
            let B = parseInt(newwColor.substring(4,6),16)

            setRGBColor( {R, G, B} )
            
        }

    const copyHex = () => {
        navigator.clipboard.writeText(color)
        alert("Hex code copied to clipboard!")
    }

    const copyRGB = () => {
        navigator.clipboard.writeText(`R:${rgbcolor.R}, G:${rgbcolor.G}, B:${rgbcolor.B}`)
        alert("RGB code copied to clipboard!")
    }
    
    

  return (

    <div
    style={{ backgroundColor: color }}
    className={`flex items-center h-screen flex-col `} >
        <button 
        onClick={changeColor}
        className=' mt-8 py-2 px-4 border-4 border-[#1b1b1b] bg-[#fff] shadow-lg shadow-[#60ddff] rounded-lg w-fit mb-10 font-bold underline'
        >
        Random Color
        </button>
        <div className=' bg-white px-4 py-2 rounded-lg border-2 border-[#2f2f2f] flex flex-col justify-between items-center text-center'>
        <span className=' font-bold text-xl'>Color codes - </span><br/>
        Hex Code = [{color}] <button className=' text-white border-4 border-[#95bde2] py-1 px-2 rounded-lg w-full underline bg-[#042846]' onClick={copyHex}>COPY</button><br/>
        RGB Code = [R:{rgbcolor.R}, G:{rgbcolor.G}, B:{rgbcolor.B}] <button className=' text-white border-4 border-[#95bde2] py-1 px-2 rounded-lg w-full underline bg-[#042846]' onClick={copyRGB}>COPY</button>
        </div>
        
    </div>
  )
}

export default RandomColor