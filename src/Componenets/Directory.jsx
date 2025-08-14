import './Directory.css'
import { useEffect, useRef, useState } from 'react'
import { useNavigate,useLocation } from "react-router";
import { motion } from "motion/react"
import ScrambleHover from "../Componenets/Animation/scramble-hover"
import ScrambleIn from "../Componenets/Animation/scramble-in"




export default function Directory({name,description,link,navigationType}){

    const [isHovering,setIsHovering]=useState(false)
    let navigate = useNavigate();

    const scrambleRef = useRef(null)
    const { pathname } = useLocation();

    useEffect(() => {
        const delay = pathname === "/" ? 3000 : pathname === "/ressources" ? 1400 : 0;
        const timer = setTimeout(() => {
        scrambleRef.current?.start()
        }, delay)

        return () => clearTimeout(timer)
    }, [pathname])



    function Navigate(){
        navigationType=="internal" ? navigate(link) : window.open(link, '_blank');   
    }

    return(
        <section className="flex directory border cursor-pointer relative border-b border-dotted border-border border-gray-400 rounded-md ">


            <div   className={`py-4 px-4`}>
                {/* <h1 className="text-xl font-semibold">{name}</h1> */}
                <motion.div
                initial={{ opacity: 1, y: 0 }} 
                whileHover={{
                    opacity: 1,
                }}
                transition={{
                    duration: 0.3,
                    ease: "circInOut",
                    delay: 0.08,
                    times: [0, 0.2, 1],
                }}
                >
                <ScrambleHover
                    text={name}
                    scrambleSpeed={30}
                    maxIterations={10}
                    useOriginalCharsOnly={false}
                    className="cursor-pointer text-xl font-semibold"
                />
                </motion.div>

                <ScrambleIn
                ref={scrambleRef}
                text={description}
                scrambleSpeed={8}
                scrambledLetterCount={8}
                autoStart={false}
                />

              
                {/* <p className="py-1 text-md cursor-pointer text-gray-600 font-medium">{description}</p> */}
            </div>


            {
                <div onClick={()=>Navigate()} className="bg-gray-100 transition-all duration-300 ease-out
                opacity-100 transform translate-y-0
                scale-100 cursor-pointer px-8 py-8  ml-auto flex items-center justify-center">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-5 w-5" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"></path><path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"></path></svg>
                </div>
            }

        </section>
    )
}