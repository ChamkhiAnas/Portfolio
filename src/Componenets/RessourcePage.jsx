import { useState } from "react";
import Directory from "./Directory";

export default function RessourcePage(){

    const [ressources,setRessources]=useState([
        {
        name:"Puppeteer (Headless Browser Automation)",
        description:"A Node.js library to control Chrome/Chromium for tasks like scraping, testing, and automation.",
        link:"https://pptr.dev/"},

        {name:"Uncut (Free Font Resources)",
        description:"A growing collection of high-quality, free fonts curated for designers and creatives.",
        link:"https://uncut.wtf/"},


        {name:"Fancy Components (UI Component Snippets)",
        description:"A collection of beautifully crafted, ready-to-use React and Tailwind components.",
        link:"https://www.fancycomponents.dev/"},

        {name:"Pulsetic (Website Uptime Monitoring)",
        description:"Free and simple uptime monitoring with beautiful status pages and instant alerts.",
        link:"https://pulsetic.com/"},

        {name:"Umami (Privacy-Friendly Analytics)",
        description:"Simple, open-source web analytics that respect user privacy—no cookies, no tracking nonsense.",
        link:"https://umami.is/"},


        {name:"PDFShift (HTML to PDF API)",
        description:"A powerful and easy-to-use API to convert HTML documents to high-quality PDFs.",
        link:"https://pdfshift.io/"},


        {name:"Mapbox (Customizable Maps & Location APIs)",
        description:"A platform offering powerful tools and APIs to create beautiful, interactive maps.",
        link:"https://www.mapbox.com/"},


        {name:"Leaflet (Lightweight Interactive Maps)",
        description:"A popular open-source JavaScript library for creating mobile-friendly, customizable interactive maps.",
        link:"https://leafletjs.com/"},
        

        {name:"Relume (Automatic Wireframing Tool)",
        description:"A tool that automatically generates wireframes and design components to speed up your web design process.",
        link:"https://www.relume.io/"},


        {name:"Guerrilla Mail (Temporary Disposable Email)",
        description:"A free service providing temporary, disposable email addresses to protect your inbox from spam.",
        link:"https://www.guerrillamail.com/fr"},


        {name:"Mailtrap (Email Testing Sandbox)",
        description:"A safe environment to test, debug, and share emails without sending them to real users.",
        link:"https://mailtrap.io/fr/email-sandbox/"},


        {name:"Milanote (Visual Workspace for Creatives)",
        description:"An easy-to-use tool to organize ideas, projects, and inspiration visually.",
        link:"https://milanote.com/"},

        {name:"Miro (Collaborative Online Whiteboard)",
        description:"A versatile digital whiteboard platform for team collaboration, brainstorming, and project planning in real-time.",
        link:"https://miro.com"},

        {name:"Favicon.io (Favicon Generator)",
        description:"A simple tool to create favicons and app icons from text, images, or emojis in seconds.",
        link:"https://favicon.io/favicon-generator/"},


        {name:"Obsidian (Markdown Note-Taking App)",
        description:"A powerful, local-first knowledge base that helps you organize and link your notes with Markdown.",
        link:"https://obsidian.md/"},

        {name:"PocketBase (Backend as a Service)",
        description:"A lightweight, open-source backend with realtime database, authentication, and file storage .",
        link:"https://pocketbase.io/"},


        {name:"Are.na (Visual Research & Collaboration Platform)",
        description:"A tool to collect, organize, and share ideas visually through blocks and connections —",
        link:"https://www.are.na/"},

        {name:"Sheety (Turn Spreadsheets into APIs)",
        description:"A tool that instantly converts Google Sheets into RESTful APIs for easy integration and automation.",
        link:"https://sheety.co/"},

    ])

    return(
        <main className="flex flex-col max-w-3xl m-0 m-auto mt-10">

            <h1 className="name font-extrabold text-2xl">
            Ressources Hub                                                               
            </h1>

            <div className="grid description grid-cols-5">
                <h4 className="text-xl my-6   font-medium  col-span-5">
                Welcome to my Resources Hub — a carefully curated collection of the tools, apps, guides, and references that I rely on throughout my creative and development process. Whether I’m designing sleek interfaces, coding functional and efficient systems, or simply looking for inspiration, these resources are part of my daily workflow
                </h4>
            </div>



            <div className='mt-4 flex flex-col gap-4'>

            {
                ressources.map((item,index)=>(
                    <Directory key={index} {...item} />
                ))
            }
            </div>






        </main>
    )
}