import './ShowcaseGrid.css'
export default function ShowcaseGrid({name,type,year,link,tags,logo,isVisitLink,status,description,onShow}){

    function showAccordion(){
        onShow();
    }


    return(
        <section className="show-case">
                <div className="section-accordion">

                    <div className="accordion border-b border-dashed border-border border-gray-400 ">

                        <div onClick={showAccordion} className="accordion-displayed py-3 px-2 hover:bg-gray-100 cursor-pointer flex w-full items-center gap-2">
                            <div className="accordion-logo h-6 w-6 rounded-md"
                                style={{
                                    backgroundImage: `url(${logo})`,
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}
                            >
                            </div>

                            <div className="accordion-name cursor-pointer w-full flex items-center gap-2">
                                <h3 className="text-lg font-semibold">{name}</h3>
                                <label className='text-md cursor-pointer text-gray-600 font-medium'>{type}</label>
                                <h6 className='ml-auto text-md text-gray-600 font-semibold'>{year}</h6>
                            </div>
                        </div>

                        <div className={`accordion-hidden  px-5 ${status ? 'open py-3' : 'closed'}`}>
                            <h4 className='accordion-place text-sm font-semibold cursor-pointer underline'>{link}</h4>
                            <h5 className='accordion-decription text-sm py-1'>{description}</h5>

                            <div className='accordion-tech flex w-full gap-2 text-sm py-3'>

                            {
                                tags.map((item,index)=>(
                                    <label key={index} className='bg-gray-100 cursor-pointer px-2 rounded-sm py-1'>{item}</label>
                                ))
                            }

                                {
                                    isVisitLink && 
                                    <div className='accordion-visit-link ml-auto cursor-pointer'>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24"><path fill="currentColor" fill-rule="evenodd" d="M4.01 13.032c-.17-.29-.3-.53-.39-.71c.09-.18.22-.42.39-.71c.37-.62.94-1.45 1.7-2.28c1.54-1.65 3.86-3.26 7.08-3.26c2.96 0 5.28 1.59 6.9 3.27c.8.83 1.41 1.67 1.82 2.3c.19.28.34.53.44.7c-.09.18-.22.41-.38.69c-.37.62-.94 1.45-1.7 2.28c-1.54 1.65-3.86 3.26-7.08 3.26s-5.54-1.61-7.08-3.26c-.76-.83-1.33-1.66-1.7-2.28m19.47-.41c.09-.21.08-.44-.02-.64v-.02s-.03-.04-.05-.07c-.03-.06-.07-.14-.13-.24c-.12-.2-.29-.49-.51-.83c-.45-.69-1.12-1.6-2-2.52c-1.76-1.82-4.44-3.73-7.98-3.73c-3.78 0-6.46 1.89-8.17 3.74c-.86.92-1.49 1.84-1.9 2.53c-.2.35-.36.64-.46.84c-.05.11-.09.19-.12.25c-.01.03-.02.05-.03.07v.02a.78.78 0 0 0 0 .6v.02c.01.02.02.04.03.07c.03.06.07.14.12.25c.1.2.26.49.46.84c.41.69 1.04 1.61 1.9 2.53c1.71 1.85 4.39 3.74 8.17 3.74s6.46-1.89 8.17-3.74c.86-.92 1.49-1.84 1.9-2.53c.2-.35.36-.64.46-.84c.05-.11.09-.19.12-.25c.01-.03.02-.05.03-.07v-.02zm-9.3-3.34l-.43-.69a1.15 1.15 0 0 0-1.92 0l-.43.69c-.42.66-.99 1.23-1.65 1.65l-.69.43a1.15 1.15 0 0 0 0 1.92l.69.43c.66.42 1.23.99 1.65 1.65l.43.69c.45.69 1.47.69 1.92 0l.43-.69c.42-.66.99-1.23 1.65-1.65l.69-.43c.69-.45.69-1.47 0-1.92l-.69-.43c-.66-.42-1.23-.99-1.65-1.65m-1.52.8l.13-.19l.13.19c.54.85 1.26 1.57 2.11 2.11l.19.13l-.19.13c-.85.54-1.57 1.26-2.11 2.11l-.13.19l-.13-.19a6.85 6.85 0 0 0-2.11-2.11l-.19-.13l.19-.13c.85-.54 1.57-1.26 2.11-2.11" color="currentColor"/></svg>
                                    </div>
                                }
                        
                            </div>

                           
                        </div>
                        

                    </div>

                </div>


        </section>

    )
}