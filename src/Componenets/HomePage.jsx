import './HomePage.css'
import InteractiveNoiseBox from "./DotMatrix";
import ShowcaseGrid from './ShowcaseGrid';
import ShowcaseTitle from './ShowcaseTitle';
import Directory from './Directory';

import { useState } from 'react';

export default function HomePage(){

    const [projects,setProjects]=useState([
        {name:"Smartzone",type:"Real estate search platform",year:"2025",
        link:"smartzone.immo",
        tags:["Go","Next.js","LiveKit","Python"],
        logo:"/smartzone.svg",
        isVisitLink:true,
        status:false,
        description:"Productizing real-time multimodal intelligence. Launched https://www.cartesia.ai/ink-whisper"},

        {name:"Smartzone",type:"Real estate search platform",year:"2025",
        link:"smartzone.immo",
        tags:["Go","Next.js","LiveKit","Python"],
        logo:"/smartzone.svg",
        isVisitLink:true,
        status:false,
        description:"Productizing real-time multimodal intelligence. Launched https://www.cartesia.ai/ink-whisper"},

    ])


    const [sideProjects,setSideProjects]=useState([

        {name:"Smartzone",type:"Real estate search platform",year:"2025",
        link:"smartzone.immo",
        tags:["Go","Next.js","LiveKit","Python"],
        logo:"/smartzone.svg",
        isVisitLink:true,
        status:false,
        description:"Productizing real-time multimodal intelligence. Launched https://www.cartesia.ai/ink-whisper"},

        {name:"Smartzone",type:"Real estate search platform",year:"2025",
        link:"smartzone.immo",
        tags:["Go","Next.js","LiveKit","Python"],
        logo:"/smartzone.svg",
        isVisitLink:true,
        status:false,
        description:"Productizing real-time multimodal intelligence. Launched https://www.cartesia.ai/ink-whisper"},

        {name:"Smartzone",type:"Real estate search platform",year:"2025",
        link:"smartzone.immo",
        tags:["Go","Next.js","LiveKit","Python"],
        logo:"/smartzone.svg",
        isVisitLink:true,
        status:false,
        description:"Productizing real-time multimodal intelligence. Launched https://www.cartesia.ai/ink-whisper"},

        {name:"Smartzone",type:"Real estate search platform",year:"2025",
        link:"smartzone.immo",
        tags:["Go","Next.js","LiveKit","Python"],
        logo:"/smartzone.svg",
        isVisitLink:true,
        status:false,
        description:"Productizing real-time multimodal intelligence. Launched https://www.cartesia.ai/ink-whisper"},





    ])


    function changeStatus(index){
        setProjects(prev =>
            prev.map((item, i) =>
              i === index ? { ...item, status: !item.status } : item
            )
          );
    }


    function changeSideStatus(index){
        setSideProjects(prev=>
            prev.map((item, i) =>
            i === index ? { ...item, status: !item.status } : item
          )
        )
    }

    return(
        <main className="flex flex-col max-w-3xl m-0 m-auto mt-10">

            <h1 className="name font-extrabold text-2xl">
            👋 HEY I'M ANAS <span className="animate-pulse">CHAMKHI.</span>                                                               
            </h1>


            <div className="grid description grid-cols-5">
                <h4 className="text-xl my-6   font-medium  col-span-5">
                    A web developer and tech enthusiast, crafting intuitive digital experiences with precision and creativity.
                    turning ideas into fast, functional, and beautiful web products — one line of code at a time , i've been building things for <span className="underline font-semibold ml-2">1,825 days</span>
                </h4>
            </div>





            <div className='rounded-xl' style={{ margin: 0, padding: 0, width: '100%', height: '100', }}>
            <InteractiveNoiseBox></InteractiveNoiseBox>
            </div>


            
            <ShowcaseTitle title={"PROJECTS"} isButton={true}></ShowcaseTitle>


            {projects.map((item, index) => (
            <ShowcaseGrid onShow={()=>changeStatus(index)} key={index} {...item} />
            ))}


            <ShowcaseTitle title={"Side projects"} isButton={false}></ShowcaseTitle>


            {sideProjects.map((item, index) => (
            <ShowcaseGrid onShow={()=>changeSideStatus(index)} key={index} {...item} />
            ))}

            
            <ShowcaseTitle title={"Directory"} isButton={false}></ShowcaseTitle>


            <div className='mt-10 flex flex-col gap-4'>
                <Directory name={"Collage Artworks"} description={"When I'm not coding, I'm cutting and layering. code is my craft, but art is my escape. View my collage works"} link={""}></Directory>
                <Directory name={"Resources"} description={"A handpicked list of tools and guides that fuel my creative and coding workflow"} link={""}></Directory>
                <Directory name={"Moodwaves"} description={"Music fuels my flow—here's what’s playing in my ears when I’m building cool stuff"} link={""}></Directory>
            </div>


        </main>

    )
}