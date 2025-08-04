import { useEffect, useRef, useState } from "react";
import ReactPlayer from "react-player";
import MusicPlayer from "./MusicPlayer";
import { useTranslation } from "react-i18next";
export default function MusicPage(){


  const {t,i18n}=useTranslation()


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

        },
        {
          title: " Carolina Carol Bela ",
          url: "https://youtu.be/qKkQB-fYKU4?si=Tkn4jhy-anuBUbf-",
          duration:"188",
        },
        {
          title: "O Descobridor Dos Sete Mares",
          url: "https://www.youtube.com/watch?v=PAUlCK8kuGU",
          duration:"265",
        },
        {
          title: "Форум - Давайте созвонимся",
          url: "https://youtu.be/zqzPngeY5sw?si=hHmJCOi4h8Tsslqd",
          duration:"185",
        },
        {
          title: "Talfan Ayash",
          url: "https://youtu.be/6RN9rbOhC-A?si=kwYu6b7irc6h3iG8",
          duration:"344",
        },
        {
          title: " Thee Sacred Souls (Will I See You Again?)",
          url: "https://youtu.be/IGgb10A_2c8?si=D0qAVJJEooM0gITy",
          duration:"240",
        },
        {
          title: "The Latins - Habibi twist",
          url: "https://youtu.be/F1nn0Uczs1s?si=Bi3OEoD3c_kX74Wc",
          duration:"188",
        },
        {
          title: "Assa'ada'llahou Massa'akom",
          url: "https://youtu.be/jxefMoZpMjM?si=le25x4vgtGr4J0eA",
          duration:"264",
        },
        {
          title: "Gil Scott Heron - We almost Lost Detroit",
          url: "https://youtu.be/cpNUqNe0U5g?si=tHJ1JCYlOL3C3I4s",
          duration:"316",
        },
        {
          title:"Jazzayer",
          url:"https://youtu.be/nwaj03adp_c?si=CMCbvaL6hYbPDeTN",
          duration:"290",
        },
        {
          title:"La Perfecta - La divinité",
          url:"https://youtu.be/lc8N91AquAM?si=m-7MMpPyqHcyEClp",
          duration:"418",
        },
        {
          title:"Slimane Azem & Nourredine Meziane",
          url:"https://youtu.be/iE-88XDwJ2g?si=uxfujjjNBQZP0MNK",
          duration:"311",
        },
        {
          title:"N. Sokolov - Safari",
          url:"https://youtu.be/mDbL7YhN5cY?si=UEAAGqupYsTvoOVq",
          duration:"158",
        },
        {
          title:"La Perfecta - Chimin an ",
          url:"https://youtu.be/JDsABr5RKnw?si=3HSSGTiHyBJY6J9R",
          duration:"436",
        },
        {
          title:"Dance of Maria ",
          url:"https://youtu.be/iGbrtvn-JDo?si=OXXljdyRke4w2Gq4",
          duration:"167",
        },
        {
          title:"Fadoul 1970 - Sid Redad",
          url:"https://youtu.be/oeiKUcKNqOU?si=pcb1PgXiCUwNVxAh",
          duration:"182",
        },
        {
          title:"Bénabar - Politiquement correct",
          url:"https://youtu.be/X_I5YrBaUfw?si=QPjFuhT6_yqkwd08",
          duration:"186",
        },
        {
          title:"Кино - Кончится лето",
          url:"https://youtu.be/AfS8JESqq2o?si=pgKJ_BWZp7fdP_Rr",
          duration:"350",
        },
        {
          title:"Alsarah & The Nubatones - Soukura",
          url:"https://youtu.be/0KFBKcl4CD0?si=GdjvDF0xpLN9plAA",
          duration:"224",
        },
        {
          title:"Mo'Kalamity - Evolution",
          url:"https://youtu.be/XJ-IpdLeJeU?si=8Qzs1NDW9cBw5Q56",
          duration:"331",
        },
        {
          title:"Un verre chez nous (Monodose)",
          url:"https://youtu.be/nA2yafMcyDE?si=nSxEGdMid4aozjPA",
          duration:"236",
        },
        {
          title:"General suleiman * zeid and the Wings",
          url:"https://youtu.be/MHv8J4rpBpc?si=BIu33BLpX5qixSfd",
          duration:"190",
        },
        {
          title:"C'est un probleme ",
          url:"https://youtu.be/YYEmLVvflTI?si=XK3VjMUY99DyKxQX",
          duration:"205",
        },
      ]);

     
      

      const [currentIndex, setCurrentIndex] = useState(0);
      const currentSong = playlist[currentIndex];
      const [playing, setPlaying] = useState(false);
      const [mute, setMute] = useState(false);

      const playerRef = useRef(null);



      function onPlayingChange(value){
        setPlaying(value)
      }

      function onMutingChange(value){
        setMute(value)
      }


      function formatTime(seconds) {
        const mins = Math.floor(seconds / 60);
        const secs = Math.floor(seconds % 60);
        return `${mins}:${secs < 10 ? '0' : ''}${secs}`;
      }

      function onChangeTime(value){
        playerRef.current.api.seekTo(value,"seconds")
      }

      function handleEnded(){
        onNextTrack()
      }
  
      function onNextTrack(){
        console.log("here is here onNextTrack",currentIndex)
        currentIndex<playlist.length-1 && (() => {
          setCurrentIndex(currentIndex + 1);
        })()
        setPlaying(true)
      }

      function onPreviousTrack(){
        currentIndex>0 &&  (() => {
          setCurrentIndex(currentIndex-1);
        })()
        setPlaying(true)
      }

      function chooseSong(index){
        setCurrentIndex(index);
        setPlaying(true)

      }
  
  

    return(
        <main className="flex flex-col max-w-3xl m-0 m-auto mt-10">

            <h1 className="name font-extrabold text-2xl">
            {t('radio.name')}                                                           
                                                             
            </h1>

            <div className="grid description grid-cols-5">
                <h4 className="text-xl my-6   font-medium  col-span-5">
                {t('radio.description')}                                                           
                </h4>
            </div>


     


            <MusicPlayer  
            currentSong={currentSong} 
            playing={playing}
            onPlayingChange={onPlayingChange}
            onMutingChange={onMutingChange}
            onNextTrack={onNextTrack}
            onPreviousTrack={onPreviousTrack}
            onChangeTime={onChangeTime}
            />




          

            <section className="music-playlist mt-4">

              <div className=" w-full   items-center gap-2    border border-gray-700 rounded-sm">
              {
                playlist.map((item,index)=>(
                  <div key={index} onClick={()=>chooseSong(index)} className={`track ${index === currentIndex ? 'bg-gray-600 text-white' : index % 2 === 1 ? 'bg-gray-200' : 'bg-gray-50'} cursor-pointer px-8 py-3 flex items-center  gap-2 w-full`}>
                    <h5 className="text-sm"><span className="mr-2">{index+1}.</span>   {item.title} </h5>
                    <h6 className="text-sm ml-auto">  {formatTime(item.duration)}  </h6>
                  </div>

                ))
              }
              </div>

            </section>


            <div
            style={{
            }}
            >
            <ReactPlayer
                ref={playerRef}
                src={playlist[currentIndex].url}
                playing={playing}
                controls={true} 
                muted={mute}
                onEnded={handleEnded}
                width="0px"
                height="0px"
                style={{ pointerEvents: "none", display:"none" }} 
                />
            </div>

          




        






        </main>
    )
}