import { X } from 'lucide-react';
import React, { useRef, useState } from 'react';
import { Routes, Route, useLocation } from "react-router";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';


const MenuItem = ({ text, nav, image, image2 }) => {
    const [isHovered, setIsHovered] = useState(false);
    const content = (
        <div className='flex items-center  bg-[#D3FD50]'>
            <h2 className='whitespace-nowrap h-full leading-20 pt-5.5 '> {text}</h2>
            <div className='h-[6.5vw] w-[17vw] mx-2 overflow-hidden rounded-full'>
                <img
                    className='w-full h-full object-cover'
                    src={image} /></div>

            <h2 className='whitespace-nowrap h-full leading-20 pt-5.5 '> {text}</h2>
            <div className='h-[6.5vw] w-[17vw] mx-2 overflow-hidden rounded-full'>
                <img
                    className='w-full h-full object-cover'
                    src={image2} /></div>
        </div>

    )
    return (

        <div className='w-full relative border-t-[0.001vw] border-gray-300/50 '>

            <div   onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                className='relative menu-text [transform-style:preserve-3d]  min-w-full border-b-[0.001vw] border-gray-300/50 flex items-center justify-center text-center uppercase text-[8vw] font-[font-2] leading-20 pt-5.5 overflow-hidden cursor-pointer'>
                {/* Inside MenuItem return statement */}
                <div className='nav'>{nav}</div>
                <div
                    style={{
                        height: isHovered ? '100%' : '0',
                        opacity: isHovered ? '1' : '0'
                    }}
                    className='absolute menunav inset-0 w-fit h-0 opacity-0 flex items-center justify-start gap-6 text-black bg-[#D3FD50] transition-all duration-300 ease-in-out '>
                    <div className="flex items-center h-full animate-rolling">
                        {content}
                        {content}
                    </div>
                </div>
            </div>

        </div>

    )
}

