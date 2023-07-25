import { useState } from 'react'
import Inputs from './components/Inputs'
import Result from './components/Result'
import arrow from './assets/icon-arrow.svg'

function App() {
  
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  })

  const [resultDate, setResultDate] = useState(null)
  const [error, setError] = useState(false)


  const handleResult = () =>{
    const todaysDate = new Date()
    const todaysYear = todaysDate.getFullYear()
    const todaysMonth = todaysDate.getMonth() + 1
    const todaysDay = todaysDate.getDate()

    let result = {
      day: 0,
      month: 0,
      year: 0
    }

    if(date.day !== 0 && date.month !== 0 && date.year !== 0 && date.day < 32 && date.day > 0 && date.month < 13 && date.month > 0 && date.year < todaysYear){
      result = {
        day: todaysDay - date.day,
        month: todaysMonth - date.month,
        year: todaysYear - date.year
      }
      setError(false)
    }else {
      setError(true)
      return ""
    }

    if(result.month < 0){
      result = {
        ...result,
        month: 12 + result.month,
        year: result.year - 1
      }
    }
    if(result.day < 0){
      result = {
        ...result,
        month: result.month - 1,
        day: Math.abs(result.day)
      }
    }
    
    setResultDate(result)
  }




  return (
    <main className=' bg-white flex flex-col p-[20px] rounded-lg'>
      <Inputs error={error} date={date} setDate={setDate}/>
      <div className='mt-[50px] mb-[50px]'>
        <hr className='relative top-[40px]' />
        <button onClick={handleResult} className='hover:bg-[#141414] transition-colors duration-100 ease-in rounded-full bg-[#854dff] p-4 z-10 relative left-[40%]'>
          <img src={arrow} alt="arrow_icon" />
        </button>
      </div>
      <Result resultDate={resultDate}/>
    </main>
  )
}

export default App
