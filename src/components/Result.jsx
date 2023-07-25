import React from 'react'

function Result({resultDate}) {
  return (
    <div>
        <h1 className=' text-[46px]'>{resultDate ? resultDate.year : "--"} years</h1>
        <h1 className=' text-[46px]'>{resultDate ? resultDate.month : "--"} months</h1>
        <h1 className=' text-[46px]'>{resultDate ? resultDate.day : "--"} days</h1>
    </div>
  )
}

export default Result