import { motion } from 'framer-motion'
import LocomotiveScroll from "locomotive-scroll";
import "locomotive-scroll/dist/locomotive-scroll.css";
import React,{useEffect,useRef} from 'react'

function Marque() {
  
  return (
    <div   className="w-full py-14 bg-[#004D43] rounded-tl-3xl rounded-tr-3xl">
       <div >
        <div className=" text-white border-t-2 border-b-2 pb-1 pr-15 border-zinc-300 flex whitespace-nowrap overflow-hidden justify-between">
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity  ,duration:10}}className="text-[15vw] pr-20 leading-none uppercase font-['Founders_Grotesk_X-Condenser'] font-bold tracking-tighter ">we are ochi</motion.h1>
        <motion.h1 initial={{x:0}} animate={{x:"-100%"}} transition={{ease:"linear" , repeat:Infinity ,duration:10}}className="text-[15vw] leading-none uppercase font-['Founders_Grotesk_X-Condenser'] font-bold tracking-tighter ">we are ochi</motion.h1>
        </div>
      </div>
    </div>
  )
}

export default Marque
