import { useEffect, useState } from "react";
import Directory from "./Directory";
import { useTranslation } from 'react-i18next';
import VerticalCutReveal from "../Componenets/Animation/vertical-cut-reveal"
import { motion, stagger, useAnimate } from "motion/react"


export default function RessourcePage(){

    const { t,i18n } = useTranslation();


    useEffect(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }, []);

    const [ressources,setRessources]=useState(t('ressources.links', { returnObjects: true }))

    useEffect(() => {
        setRessources(t('ressources.links', { returnObjects: true }));
      }, [i18n.language, t]);  

    return(
        <main className="flex flex-col  px-4 sm:px-0 m-0 m-auto  max-w-sm sm:max-w-lg md:max-w-xl  lg:max-w-3xl mt-10">

            <h1 className="name font-extrabold text-2xl">
            {t('ressources.name')}                                                               
            </h1>

            <div className="description flex my-6">

            <VerticalCutReveal
                splitBy="words"
                staggerDuration={0.025}
                staggerFrom="first"
                wordLevelClassName="text-xl   font-medium  col-span-5"
                transition={{
                type: "spring",
                stiffness: 300, 
                damping: 20,    
                mass: 0.5    ,          
                }}
            >
            {t('ressources.description')}                                                                                                  
            </VerticalCutReveal>
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