import './NotFoundPage.css'

import { NavLink } from "react-router";

export default function NotFoundPage(){
    return(
        <main className="not-found h-[100vh] flex justify-center items-center my-auto flex-col px-4 sm:px-0 max-w-sm sm:max-w-lg md:max-w-xl  lg:max-w-3xl   mt-10 m-0 m-auto">
            <h1 className='text-8xl my-4 font-extrabold text-center'>404</h1>
            <h3 className='text-center py-2 font-bold text-3xl'>Oups ! Nous avons perdu cette page</h3>
            <h5 className='text-center py-2 text-xl font-medium'>La page que vous recherchez a peut-être été supprimée, renommée ou est temporairement indisponible</h5>
            <NavLink to="/">
            <button class="font-normal flex  gap-4 items-center  bg-black  ring-1 ring-gray-300 ring-inset cursor-pointer rounded-md text-sm sm:text-base  outline-none px-8 py-4 my-6">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="white" d="m7.85 13l2.85 2.85q.3.3.288.7t-.288.7q-.3.3-.712.313t-.713-.288L4.7 12.7q-.3-.3-.3-.7t.3-.7l4.575-4.575q.3-.3.713-.287t.712.312q.275.3.288.7t-.288.7L7.85 11H19q.425 0 .713.288T20 12t-.288.713T19 13z"></path></svg>
                <p className='text-lg text-white font-bold'>Revenir en arrière</p>
            </button>
            </NavLink>
        </main>

    )
}