const Menubar = ({ value }) => {
    const [isMenuon, setisMenuon] = value;
    const menuBar = useRef(null)
    const miannavs = useRef(null)
    const stairparent = useRef(null)

useGSAP(() => {
    const tl = gsap.timeline();

    if (isMenuon) {
        /* ==========================================
           INTRO ANIMATION (Opening the Menu)
        ========================================== */
        gsap.set(menuBar.current, { display: 'flex' });
        gsap.set(stairparent.current, { zIndex: 50, opacity: 1, pointerEvents: 'auto' });
        gsap.set(".stair", { height: "0%" });
        gsap.set(miannavs.current, { opacity: 0 }); 
        
        // 1. INITIAL BACK-STATE: Tilted back 90 degrees on the X-axis & pushed deep into the screen
        gsap.set(".menu-text", { 
            opacity: 0, 
            rotateX: -90, // Tilted away from the viewer
            z: -150,      // Pushed back in 3D depth
            transformOrigin: "center top", // Hinged at the top to roll forward and down
            scale:1.1
        });

        // Slide the stairs down to fill up the viewport
        tl.to(".stair", {
            height: "100%",
            duration: 0.4,
            stagger: { amount: -0.3 },
            ease: "power4.inOut"
        });

        // Smoothly fade the background screen in
        tl.to(miannavs.current, { 
            opacity: 1, 
            duration: "0.1s" 
        } );

        // Bring up the close button
        tl.fromTo('.closebtn', { x: 150 }, { x: 0, duration: 0.4 }, "-=0.1");

        // 2. BACK-TO-FRONT REVEAL: Tumbling forward to flat view
        tl.to(".menu-text", {
            opacity: 1,
            rotateX: 0,
            z: 0,
            scale:1,
            duration: 0.5,
            stagger: 0.1,
            ease: "back.out(1.4)" // "back.out" adds a premium tiny overshoot bounce at the end of the roll!
        }, "-=0.2");

        // Dissolve the stairs to reveal the layout
        tl.to(stairparent.current, {
            opacity: 0,
            duration: 0.4,
            ease: "power2.out",
            onComplete: () => {
                gsap.set(stairparent.current, { zIndex: 10, pointerEvents: 'none' });
            }
        }, "-=0.6"); 

    } else {
        /* ==========================================
           OUTRO ANIMATION (Closing the Menu)
        ========================================== */
        gsap.set(stairparent.current, { opacity: 1, zIndex: 50 });
        gsap.set(".stair", { height: "100%", top: "auto", bottom: 0 });

        // Tumble them forward and away on close
        tl.to(".menu-text", {
            rotateX: 90, // Rolls down and flat away from sight
            opacity: 0,
            z: -50,
            duration: 0.3,
            stagger: { amount: -0.15 },
            ease: "power2.in"
        });

        tl.to(miannavs.current, {
            opacity: 0,
            duration: 0.3,
            ease: "power2.in"
        }, "-=0.1");
    
        tl.to(".stair", {
            height: "0%",
            top: 0,
            bottom: "auto",
            duration: 0.5,
            stagger: { amount: -0.3 },
            ease: "power4.inOut",
            onComplete: () => {
                gsap.set(menuBar.current, { display: 'none' });
                gsap.set(".stair", { top: 0, bottom: "auto" });
            }
        }, "-=0.2");
    }
}, [isMenuon]);

    return (
        <div ref={menuBar} className={`relative z-50 h-screen w-full bg-transparent ${isMenuon ? 'flex' : 'hidden'}`}>

            {/* STAIRCASE: Raised z-index to 50 so it renders ON TOP of everything during the transition */}
            <div ref={stairparent} className='fixed top-0 left-0 w-full h-screen flex z-50 pointer-events-none'>
                <div className="stair w-1/5 h-full bg-[#111]"></div>
                <div className="stair w-1/5 h-full bg-[#111]"></div>
                <div className="stair w-1/5 h-full bg-[#111]"></div>
                <div className="stair w-1/5 h-full bg-[#111]"></div>
                <div className="stair w-1/5 h-full bg-[#111]"></div>
            </div>

            {/* MAIN BACKGROUND: Lowered z-index slightly to 40 so it stays underneath the staircase animation */}
            <div ref={miannavs} className={`flex justify-start flex-col items-center fixed z-40 h-full w-full bg-black text-white`}>
                <div className='menu-content-layer mb-[1vw] flex items-start justify-between w-full '>
                    <div className='pl-2.5 pt-2.5 min-w-fit'>
                        <div className="logo w-[8.6vw]">
                            <svg className='w-full h-full' xmlns="http://www.w3.org/2000/svg" fill='white' viewBox="0 0 103 44">
                                <path fillRule="evenodd" d="M35.1441047,8.4486911 L58.6905011,8.4486911 L58.6905011,-1.3094819e-14 L35.1441047,-1.3094819e-14 L35.1441047,8.4486911 Z M20.0019577,0.000230366492 L8.83414254,25.3433089 L18.4876971,25.3433089 L29.5733875,0.000230366492 L20.0019577,0.000230366492 Z M72.5255345,0.000691099476 L72.5255345,8.44846073 L94.3991559,8.44846073 L94.3991559,16.8932356 L72.5275991,16.8932356 L72.5275991,19.5237906 L72.5255345,19.5237906 L72.5255345,43.9274346 L102.80937,43.9274346 L102.80937,35.4798953 L80.9357483,35.4798953 L80.9357483,25.3437696 L94.3996147,25.3428482 L94.3996147,16.8953089 L102.80937,16.8953089 L102.80937,0.000691099476 L72.5255345,0.000691099476 Z M-1.30398043e-14,43.9278953 L8.78642762,43.9278953 L8.78642762,0.0057591623 L-1.30398043e-14,0.0057591623 L-1.30398043e-14,43.9278953 Z M58.6849955,8.4486911 L43.1186904,43.9274346 L52.3166592,43.9274346 L67.9877996,8.4486911 L58.6849955,8.4486911 Z M18.4688864,25.3437696 L26.7045278,43.9278953 L36.2761871,43.9278953 L28.1676325,25.3375497 L18.4688864,25.3437696 Z"></path>
                            </svg>
                        </div>
                    </div>

                    <div>
                        <div onClick={() => { setisMenuon(false) }} className="closebtn relative w-30 h-30 pr-3 pt-3 cursor-pointer">
                            <svg className="w-full h-full stroke-white stroke-2" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <line x1="0" y1="0" x2="100" y2="100" />
                                <line x1="0" y1="100" x2="100" y2="0" />
                            </svg>
                        </div>
                    </div>
                </div>

                <div className='w-full relative [perspective:1000px]'>
                    <MenuItem nav="projets" text="Pour tout voir" image="https://images.unsplash.com/photo-1778063368772-45ba0cdbd794?w=500&auto=format&fit=crop&q=60" image2="https://images.unsplash.com/photo-1778593952650-a94ce40be350?w=500&auto=format&fit=crop&q=60" />
                    <MenuItem nav="agence" text="Pour tout savoir" image="https://images.unsplash.com/photo-1778343303023-c6404b185480?w=500&auto=format&fit=crop&q=60" image2="https://images.unsplash.com/photo-1778599726901-22698cf83040?w=500&auto=format&fit=crop&q=60" />
                    <MenuItem nav="contact" text="Pour envoyer un fax" />
                    <MenuItem nav="blogue" text="Lire les articles" image="https://images.unsplash.com/photo-1778513811598-6ac88ef5cdc4?w=500&auto=format&fit=crop&q=60" image2="https://images.unsplash.com/photo-1778491402098-578e49573d2c?w=500&auto=format&fit=crop&q=60" />
                </div>
            </div>
        </div>
    )
}
export default Menubar




