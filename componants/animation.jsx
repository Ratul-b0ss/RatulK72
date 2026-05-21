import React, { useRef } from 'react';
import { Routes, Route, useLocation } from "react-router";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const Animation = (props) => {

     const stairparent = useRef(null)
      const path = useLocation().pathname
      const aPp = useRef(null)
    
      useGSAP(function () {
    
        const tl = gsap.timeline()
    
        tl.from(stairparent.current,{
          display:'block',
        })

        tl.from('.stair',{
          height:0,
          stagger:{
            amount:-0.5
          }
        })
        
        tl.to(stairparent.current,{
          backgroundColor:'transparent',
        })
        tl.to('.stair',{
          y : "100%",
          stagger:{
            amount:-0.5
          }
        })
        tl.to(stairparent.current,{
          display:'none'
        })
        tl.to('.stair',{
          y:'0%'
        })

       
        gsap.to(aPp.current,{
            opacity:1,
            delay:2

        })
      },{ dependencies: [path], revertOnUpdate: true })

  return (
    <div className=' h-screen '>
        <div ref={stairparent} className='fixed bg-[#111] w-full h-full top-0 flex z-50'>
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
        <div className="stair w-1/5 h-full bg-black"></div>
      </div> 
     <div ref={aPp}>
        {props.children}
     </div>
    </div>
  )
}

export default Animation