import React from 'react'
import { Link } from 'react-router'

const Homebtn = () => {
  return (
    <div className="down mt-10 px-5 flex items-center justify-between gap-5">
            
            <Link 
                to="/projets" 
                className="flex-1 flex justify-center items-center border-[3px] border-white rounded-full text-white uppercase text-[6.4vw] font-[font-2] leading-none pt-3 px-5 hover:text-[#D3FD50] hover:border-[#D3FD50] "
            >
                projets
            </Link>

            <Link 
                to="/agence" 
                className="flex-1 flex justify-center items-center border-[3px] border-white rounded-full text-white uppercase text-[6.4vw] font-[font-2] leading-none pt-3 px-5 hover:text-[#D3FD50] hover:border-[#D3FD50] "
            >
                agence
            </Link>

        </div>
  )
}

export default Homebtn