
import { useEffect, useRef, useState } from 'react';
import Me from '../../assets/bannerAbout.svg'
import { SkilCard } from '../Home/components/skilscard'
import { FunFacts } from './components/func-fact'
export function AboutMe() {
       
      const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});

      const meRef = useRef<HTMLDivElement | null>(null);
      const skillElement = useRef<HTMLDivElement | null>(null);
      const funElement = useRef<HTMLDivElement | null>(null);

      useEffect(() => {
         
        const observer = new IntersectionObserver(
            ([entry]) => {
                if(entry.isIntersecting){
                    setIsVisible(prev => ({
                        ...prev,
                        [entry.target.id]: entry.isIntersecting
                    }))
                } else (
                    setIsVisible(prevState => {
                        const update = {...prevState}
                        delete update[entry.target.id]
                        return update
                    })
                ) 
            },
            {threshold: 0.1}
        )

        if(meRef.current) {
            observer.observe(meRef.current);
        }
        if(skillElement.current) {
            observer.observe(skillElement.current);
        }
        if(funElement.current) {
            observer.observe(funElement.current);
        }
        return () => {
            observer.disconnect();
        }
      },[])
        return (
            <div className="h-[fit-content] mt-[8rem] font-mono px-4 lg:px-0">
                <header className="flex  text-muted flex-col">
                 <div className="flex items-center font-semibold  text-3xl">
                 <p className="text-purple text-4xl">/</p>
                 <p>about-me</p>
                 </div>

                 <p className="text-[#abb2b2] mt-4">who am i</p>
                </header>


                <div className={`flex-col lg:flex-row mt-[8rem] items-center text-[#abb2b2] gap-4 ${isVisible['me'] ? 'animate-SlideInFadeIn': ''}`} id='me' ref={meRef}>
                    <img src={Me} alt="" />


                    <p>
                        I’m a self-taught front-end developer based in Kyiv, Ukraine. I can develop responsive websites from scratch and raise them into modern user-friendly web experiences.
                         <br />
                         <br />
                        Transforming my creativity and knowledge into a websites has been my passion for over a year. I have been helping various clients to establish their presence online.
                        <br />
                        <br />
 
 
                         I always strive to learn about the newest technologies and frameworks.
                    </p>


                </div>

                
                <div className={`mt-10 ${isVisible['skill'] ? 'animate-SlideInFadeInRight': ''}`} id='skill' ref={skillElement}>
                    <header className='flex items-center text-muted text-3xl'>
                        <p className='text-purple'>#</p>
                        <p>skill</p>
                        <p className='bg-purple w-[10vw] h-[1.5px] ml-3'></p>
                    </header>



                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-3 mt-10 '>
                     <SkilCard Description='Languages' label={[' JavaScript ', 'TypeScript']}/>
                     <SkilCard Description='Databases' label={['SQLitePostgreSQL']}/>
                     <SkilCard Description='Other' label={['HTML CSS SASS SCSS Less', 'CSS']}/>
                     <SkilCard Description='Frameworks' label={['React Next Next Express']}/>
                     <SkilCard Description='Frameworks' label={['React Next Next Express']}/>
                    </div>
                  </div>



                <div>

               <div className={isVisible['fun'] ? 'animate-SlideInFadeIn' : ''} id='fun' ref={funElement}>
               <header className='flex items-center text-muted text-3xl mt-10'>
                        <p className='text-purple'>#</p>
                        <p>fun-facts</p>
                        <p className='bg-purple w-[10vw] h-[1.5px] ml-3'></p>
                    </header>



                    <div className='mt-10 flex grid-cols-3 gap-3 flex-wrap'>
                        <FunFacts label='I like winter more than summer'/>
                        <FunFacts label='I like winter '/>
                        <FunFacts label='I like winter more than summer'/>
                        <FunFacts label='I like winter more than summer more'/>
                    </div>
               </div>
                </div>

                

            </div>
        )
    }