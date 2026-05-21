import { useGSAP } from '@gsap/react'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import React, { useRef } from 'react'

const Agence = () => {

  const imageArr = [
     "https://images.unsplash.com/photo-1778409445285-2c63c0c2ecca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
     "https://images.unsplash.com/photo-1778409445285-2c63c0c2ecca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8",
     "https://images.unsplash.com/photo-1777446039915-96505c45ca99?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw5fHx8ZW58MHx8fHx8",
     "https://images.unsplash.com/photo-1777574236439-1389363e67c5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwxM3x8fGVufDB8fHx8fA%3D%3D",
     "https://images.unsplash.com/photo-1777903676132-a4a739224be5?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D",
     "https://images.unsplash.com/photo-1778431193240-72e7d9c4cd38?q=80&w=927&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
     "https://images.unsplash.com/photo-1778063368822-40ca850c69d8?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwzOHx8fGVufDB8fHx8fA%3D%3D",
     "https://images.unsplash.com/photo-1777907158635-8f703d2844e1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw0N3x8fGVufDB8fHx8fA%3D%3D"
  ];

  const imageref = useRef(null)
  const imagediv = useRef(null)
  gsap.registerPlugin(ScrollTrigger)

  useGSAP(function () {

    gsap.to(imagediv.current, {
      scrollTrigger: {
        trigger: imagediv.current,
        // markers: true,
        start: 'top 28%',
        end: 'top -130%',
        pin: true,
        pinSpacing: true,
        pinReparent: true,
        pinType: 'transform',
        scrub: 1, // smooth scrubbing with 1s easing
        anticipatePin: 1,
        invalidateOnRefresh: true,
        onUpdate: (elem) => {
          let imageIndex;
          if (elem.progress < 1) {
            imageIndex = Math.floor(elem.progress * imageArr.length)
          } else {
            imageIndex = imageArr.length - 1
          }
          imageref.current.src = imageArr[imageIndex]
        }
      }
    })
  })

  return (
    <div className=" min-h-screen bg-white">
      <div className='relative w-full section1 h-full relative overflow-x-hidden'>

        <div ref={imagediv} className="absolute z-0 top-43 left-[30.5%] imgbox w-[14.5vw] h-[19.5vw] rounded-[1.4vw] mt-1 overflow-hidden ">
          <img ref={imageref} src="https://images.unsplash.com/photo-1778409445285-2c63c0c2ecca?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHw1fHx8ZW58MHx8fHx8"
            className='w-full h-full object-cover ' />
        </div>

        <div className=" relative z-10 text-center ">
          <div>
            <div className=' mt-[27.8vw] relative '>
              <h1 className=' text-[20vw] leading-[17.3vw] uppercase font-[font-2] text-black'>Soixan7e <br />
                Douze</h1>
            </div>

            <div className='w-3/5  ml-[40.6vw] text-start pr-[1.1vw]'>
              <p className='font-[font-2]  text-[4vw] leading-[4vw] text-start text-black  '>
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Notre curiosité &nbsp;nourrit notre créativité. On &nbsp;reste humbles et on dit non aux gros egos, même le vôtre. Une marque est vivante. Elle a des valeurs, une personnalité, une histoire. Si on oublie ça, on peut faire de bons chiffres à court terme, mais on la tue à long terme. C’est pour ça qu’on s’engage à donner de la perspective, pour bâtir des marques influentes.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="section2 h-screen ">

      </div>
    </div>    
  )
}

export default Agence