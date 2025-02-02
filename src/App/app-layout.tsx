import {DiscordLogo, Envelope, FigmaLogo, GithubLogo} from '@phosphor-icons/react'
import { Outlet } from 'react-router'
import { Header } from './components/header'

import LogoSvg from '../assets/logo.svg'
import { useEffect, useRef, useState } from 'react'
import { Nav } from './components/nav'
import { ArrowDownOrUp } from '@/pages/Home/components/from-end-or-start-page'
// import {  useHandleSwitchPageComMousedon } from '@/hooks/use-switch-page-com-Mouse-down'
export function AppLayout() {


   const resize = window.innerWidth > 768

   const [isVisible, setIsVisible] = useState(false)

   const footerElement = useRef<HTMLDivElement | null>(null)


   // const {direction} = useHandleSwitchPageComMousedon()


   
   
    useEffect(() => {
       
      const observer = new IntersectionObserver(
         ([entry]) => {
            if(entry.isIntersecting) {
               setIsVisible(true)
            } else {
               setIsVisible(false)
            }
         },
         {
            threshold: 0.1
         }
      )
      if(footerElement.current) {
         observer.observe(footerElement.current)
      }

      return () => observer.disconnect()
    },[])
    return (
      
        <div className={`min-h-[100vh] w-screen grid-cols-[1fr] bg-[#282C33] lg:grid-cols-[17vw_1fr] grid`}>
              <ArrowDownOrUp visible={isVisible}/>
          

         <div className={`w-full flex items-start pl-4 ${resize ? '' : 'sr-only'} `}>
            <div className="h-[50vh] flex flex-col items-center fixed">
               <p className=" bg-[#ABB2BF] h-[33vh] w-[1.5px]"></p>

               <nav className='mt-2 flex items-center flex-col'>
                <DiscordLogo  size={30} className='text-[#ABB2BF] hover:text-white cursor-pointer hover:transition hover:scale-125'/>
                <GithubLogo  size={30} className='text-[#ABB2BF] hover:text-white cursor-pointer hover:transition hover:scale-125' />
                <Envelope size={32} className='text-[#ABB2BF] hover:text-white cursor-pointer hover:transition hover:scale-125'/>
               

               </nav>
            </div>


         </div>

         <div className='w-full pr-3 lg:w-[80%] flex flex-col '>
         <Header/>

            <div className='h-[fit-content] pb-10'>
            <Outlet/>
            </div>

           
         </div>
        
         <footer className={`border-t-[1px] border-t-[#ABB2BF] border-muted  py-5 flex-col w-[100vw]  lg:flex-row lg:px-[13vw] px-3 min-h-[40vh] relative
                lg:min-h-[10vh] flex lg:justify-between items-center ${isVisible ? 'animate-SlideInFadeInRight': 'opacity-0'} `} ref={footerElement}>
               
               <div>
                  <header className='flex flex-col lg:flex-rows items-center gap-2'>
                     <img src={LogoSvg} alt="" />
                     <p className='text-muted'>Robson_ribeiro07</p>

                     <p className='text-muted-foreground'>robsonrodriguez.007@gmail.com</p>
                  </header>

                  <p className='text-[#ABB2BF] mt-3 font-mono'>web design and fron-end developer</p>
                  
               </div>

               <div className='mr-10 flex-col items-center mt-[2rem]'>
                  <header className='text-muted text-2xl' >
                     Media
                  </header>
                  
                  <div className='flex text-muted-foreground text-2xl mt-3 cursor-pointer'>
                     <GithubLogo className='hover:text-muted hover:scale-150 transition'/>
                     <FigmaLogo className='hover:text-muted hover:scale-150 transition'/>
                     <DiscordLogo className='hover:text-muted hover:scale-150 transition'/>
                  </div>
               </div>

              <p className='absolute  bottom-5 left-[50%] flex translate-x-[-50%] text-muted-foreground gap-2 whitespace-nowrap mt-5 text-sm lg:text-1xl'>&copy; 
               Copyright {new Date().getFullYear()}. Made by <Nav label='Robson_ribeiro07' to=''/>
              </p>
            </footer>

        </div>
    )
}