import {DiscordLogo, Envelope, GithubLogo} from '@phosphor-icons/react'
import { Outlet } from 'react-router'
import { Header } from './components/header'
export function AppLayout() {


   const resize = window.innerWidth > 768
    return (
        <div className={`min-h-[fit-content] w-screen grid-cols-[1fr] bg-[#282C33] lg:grid-cols-[14vw_1fr] grid  `}>


         <div className={`w-full flex items-start pl-4 ${resize ? '' : 'sr-only'} `}>
            <div className="h-[50vh] flex flex-col items-center fixed">
               <p className=" bg-[#ABB2BF] h-[33vh] w-[1.5px]"></p>

               <nav className='mt-2 flex items-center flex-col'>
                <DiscordLogo  size={30} className='text-[#ABB2BF] hover:text-white cursor-pointer hover:animate-pulse'/>
                <GithubLogo  size={30} className='text-[#ABB2BF] hover:text-white cursor-pointer hover:animate-pulse' />
                <Envelope size={32} className='text-[#ABB2BF] hover:text-white cursor-pointer hover:animate-pulse'/>
               

               </nav>
            </div>


         </div>

         <div className='w-full pr-3 lg:w-[80%] '>
         <Header/>

            <Outlet/>
         </div>
        

        </div>
    )
}