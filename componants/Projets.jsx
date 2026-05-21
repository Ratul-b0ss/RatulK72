import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/all';
import React, { useState } from 'react'

const Childe = ({image}) => {
  // Each child component tracks its own independent hover state
  const [isHovered, setIsHovered] = useState(false);

  return (
   <div
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className='w-[49%] h-[37vw] prp overflow-hidden relative rounded-none hover:rounded-[2vw] transition-all duration-300 ease-out cursor-pointer'
    >
      <div className='h-full w-full'>
        <img className='w-full h-full object-cover' src={image} alt="Projet" />
      </div>

      <div className={`absolute top-0 w-full h-full flex items-center justify-center bg-black/20 transition-all duration-300 ease-out
            ${isHovered ? 'opacity-100' : 'opacity-0'}
          `}>
        <h1 className='uppercase border-white border-2 rounded-full text-[5vw] leading-none pt-2 px-5'>voir le projet</h1>
      </div>
    </div>
  )
}


const Projets = () => {
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function() {
    gsap.from(".prp",{
      height:"100px",
      stagger:{
        amount:0.2
      },
      scrollTrigger:{
        trigger: ".prd",
        start: 'top 100%',
        end: 'top -150%',
        scrub: true
      }
    })
  })
  return (
    <div className='min-h-screen w-screen bg-white'>
      <div className=' pl-[0.8vw] font-[font-2]  pt-[20.6vw] flex items-start justify-start'><h1 className='uppercase text-[14.5vw] tracking-[0.1vw] '>projets </h1><span className='text-[2.7vw] mt-[3.4vw] -mt-[0.1vw]'>17</span></div>
      <div className='prd w-full h-fit flex flex-wrap gap-2.5 pb-5 font-[font-2] text-white items-start justify-center'>
        <Childe image ={"https://k72.ca/images/caseStudies/PJC/Thumbnails/PJC_SiteK72_Thumbnail_1280x960.jpg?w=1280&h=960&s=b5151821a8c0d9603263d7ec827bee9b"}/>
        <Childe image = {"https://images.unsplash.com/photo-1705946985442-512875aaa310?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <Childe image = {"https://images.unsplash.com/photo-1485846234645-a62644f84728?q=80&w=1459&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <Childe image = {"https://images.unsplash.com/photo-1686560664184-fba0c7fcf85e?q=80&w=1631&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <Childe image = {"https://images.unsplash.com/photo-1743360688825-adb6e9676781?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />
        <Childe image = {"https://images.unsplash.com/photo-1778546978501-58b8908583ef?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"} />

      </div>
    </div>
  )
}

export default Projets