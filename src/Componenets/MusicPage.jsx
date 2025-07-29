import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import MusicPlayer from "./MusicPlayer";
export default function MusicPage(){


    const [playlist,setPlaylist] = useState([
        {
          title: "Dalida- Gigi L'amoroso",
          url: "https://youtu.be/DFPjl56Zp4E?si=kQMibhCaQGfKMD21",
          duration:"449",
        },
        {
            title: "Action Bronson - A light in the addict",
            url: "https://www.youtube.com/watch?v=ElltxYt0XbM",
            duration:"356",

        },
        {
            title: "Ahmed Fakroun - Nisyan (1977)",
            url: "https://youtu.be/VOKM7-QQ75A?si=BnYrmJ173VOMy3CR",
            duration:"257",

        }
      ]);

     
      

      const [currentIndex, setCurrentIndex] = useState(0);
      const [currentSong, setCurrentSong] = useState(playlist[currentIndex]);

      const [playing, setPlaying] = useState(false);
      const [mute, setMute] = useState(false);

      const playerRef = useRef(null);

      console.log("currentSong",currentSong) 


      useEffect(() => {
        ;
      }, [currentIndex]);


      const handleSelect = (index) => {
        setCurrentIndex(index);
        setPlaying(true); 
      };


      function onPlayingChange(value){
        setPlaying(value)
      }

      function onMutingChange(value){
        setMute(value)
      }
  
      function onNextTrack(){
        currentIndex<playlist.length-1 && setCurrentIndex(currentIndex+1),setCurrentSong(playlist[currentIndex+1])
        setPlaying(true)
      }

      function onPreviousTrack(){
        currentIndex>0 && setCurrentIndex(currentIndex-1),setCurrentSong(playlist[currentIndex-1])
        setPlaying(true)
      }
  
  

    return(
        <main className="flex flex-col max-w-3xl m-0 m-auto mt-10">

            <h1 className="name font-extrabold text-2xl">
            Moodwaves — The Soundtrack to My Code and art                                                                
            </h1>

            <div className="grid description grid-cols-5">
                <h4 className="text-xl my-6   font-medium  col-span-5">
                Great work is powered by great focus, and for me, that comes from the right soundtrack. This playlist captures the energy, flow, and creativity that drive my development process. Dive into experience the vibes that inspire every line of code and every pixel I design.
                </h4>
            </div>


            {/* <ul style={{ listStyle: "none", padding: 0 }}>
                {playlist.map((item, index) => (
                <li
                    key={index}
                    onClick={() => handleSelect(index)}
                    style={{
                    cursor: "pointer",
                    padding: "8px 12px",
                    backgroundColor: index === currentIndex ? "#ddd" : "transparent",
                    borderRadius: 4,
                    marginBottom: 4,
                    }}
                >
                    {item.title}
                </li>
                ))}
            </ul> */}


            <MusicPlayer  
            currentSong={currentSong} 
            playing={playing}
            onPlayingChange={onPlayingChange}
            onMutingChange={onMutingChange}
            onNextTrack={onNextTrack}
            onPreviousTrack={onPreviousTrack}
            />




            <div
            style={{
            border: "1px solid #ccc",
            borderRadius: 8,
            padding: 12,
            textAlign: "center",
            userSelect: "none",
            }}
            >
          

            <ReactPlayer
                ref={playerRef}
                src={playlist[currentIndex].url}
                playing={playing}
                controls={true}
                muted={mute}
                width="100%"
                height="200px"
                style={{ pointerEvents: "none" }} 
                />
            </div>
          




        






        </main>
    )
}