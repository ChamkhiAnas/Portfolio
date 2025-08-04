import { useEffect, useState } from "react";
import Directory from "./Directory";
import { useTranslation } from 'react-i18next';

export default function RessourcePage(){

    const { t,i18n } = useTranslation();


    const [ressources,setRessources]=useState(t('ressources.links', { returnObjects: true }))

    useEffect(() => {
        setRessources(t('ressources.links', { returnObjects: true }));
      }, [i18n.language, t]);  

    return(
        <main className="flex flex-col max-w-3xl m-0 m-auto mt-10">

            <h1 className="name font-extrabold text-2xl">
            {t('ressources.name')}                                                               
            </h1>

            <div className="grid description grid-cols-5">
                <h4 className="text-xl my-6   font-medium  col-span-5">
                {t('ressources.description')} 
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