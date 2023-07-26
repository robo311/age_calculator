import React from 'react'

function Result({resultDate}) {
  return (
    <div>
        
          
        <h1 className=' text-[50px] sm:text-[60px]'> <span className=' text-[#854dff]'>{resultDate ? resultDate.year : "--"}</span> years</h1>
        <h1 className=' text-[50px] sm:text-[60px]'><span className=' text-[#854dff]'>{resultDate ? resultDate.month : "--"}</span> months</h1>
        <h1 className=' text-[50px] sm:text-[60px]'><span className=' text-[#854dff]'>{resultDate ? resultDate.day : "--"}</span> days</h1>
    </div>
  )
}

export default Result