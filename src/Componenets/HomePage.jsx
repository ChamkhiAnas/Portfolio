import './HomePage.css'
import { LayoutGroup, motion } from "motion/react"
import ShowcaseGrid from './ShowcaseGrid';
import ShowcaseTitle from './ShowcaseTitle';
import Directory from './Directory';
import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';

import TextRotate from "../Componenets/Animation/text-rotate"
import VerticalCutReveal from "../Componenets/Animation/vertical-cut-reveal"



export default function HomePage(){

    const { t,i18n } = useTranslation();

    const [projects,setProjects]=useState(t('home.projects', { returnObjects: true }))
    const [sideProjects,setSideProjects]=useState(t('home.sideProjects', { returnObjects: true }))
    const [directory,setDirectory]=useState(t('home.directory', { returnObjects: true }))
    const [salutation,setSalutation]=useState(t('home.salutation', { returnObjects: true }))
    const [showSecond, setShowSecond] = useState(false);
    const [showThird, setShowThird] = useState(false);


    

    console.log("salutation",salutation)

    useEffect(() => {
        setProjects(t('home.projects', { returnObjects: true }));
        setSideProjects(t('home.sideProjects', { returnObjects: true }));
        setDirectory(t('home.directory', { returnObjects: true }));
      }, [i18n.language, t]);  

    function changeStatus(index){
        setProjects(prev =>
            prev.map((item, i) =>
              i === index ? { ...item, status: !item.status } : item
            )
          );
    }


    function changeSideStatus(index){
        setSideProjects(prev=>
            prev.map((item, i) =>
            i === index ? { ...item, status: !item.status } : item
          )
        )
    }

    return(
        <main className="flex flex-col px-4 sm:px-0 max-w-sm sm:max-w-lg md:max-w-xl  lg:max-w-3xl   mt-10 m-0 m-auto">
            <LayoutGroup>
                <motion.p className="name flex gap-2 font-extrabold text-2xl" layout>
                <TextRotate
                    texts={salutation}
                    mainClassName="overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center "
                    staggerFrom={"last"}
                    initial={{ y: "100%" }}
                    animate={{ y: 0 }}
                    exit={{ y: "-120%" }}
                    staggerDuration={0.025}
                    splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1"
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                    rotationInterval={3500}
                />
                <motion.span
                    className="pt-0.5 sm:pt-1 md:pt-2"
                    layout
                    transition={{ type: "spring", damping: 30, stiffness: 400 }}
                >
                    {t('home.welcome')}
                </motion.span>
                </motion.p>
            </LayoutGroup>
                                                    


            <div className="description">

                <ul className='my-4 grid gap-4'>

                <VerticalCutReveal
                    splitBy="words"
                    staggerDuration={0.025}
                    staggerFrom="first"
                    wordLevelClassName="text-xl chapter font-medium"
                    transition={{
                    type: "spring",
                    stiffness: 300, 
                    damping: 20,    
                    mass: 0.5    ,          
                    }}
                    onComplete={() => setShowSecond(true)}
                >
                    {t('home.description1')}
                </VerticalCutReveal>


                <VerticalCutReveal
                    splitBy="words"
                    staggerDuration={0.025}
                    staggerFrom="first"
                    reverse={true}
                    wordLevelClassName="text-xl chapter font-medium"
                    transition={{
                    type: "spring",
                    stiffness: 300, 
                    damping: 20,    
                    mass: 0.5  ,  
                    delay: 0.9,
                    }}
                    onComplete={() => setShowThird(true)}

                >
                    {t('home.description2')}
                </VerticalCutReveal>

                <VerticalCutReveal
                    splitBy="words"
                    staggerDuration={0.025}
                    staggerFrom="first"
                    reverse={false}
                    wordLevelClassName="text-xl chapter font-medium"
                    transition={{
                    type: "spring",
                    stiffness: 300, 
                    damping: 20,    
                    mass: 0.5,
                    delay: 1.8,    
                    }}

                >
                    {t('home.description3')}
                </VerticalCutReveal>

                </ul>
               
                
            </div>





            
            <ShowcaseTitle title={t('home.section1name')} isButton={true}></ShowcaseTitle>


            {projects.map((item, index) => (
            <ShowcaseGrid onShow={()=>changeStatus(index)} key={index} {...item} />
            ))}


            <ShowcaseTitle title={t('home.section2name')} isButton={false}></ShowcaseTitle>


            {sideProjects.map((item, index) => (
            <ShowcaseGrid onShow={()=>changeSideStatus(index)} key={index} {...item} />
            ))}

            
            <ShowcaseTitle title={t('home.section3name')} isButton={false}></ShowcaseTitle>


            <div className='mt-4 mb-10 flex flex-col gap-4'>

            {
                directory.map((item,index)=>(
                    <Directory  key={index} navigationType={"internal"} {...item}></Directory>
                ))
            }
            </div>


        </main>

    )
}