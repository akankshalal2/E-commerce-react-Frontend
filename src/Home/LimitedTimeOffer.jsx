import React , {useEffect, useState}from 'react'

function LimitedTimeOffer() {
    const [days,setDays] = useState(0)
    const [hours,setHours] = useState(0)
    const [mins,setMinutes] = useState(0)
    const [secs,setSeconds] = useState(0)

    const deadline = "October, 30, 2025"

    const getTime =()=>{
        const time = Date.parse(deadline)-Date.now()
        setDays(Math.floor(time/(1000*60*60*24)))
        setHours(Math.floor((time/(1000*60*60))%24))
        setMinutes(Math.floor(time/(1000*60)%60))
        setSeconds(Math.floor(time/(1000)%60))
    }

    useEffect(() => {
         const interval = setInterval(()=>getTime(deadline),1000)
         return ()=> clearInterval(interval)
    },[])
    
  return (
    <>
    <div className="bg-[#000000] rounded-3xl !max-w-full h-[250px] border-2 px-14 pt-10 mx-10 my-10 text-5xl font-bold inline-flex ">
      <div className="w-1/2">
        <p className="text-6xl text-white font-semibold text-start">
          Time-Limited Offer
        </p>
        <p className="text-lg text-white pt-9 font-thin ">
          Sed felis eget velit aliquet sagittis id consectetur purus. Orci
          sagittis eu volutpat malesuada nunc vel risus odio facilisis mauris
          sit amet massa.{" "}
        </p>
      </div>
      <div className="text-white w-1/2 px-11 py-7">
        <div className="grid grid-cols-4 gap-2 text-center">
          <div className=" inline-flex gap-4 items-center justify-center">
            <div className='bg-[#313131] rounded-2xl w-9/12'>
            <h1 className="text-5xl py-2 ">{days < 10 ? "0" + days : days}</h1>
            <div className='w-full h-[1px] bg-gray-600'></div>
            <span className="block text-lg font-semibold text-[#5f5f5f] py-2">Days</span>
            </div>
              <span className='font-bold'>:</span>
          </div>
          <div className=" inline-flex gap-4 items-center justify-center">
            <div className="bg-[#313131] rounded-2xl w-9/12">
            <h1 className="text-5xl py-2">{hours < 10 ? "0" + hours : hours}</h1>
             <div className='w-full h-[1px] bg-gray-600'></div>
            <span className="block text-lg text-[#5f5f5f] font-semibold py-2">Hrs</span>
          </div>
              <span className='font-bold'>:</span>
          </div>
          <div className=" inline-flex gap-4 items-center justify-center">
            <div className="bg-[#313131] rounded-2xl w-9/12">
            <h1 className="text-5xl py-2">{mins < 10 ? "0" + mins : mins}</h1>
             <div className='w-full h-[1px] bg-gray-600'></div>
            <span className="block text-lg text-[#5f5f5f] font-semibold py-2">Mins</span>
          </div>
          <span className='font-bold'>:</span>
            
          </div>
         <div className=" inline-flex gap-4 items-center justify-center">
           <div className="bg-[#313131] rounded-2xl w-9/12">
            <h1 className="text-5xl py-2">{secs < 10 ? "0" + secs : secs}</h1>
             <div className='w-full h-[1px] bg-gray-600'></div>
            <span className="block text-lg text-[#5f5f5f] font-semibold py-2">Secs</span>
          </div>
          <span className='text-transparent'>:</span>
         </div>
        </div>
      </div>
    </div>
    </>
  );
}

export default LimitedTimeOffer
