import './HomePage.css'


export default function HomePage(){
    return(
        <main className="flex flex-col max-w-3xl m-0 m-auto mt-10">

            <h1 className="font-extrabold text-4xl">
            HEY I'M ANAS<span className="animate-pulse">.</span>                                                               
            </h1>


            <div className="grid grid-cols-5">
                {/* <div className="grid col-span-1"></div> */}
                <h4 className="text-md my-8  font-normal  col-span-4">
                    A web developer and tech enthusiast, crafting intuitive digital experiences with precision and creativity.
                    turning ideas into fast, functional, and beautiful web products — one line of code at a time , i've been building things for <span className="underline ml-2">1,825 days</span>
                </h4>
            </div>


            {/* <h2 className="text-sm font-semibold mt-10 mb-4">SOME PROJECTS I'VE WORKED ON :</h2>


            <ul className="text-sm list-disc font-normal mx-10"> 
                <li className=""><a className="text-blue-800 underline" href="https://www.cluely.com">cluely.com</a> - making videos</li>
                <li className=""><a className="text-blue-800 underline" href="https://www.cluely.com">cluely.com</a> - investing in chopped founders</li>
                <li className=""><a className="text-blue-800 underline" href="https://www.cluely.com">cluely.com</a> - making videos</li>
                <li className=""><a className="text-blue-800 underline" href="https://www.cluely.com">cluely.com</a> - making videos</li>
            </ul> */}






        </main>

    )
}