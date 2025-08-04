import './HomePage.css'
import ShowcaseGrid from './ShowcaseGrid';
import ShowcaseTitle from './ShowcaseTitle';
import Directory from './Directory';
import { useTranslation } from 'react-i18next';

import { useEffect, useState } from 'react';

export default function HomePage(){

    const { t,i18n } = useTranslation();

    const [projects,setProjects]=useState(t('home.projects', { returnObjects: true }))
    const [sideProjects,setSideProjects]=useState(t('home.sideProjects', { returnObjects: true }))
    const [directory,setDirectory]=useState(t('home.directory', { returnObjects: true }))

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
        <main className="flex flex-col max-w-3xl m-0 m-auto mt-10">

            <h1 className="name font-extrabold text-2xl">
            {t('home.welcome')} <span className="animate-pulse"></span>                                                               
            </h1>


            <div className="description">

                <ul className='my-4 grid'>

                <li className="text-xl  py-1 font-medium  col-span-5">
                    {t('home.description1')}
                </li>
                <li className="text-xl  py-1  font-medium  col-span-5">
                    {t('home.description2')}
                </li>
                <li className="text-xl  py-1  font-medium  col-span-5">
                    {t('home.description3')}
                </li>


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