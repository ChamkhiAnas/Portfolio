export default function CollagePage(){
    return(
        <main className="flex flex-col max-w-3xl m-0 m-auto mt-10">

            <h1 className="name font-extrabold text-2xl">
            Collage <span className="animate-pulse">Artworks</span>                                                               
            </h1>

            <div className="grid description grid-cols-5">
                <h4 className="text-xl my-6   font-medium  col-span-5">
                A selection of my digital and analog collage artworks—where textures, fragments, and contrasts come together to tell visual stories.
                </h4>
            </div>


            <div className="grid grid-cols-4 gap-4 my-6">
                <img src="/collage18.gif"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage19.gif"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage17.gif"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage15.gif"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage6.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage7.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage8.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage9.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage10.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage11.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage12.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage13.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage14.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage15.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage1.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage2.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage3.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage4.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
                <img src="/collage5.jpg"  className="cursor-pointer" width={800} height={800} loading="lazy"></img>
            </div>

        </main>
    )
}