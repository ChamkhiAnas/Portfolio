export default function ShowcaseGrid(){
    return(
        <section className="show-case mt-10">
                
                <div className="section-name border-b border-dashed border-border border-gray-400 py-4 flex">
                    <h6 className="uppercase font-medium text-md">Work</h6>
                    <button className="flex cursor-pointer bg-gray-100 rounded-lg px-2 ml-auto justify-center items-center gap-1">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-file-text w-3 h-3 mr-1"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                        <label className="text-xs cursor-pointer">Resume</label>
                    </button>
                </div>


        </section>

    )
}