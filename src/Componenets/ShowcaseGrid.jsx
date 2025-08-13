import './ShowcaseGrid.css'
import { useTranslation } from 'react-i18next';
import ScrambleIn from "../Componenets/Animation/scramble-in"
import { useEffect, useRef } from 'react';

export default function ShowcaseGrid({name,type,year,link,linkName,tags,logo,isVisitLink,status,description,onShow}){

    const { t,i18n } = useTranslation();

    const scrambleRef = useRef(null)

    useEffect(() => {
        const timer = setTimeout(() => {
          scrambleRef.current?.start()
        }, 3000)
    
        return () => clearTimeout(timer)
      }, [])


    function showAccordion(){
        onShow();
    }

    function visitLink(){
        const path = `https://${link}`
        window.open(path, '_blank');    
    }


    return(
        <section className="show-case">
                <div className="section-accordion">

                    <div className="accordion border-b border-dashed border-border border-gray-400 ">

                        <div onClick={showAccordion} className="accordion-displayed py-3 px-2  hover:bg-gray-100 cursor-pointer flex w-full lg:items-center gap-2">
                            <div className="accordion-logo h-6 w-6 mt-2 lg:mt-0 rounded-md"
                                style={{
                                    backgroundImage: `url(${logo})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                            </div>

                            <div className="accordion-name cursor-pointer w-full flex flex-col gap-0 lg:flex-row  lg:items-center lg:gap-2">
                                <h3 className="text-lg font-semibold mb-0">{name}</h3>
                                <ScrambleIn
                                    ref={scrambleRef}
                                    text={type}
                                    scrambleSpeed={15}
                                    scrambledLetterCount={8}
                                    autoStart={false}
                                />

                            </div>

                        </div>

                        <div className={`accordion-hidden  px-5 ${status ? 'open py-3' : 'closed'}`}>
                            <h4 onClick={()=>visitLink()} className='accordion-place text-sm font-semibold cursor-pointer underline'>{linkName}</h4>

                            <h5 className='accordion-description text-sm py-2'>
                                {description.map((line, i) => {
                                if (line.startsWith('- ')) {
                                    return <li className='mx-8' key={i}>{line.substring(2)}</li>;
                                }
                                if (line === '') {
                                    return <br key={i} />;
                                }
                                return <p className='py-2' key={i}>{line}</p>;
                                })}
                            </h5>

                            <div className='accordion-tech  flex flex-wrap w-full gap-2 text-sm py-3'>

                            {
                                tags.map((item,index)=>(
                                    <label key={index} className='bg-gray-100 hover:bg-gray-200 cursor-pointer px-2 rounded-sm py-1'>{item}</label>
                                ))
                            }

                            {
                                    isVisitLink && 
                                    <div onClick={()=>visitLink()} className='accordion-visit-link  cursor-pointer'>
                                        
                                        <label  className='bg-blue-100 flex justify-center items-center hover:bg-blue-200 text-blue-800 cursor-pointer px-3 rounded-sm py-1'>
                                                <span>{t('home.link')}</span>
                                                <svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 16 16" class="h-3 w-3 ml-1" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M6.364 13.5a.5.5 0 0 0 .5.5H13.5a1.5 1.5 0 0 0 1.5-1.5v-10A1.5 1.5 0 0 0 13.5 1h-10A1.5 1.5 0 0 0 2 2.5v6.636a.5.5 0 1 0 1 0V2.5a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v10a.5.5 0 0 1-.5.5H6.864a.5.5 0 0 0-.5.5"></path><path fill-rule="evenodd" d="M11 5.5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793l-8.147 8.146a.5.5 0 0 0 .708.708L10 6.707V10.5a.5.5 0 0 0 1 0z"></path></svg>
                                        </label>

                                    </div>
                            }
                        
                            </div>

                           
                        </div>
                        

                    </div>

                </div>


        </section>

    )
}