import { motion } from 'framer-motion'
import React, { useState } from 'react'

function Feature() {
  
  const [isHovering,setHovering]= useState(false);
  const [isHovering1,setHovering1]= useState(false);
  return (
    <div className="w-full py-10">
       <div className="w-full px-20 border-b-[1px] border-zinc-700 pb-10">
        <h1 className="text-[5vw] text-white font-semibold font-['Neue Montreal'] tracking-tight">Featured projects</h1>
       </div>
       <div className="px-15">
         <div className="flex gap-10 px-10 py-10">
             <div onMouseEnter={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)}} className="w-[40vw] h-[73vh] rounded-3xl relative">
                <div className="w-full h-full ">
                      <h1 className="text-[#CDEA68] absolute z-[15] -translate-x-1/4 top-1/2  -translate-y-1/2 text-6xl tracking-tight left-full flex font-bold overflow-hidden">
                     {"FYDE".split("").map((items,index)=>(
                        <motion.span initial={{y:"100%"}} animate={isHovering ? {y:"0"}: {y:"100%"}} transition={{ease: [0.22, 1, 0.36, 1],delay: index * 0.05 }} className="inline-block" >{items}</motion.span>
                     ))}
                      </h1>
                    <motion.img  initial={{ scale: 1 }} animate={isHovering ? { scale: 0.95 }: { scale:1 }} transition={{duration: 0.5, 'easeIn': [0.76, 0, 0.24, 1]  }} className="w-full h-full rounded-3xl bg-cover" src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-1326x1101.png" alt=""></motion.img></div>
            </div>
            <div onMouseEnter={()=>{setHovering1(true)}} onMouseLeave={()=>{setHovering1(false)}}     className="relative w-[40vw] h-[73vh] rounded-3xl ">
                <div className="w-full h-full rounded-3xl">
                     <h1 className="text-[#CDEA68] absolute z-[9] text-6xl tracking-tight right-full translate-x-1/2 top-1/2 -translate-y-1/2 font-bold whitespace-nowrap flex overflow-hidden">
                      {"SOFT START".split("").map((items,index)=>(
                           <motion.span initial={{y:"100%"}} animate={isHovering1 ? {y:"0"}: {y:"100%"}} transition={{ease: [0.22, 1, 0.36, 1],delay: index * 0.05 }} className="inline-block" >{items}</motion.span>
                     ))}
                     </h1>
                    <motion.img initial={{ scale: 1 }} animate={isHovering1 ? { scale: 0.95 }: {scale:1} } transition={{duration: 0.5, 'easeIn': [0.76, 0, 0.24, 1]  }} className="w-full h-full rounded-3xl bg-cover index-[-2]" src="https://ochi.design/wp-content/uploads/2025/08/Med_Website_0.png" alt=""></motion.img></div>
            </div>
         </div>
       </div>
    </div>
  )
}

export default Feature
