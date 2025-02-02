import LogoSvg from '../../assets/logo.svg'
import { Nav } from './nav'
import { List } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'
import { SelectLanguage } from './selectLanguage'
import { useTranslation } from 'react-i18next'

export function Header() {

     const {t} = useTranslation()
   

   
    
    const resize = window.innerWidth > 768 
    return (

            <header className={`pt-7 w-full lg:w-[70vw] flex  h-[10vh] fixed bg-[#282C33] z-10 ${resize ? 'justify-between' : 'justify-between px-5 items-center'}`}>
                <span className='flex items-center'>
                    <img src={LogoSvg} className='w-4 h-6' alt="" />
                    <p className='text-muted ml-2'>Robson_ribeiro07</p>
                </span>


                {resize ? (
                         <nav >
                         <ul className='flex gap-10 '>
                             <Nav to='/' label={t("Header.Home")} />
                             <Nav to='/project' label={t('Header.Projects')}/>
                             <Nav to='/about' label={t('Header.About')}/>
                            
                             
                        <SelectLanguage/>
                         </ul>
                     </nav>
     

                ): (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <List size={32} color='white' />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className='h-[40vh] bg-[#282C33] relative'>
                        <ul className='text-center'>
                            <Nav to='/' label='Home' className='w-full '/>
                            <Nav to='/project' label='Projeto'/>
                            <Nav to='/about' label='About'/>
                        </ul>
                        <SelectLanguage className='absolute' />


                    </DropdownMenuContent>
                </DropdownMenu>

                )}

           
            </header>
        
    )
}