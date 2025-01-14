import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import LogoSvg from '../../assets/logo.svg'
import { Nav } from './nav'
import { List } from 'lucide-react'
import { DropdownMenu, DropdownMenuContent, DropdownMenuTrigger } from '@/components/ui/dropdown-menu'

export function Header() {

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
                             <Nav to='/' label='Home'/>
                             <Nav to='/project' label='Projeto'/>
                             <Nav to='/about' label='About'/>
                            
                             <Select defaultValue='EN' >
                                 <SelectTrigger className='bg-transparent border-none text-muted font-semibold h-7 focus:outline-none focus:ring-0 focus:ring-offset-0' >
                                     <SelectValue  />    
                                       
                                 </SelectTrigger>
                                 <SelectContent className='bg-transparent w-[50px] h-[6rem] rounded-none' >
                                         <SelectItem  value='EN' className='text-1xl text-muted-foreground font-semibold hover:text-muted cursor-pointer'>EN</SelectItem>
                                         <SelectItem value="BR" className='text-1xl text-muted-foreground font-semibold hover:text-muted cursor-pointer'>BR</SelectItem>
                                     </SelectContent>
                                     
                             </Select>
      
                         </ul>
                     </nav>
     

                ): (
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                    <List size={32} color='white' />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className='h-[40vh] bg-[#282C33]'>
                        <ul className='text-center'>
                            <Nav to='/' label='Home' className='w-full '/>
                            <Nav to='/project' label='Projeto'/>
                            <Nav to='/about' label='About'/>
                        </ul>
                    </DropdownMenuContent>
                </DropdownMenu>

                )}

           
            </header>
        
    )
}