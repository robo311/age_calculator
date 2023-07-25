import React from 'react'

function Inputs({ date, setDate, error }) {
  return (
    
        <section>
            <div className='flex gap-6'>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='input_day' className={`${error ? "text-[#f32a2a]" : "text-[#716f6f]"}`}>DAY</label>
                    <input id='input_day' placeholder='DD' onChange={(e)=> setDate({...date, day:parseInt(e.target.value)})} className={`w-[100px] p-4 border-[#dbdbdb] border-solid border-[1px] rounded-md ${error ? "border-[#f32a2a]" : "border-[#dbdbdb]"}`} type="text" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='input_month' className={`${error ? "text-[#f32a2a]" : "text-[#716f6f]"}`}>MONTH</label>
                    <input id='input_month' placeholder='MM' onChange={(e)=> setDate({...date, month:parseInt(e.target.value)})} className={`w-[100px] p-4 border-[#dbdbdb] border-solid border-[1px] rounded-md ${error ? "border-[#f32a2a]" : "border-[#dbdbdb]"}`} type="text" />
                </div>
                <div className='flex flex-col gap-2'>
                    <label htmlFor='input_year' className={`${error ? "text-[#f32a2a]" : "text-[#716f6f]"}`}>YEAR</label>
                    <input id='input_year' placeholder='YYYY' onChange={(e)=> setDate({...date, year:parseInt(e.target.value)})} className={`w-[100px] p-4 border-[#dbdbdb] border-solid border-[1px] rounded-md ${error ? "border-[#f32a2a]" : "border-[#dbdbdb]"}`} type="text" />
                </div>
            </div>
            
            <div className='mt-2'>
                {error ? <small>Must be a valid date</small> : ""}
            </div>
            
        </section>
    
  )
}

export default Inputs