import React, { useState } from 'react'
import {FaStar} from 'react-icons/fa'

function StarRating({noOfStars}) {
    
    const [rating, setRating] = useState(0);
    const [hover, setHover] = useState(0);

    const handelClick = (getCurrentIndex) => {
        setRating(getCurrentIndex)
    }

    const handelMouseEnter = (getCurrentIndex) => {
        setHover(getCurrentIndex)
    }

    const handelMouseLeave = () => {
        setHover(rating)
    }

    const isHovered = (index) => {
       
            return index <= (rating || hover)
    
    }
    
  return (
    <div className=' flex'>
        {
            [...Array(noOfStars = 5)].map((_ , index) => {

                index = index + 1

                return   <FaStar
                    className={` ${ isHovered(index) ? "text-[#ff5a28]" : "text-black" }`}
                    key={index}
                    onClick= {() => handelClick(index)}
                    onMouseMove= {() => handelMouseEnter(index)}
                    onMouseLeave= {() => handelMouseLeave()}
                    size={80}
                />
            })
        }
      
    </div>
  )
}

export default StarRating