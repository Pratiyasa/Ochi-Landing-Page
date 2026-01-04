import React, { useEffect, useState } from 'react'
import { FaAngleUp } from 'react-icons/fa';

function Eyes() {
  const [rotate,setRotate]=useState(0);
  useEffect(()=>{
      window.addEventListener("mousemove",(e)=>
      {
        let mouseX=e.clientX;
        let mouseY=e.clientY;

        let deltaX=mouseX - window.innerWidth/2;
        let deltaY=mouseY - window.innerHeight/2;

        var angle=Math.atan2(deltaX,deltaY) * (180/Math.PI);
          setRotate(180-angle);
          console.log(angle);
      })
  })
  return (
    <div className="h-screen w-full overflow-hidden ">
          <div className=" relative h-full w-full bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')] bg-cover bg-center">
                 <div className="w-1/2 flex justify-between absolute top-[24vh] left-[25vw] px-24">
                      <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
                        <div className=" relative w-[10vw] h-[10vw] bg-black rounded-full flex items-center justify-center">
                            <div style={{transform:`rotate(${rotate}deg)`}}className='absolute top-1/2 left-1/2 w-full -translate-x-[50%] -translate-y-[50%]'>
                                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                            </div>
                                  {/* <h1 className='text-white font-semibold'>PLAY</h1> */}
                                  
                        </div>
                      </div>
                       <div className="w-[15vw] h-[15vw] bg-zinc-100 rounded-full flex items-center justify-center">
                          <div className="relative w-[10vw] h-[10vw] bg-black rounded-full flex items-center justify-center">
                                <div style={{transform:`  rotate(${rotate}deg)`}}className='absolute top-1/2 left-1/2 w-full -translate-x-[50%] -translate-y-[50%] '>
                                <div className="w-5 h-5 rounded-full bg-zinc-100"></div>
                            </div>
                                  {/* <h1 className='text-white font-semibold'>PLAY</h1> */}
                                 
                        </div>
                      </div>
                 </div>
        </div>
    </div>
  )
}

export default Eyes
