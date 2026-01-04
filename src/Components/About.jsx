import React from 'react'
import { FaLongArrowAltUp } from "react-icons/fa";

function About() {
  return (
    <div className="w-full bg-[#CDEA68] py-10 rounded-tl-3xl rounded-tr-3xl">
      <h1 className="text-[4vw] text-zinc-900 py-14 px-9 font-sans-serif  font-['Neue Montreal'] mt-3 leading-[4vw] tracking-tight">We craft category-defining presentations, brand identities, and digital experiences that drive funding, sales, and market leadership.</h1>
      <div className="border-t-[1px] border-[#95a362] mt-5 pt-10 flex gap-5 px-10">
        <div className="w-1/2 ml-8">
           <h1 className="text-[4vw] text-zinc-900 font-sans-serif ">How we can help:</h1>
           <button className="bg-zinc-900 uppercase text-white rounded-full py-3 px-7 flex justify-between gap-5 ">Read More
             <div className="w-2 h-2 rounded-full mt-2.5 bg-zinc-100"></div>
           </button>
         </div>  
         <div className="w-1/2 h-[66vh] bg-[#a8b187] rounded-lg mb-10"></div>
      </div>
    </div>
  )
}

export default About
