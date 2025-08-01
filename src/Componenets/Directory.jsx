import './Directory.css'
import { useState } from 'react'
export default function Directory({name,description,link}){

const [isHovering,setIsHovering]=useState(false)

    return(
        <section onMouseEnter={()=>setIsHovering(true)} onMouseLeave={()=>setIsHovering(false)} className="flex directory border cursor-pointer relative border-b border-dotted border-border border-gray-400 rounded-md ">


            <div className={`py-4 px-4`}>
                <h1 className="text-xl font-semibold">{name}</h1>
                <p className="py-1 text-md cursor-pointer text-gray-600 font-medium">{description}</p>
            </div>


            {
                isHovering &&
                <div className="bg-gray-100 transition-all duration-300 ease-out
                opacity-100 transform translate-y-0
                scale-100 cursor-pointer px-8 py-8  ml-auto flex items-center justify-center">
                    <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-5 w-5" height="4em" width="4em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"></path><path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"></path></svg>
                </div>
            }

        </section>
    )
}