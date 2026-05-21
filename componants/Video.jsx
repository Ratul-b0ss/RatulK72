import React from 'react'

const Video = () => {
  return (

    <div className='w-screen h-screen overflow-hidden absolute inset-0 z-0  bg-green-800 '>
        <video 
            src="https://player.vimeo.com/progressive_redirect/playback/1119600858/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c4a137161d6ce80a52c50c7ee23d4fdf8df103bfc816252fc304e317a43bacc6" 
            loop 
            muted 
            autoPlay 
            playsInline 
            className='w-full h-full object-cover' 
        />
    </div>
  )
}

export default Video