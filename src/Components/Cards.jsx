import React from 'react'

function Cards() {
  return (
    <div className="w-full flex gap-5 px-15 h-screen items-center">
      <div className="Cardcontainer h-[60vh] w-1/2">
        <div className="rounded-xl w-full h-full bg-[#004D43] relative">
            <img src="https://ochi.design/wp-content/uploads/2022/04/logo001.svg" alt="" className="absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]" ></img>
             <button className="border-[#CDEA68] border-1 text-[1.2vw] text-[#CDEA68] px-3 py-0.5 rounded-full absolute bottom-3 left-3">2019-2020</button>
        </div>
      </div>
      <div className="h-[60vh] w-1/2 flex items-center gap-5">
        <div className="h-full bg-zinc-800 rounded-xl w-full relative ">
            <img  src="https://ochi.design/wp-content/uploads/2022/04/logo002.svg" alt="" className="h-[10vh] w-[10vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  "></img>
            <button className="border-white border-1 uppercase text-white px-3 py-0.5 text-[1.2vw] rounded-full absolute bottom-3 left-3">Rating 5.0 on Clutch</button>
        </div>
        <div className="h-full bg-zinc-800 rounded-xl w-full relative">
             <img  src="https://ochi.design/wp-content/uploads/2022/04/logo003.png" alt="" className="h-[15vh] w-[10vw] absolute top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]  "></img>
             <button className="border-white border-1 text-white uppercase text-[1.2vw] px-3 py-0.5 rounded-full absolute bottom-3 left-3">business bootcamp</button>
        </div>
      </div>
    </div>
  )
}

export default Cards
