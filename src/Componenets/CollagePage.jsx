import { useEffect, useState } from "react"
import { useTranslation } from "react-i18next"
export default function CollagePage(){

    const [isModalOpen, setIsModalOpen] = useState(false)
    const [modalImageSrc, setModalImageSrc] = useState('')


    useEffect(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const { t,i18n } = useTranslation();

    const openModal = (src) => {
        setModalImageSrc(src)
        setIsModalOpen(true)
      }
    
      const closeModal = () => {
        setIsModalOpen(false)
        setModalImageSrc('')
      }

    const collageImages = [
        '/collage18.gif', '/collage19.gif', '/collage17.gif', '/collage15.gif',
        '/collage6.jpg', '/collage7.jpg', '/collage8.jpg', '/collage9.jpg',
        '/collage10.jpg', '/collage11.jpg', '/collage12.jpg', '/collage13.jpg',
        '/collage14.jpg', '/collage15.jpg', '/collage1.jpg', '/collage2.jpg',
        '/collage3.jpg', '/collage4.jpg', '/collage5.jpg',
    ]


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
        <main className="flex flex-col max-w-3xl m-0 m-auto mt-10">

            <h1 className="name font-extrabold text-2xl">
            {t('collage.name')}                                                           
            </h1>

            <div className="grid description grid-cols-5">
                <h4 className="text-xl my-6   font-medium  col-span-5">
                {t('collage.description')}                                                           
                </h4>
            </div>


            <div className="grid grid-cols-4 gap-4 my-2">
                {collageImages.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    className="cursor-pointer hover:opacity-80 transition-opacity"
                    width={800}
                    height={800}
                    loading="lazy"
                    onClick={() => openModal(src)}
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
    )
}