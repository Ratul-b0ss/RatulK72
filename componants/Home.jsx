import React from 'react'
import Homebtn from './Homebtn'

const Home = () => {
  return (
    <div className='flex flex-col justify-between items-center  h-full  pb-2 relative z-10 text-white bg-transparent'>
       
        <div className="up flex pt-4 justify-center items-start">
            <div className="herotxt font-[font-1] text-center">
                <div className="herotxt1 text-[9.5vw] uppercase leading-[7.1vw] ">L'étincelle</div>
                <div className="herotxt2 text-[9.5vw] uppercase leading-[7.1vw] flex items-center">qui
                   <div className='w-[16vw] h-[7.5vw] overflow-hidden rounded-full bg-zinc-200 flex justify-center items-center mb-6'>
                        <video 
                            src="https://player.vimeo.com/progressive_redirect/playback/1119600858/rendition/1080p/file.mp4?loc=external&log_user=0&signature=c4a137161d6ce80a52c50c7ee23d4fdf8df103bfc816252fc304e317a43bacc6" 
                            className='w-full h-full object-cover' 
                            muted 
                            loop 
                            autoPlay 
                            playsInline
                        />
                    </div> génère</div>
                <div className="herotxt3 text-[9.5vw] uppercase leading-[8.5vw] ">la créativité</div>
            </div>
        </div>

     <Homebtn/>
    </div>
  )
}

export default Home