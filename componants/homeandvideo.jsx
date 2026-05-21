import React from 'react'
import Video from './Video'
import Home from './Home'
const Homeandvideo = () => {
  return (
   // 'relative' creates a stacking context for absolute children
    <div className='relative w-screen h-screen overflow-hidden'>
      
      
        <Video />
      

        <Home />
    

    </div>
  )
}

export default Homeandvideo