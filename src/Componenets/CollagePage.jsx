import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
import VerticalCutReveal from "../Componenets/Animation/vertical-cut-reveal"
import Floating, { FloatingElement } from "../Componenets/Animation/parallax-floating";
import { motion, stagger, useAnimate } from "motion/react"


export default function CollagePage(){

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalImageSrc, setModalImageSrc] = useState('')


  
    const { t,i18n } = useTranslation();

    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);


    const openModal = (src) => {
        setModalImageSrc(src)
        setIsModalOpen(true)
      }
    
      const closeModal = () => {
        setIsModalOpen(false)
        setModalImageSrc('')
      }
      const collageItems = [
        { src: '/collage18.gif', depth: -0.5, top: "0%", right: "1%",left:"unset" },
        { src: '/collage19.gif', depth: -1, top: "0%", left: "1%",right:"unset" },
        { src: '/collage17.gif', depth: 0.5, top: "0%", right: "1%",left:"unset" },
        { src: '/collage15.gif',  depth: 1, top: "0%", left: "1%",right:"unset"  },
        { src: '/collage6.jpg', depth: -2, top: "0%", right: "1%",left:"unset" },
        { src: '/collage7.jpg', depth: -0.2, top: "0%", left: "1%",right:"unset"  },
        { src: '/collage8.jpg', depth: -1, top: "0%", right: "1%",left:"unset"  },
        { src: '/collage9.jpg', depth: 2.2, top: "0%", left: "1%",right:"unset" },
        { src: '/collage10.jpg', depth: 0.9, top: "0%", right: "1%",left:"unset"   },
        { src: '/collage11.jpg', depth: 1.2, top: "0%", left: "1%",right:"unset" },
        { src: '/collage12.jpg', depth: 0.4, top: "0%", right: "1%",left:"unset" },
        { src: '/collage13.jpg', depth: -1.2, top: "0%", left: "1%",right:"unset"},
        { src: '/collage14.jpg', depth: 1, top: "0%", right: "1%",left:"unset"  },
        { src: '/collage15.jpg', depth: 1.2, top: "0%", left: "1%",right:"unset"},
        { src: '/collage1.jpg', depth: 1, top: "0%", right: "1%",left:"unset"  },
        { src: '/collage2.jpg', depth:-1, top: "0%", left: "1%",right:"unset" },
        { src: '/collage3.jpg', depth: 3, top: "0%", right: "1%",left:"unset"  },
        { src: '/collage4.jpg', depth: 1, top: "0%", left: "1%",right:"unset"},
      ];
      
    

    useEffect(() => {
        if (isModalOpen) {
          document.body.style.overflow = "hidden"
        } else {
          document.body.style.overflow = ""
        }
    
        return () => {
          document.body.style.overflow = ""
        }
      }, [isModalOpen])

    return(

      <>
        <main className="flex flex-col z-10 relative px-4 sm:px-0 m-0 m-auto  max-w-sm sm:max-w-lg md:max-w-xl  lg:max-w-3xl mt-10">

            <h1 className="name font-extrabold text-2xl">
            {t('collage.name')}                                                           
            </h1>

            <div className=" description flex my-6">
                <VerticalCutReveal
                    splitBy="words"
                    staggerDuration={0.025}
                    staggerFrom="first"
                    wordLevelClassName="text-xl    font-medium  col-span-5"
                    transition={{
                    type: "spring",
                    stiffness: 300, 
                    damping: 20,    
                    mass: 0.5    ,          
                    }}
                >
                  {t('collage.description')}                                                           
                </VerticalCutReveal>
            </div>


          <div className="grid grid-cols-4 lg:hidden gap-4 my-2">

                {collageItems.map((item, index) => (
                <img
                    key={index}
                    src={item.src}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    width={800}
                    height={800}
                    loading="lazy"
                    onClick={() => openModal(item.src)}
                />
                ))}
            </div> 






            {isModalOpen && (
                <div
                className="fixed inset-0 bg-black bg-opacity-20 flex justify-center items-center z-50"
                onClick={closeModal}
                >
                <img
                    src={modalImageSrc}
                    className="max-w-xl max-h-[90vh] object-contain rounded-lg shadow-lg"
                    onClick={(e) => e.stopPropagation()}
                />
                <button
                    className="absolute top-4 cursor-pointer right-4 text-white text-3xl font-bold hover:text-red-400"
                    onClick={closeModal}
                >
                    ×
                </button>
                </div>
            )}

        </main>

        <div className="hidden max-w-ld lg:block -z-10 sm:max-w-xl md:max-w-2xl  lg:max-w-4xl m-0 m-auto">

        <Floating sensitivity={-3} easingFactor={0.05} className="flex gap-4 flex-wrap">
              {collageItems.map((item, index) => (
                <FloatingElement
                  key={index}
                  depth={item.depth}
                  className=""
                  style={{
                    top: item.top,
                    left: item.left,
                    right: item.right,

                  }}
                >
                  <motion.img
                    initial={{ opacity: 1 }}
                    src={item.src}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    width={400}
                    height={400}
                    loading="lazy"
                    onClick={() => openModal(item.src)}
                  />
                </FloatingElement>
              ))}
            </Floating>

            </div>


        </>
    )
}