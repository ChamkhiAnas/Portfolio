import './HomePage.css'
import InteractiveNoiseBox from "./DotMatrix";
import ShowcaseGrid from './ShowcaseGrid';

export default function HomePage(){
    return(
        <main className="flex flex-col max-w-3xl m-0 m-auto mt-10">

            <h1 className="font-extrabold text-2xl">
            👋 HEY I'M ANAS CHAMKHI<span className="animate-pulse">.</span>                                                               
            </h1>


            <div className="grid description grid-cols-5">
                <h4 className="text-sm my-8   font-normal  col-span-5">
                    A web developer and tech enthusiast, crafting intuitive digital experiences with precision and creativity.
                    turning ideas into fast, functional, and beautiful web products — one line of code at a time , i've been building things for <span className="underline font-semibold ml-2">1,825 days</span>
                </h4>
            </div>





            <div className='rounded-xl' style={{ margin: 0, padding: 0, width: '100%', height: '100', }}>
            <InteractiveNoiseBox></InteractiveNoiseBox>
            </div>


            

            <ShowcaseGrid ></ShowcaseGrid>



        


       





        </main>

    )
}