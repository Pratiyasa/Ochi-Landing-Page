import React,{ useState} from 'react'
import { easeInOut, motion } from 'framer-motion'
import "locomotive-scroll/dist/locomotive-scroll.css";
import { FaLongArrowAltUp } from "react-icons/fa";


const landing = () => {
   const [isHovering,setHovering]=useState(false);
  return (
    <div  className="h-screen w-full bg-zinc-900 pt-1">
      <div  >
        <div className="textstructure mt-40 px-20">
        <div className="marker">
           {["we create","eye-opening","presentations"].map((index,i)=>{
              return (
             <div className="flex w-fit overflow-hidden">
                 {i === 1 && (<motion.div initial={{width:0}} animate={{width:"9vw"}} transition={{ease:[0.76,0,0.24,0] ,duration:1}}  className="h-19 w-28 mt-2 ml-1 bg-red-400 rounded-[3.8px]"></motion.div>)}
                 <h1 key={i} className="uppercase tracking-[-0.7vw] font-[Founders Grotesk] leading-[6.5vw] text-8xl text-white font-semibold">
                  {index}
                 </h1>
             </div>)
           })}
        </div>
      </div>
      </div>
      <div className="border-t-2 border-zinc-700 mt-10 flex justify-between items-center py-5">
            {["Presentation and storytelling agency","For innovation teams and global brands"].map((val,i)=>{
                return <p className="text-sm font-small tracking-tight ml-6 text-white leading-none mt-10 ">{val}</p>
            })}
                <div className="relative start mt-10 flex gap-2 mr-5">
                    <div onMouseEnter={()=>{setHovering(true)}} onMouseLeave={()=>{setHovering(false)}}   className=" border-[2px] w-[190px] h-[45px] border-zinc-600 uppercase rounded-full text-white  overflow-hidden">
                        <motion.div initial={{ translateX : -250 }} animate={isHovering? {translateX:0}:{translateX:-250}} transition={{easeInOut:[0.1, 0.1, 0.1, 1]}} className="w-[250px] h-[100px] bg-amber-50"></motion.div>
                        <motion.p  className="absolute w-full h-full top-2.5 left-6">start the project</motion.p>
                    </div>
                     <div className=" h-10 w-10 px-4 py-2 border-[2px] border-zinc-600 rounded-full flex justify-center items-center-safe text-white font-extrabold">
                       <span className="rotate-[45deg]">
                        <FaLongArrowAltUp/>
                       </span>
                    </div>
               </div>
      </div>
     
    </div>
  )
}

export default landing
