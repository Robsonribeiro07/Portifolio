import { Button } from '@/components/ui/button';
import Banner2 from '../../assets/banner2.svg'
import { Texterea } from './components/texterea';
import { useEffect, useRef, useState } from 'react';
import BannerSvg from '../../assets/banner.svg';
import { SkilCard } from './components/skilscard';
import skillSvg from '../../assets/skills.svg'
import BanneAbout from '../../assets/bannerAbout.svg'
import { Helmet } from 'react-helmet-async';
import { useTranslation } from 'react-i18next';
import { Envelope, InstagramLogo } from '@phosphor-icons/react';
import { CardContents } from './cardContentPages';
import { GetProjects, ResponseProjects } from '@/api/get-project';
  import { useQuery } from '@tanstack/react-query';
import { SkeletonHome } from './components/skeletonCard';
import { Link } from 'react-router';

export function HomePage() {
  
  const {t} = useTranslation()
  const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});
  const elementRef = useRef<HTMLDivElement | null>(null);
  const elementRef2 = useRef<HTMLDivElement | null>(null);
  const SkillElement = useRef<HTMLDivElement | null>(null);


  const AboutImgElement = useRef<HTMLDivElement | null>(null);
  const IsLargerScrenn = window.innerWidth > 768;
  const contactRef = useRef<HTMLDivElement | null>(null);

  const {data: projectsData} = useQuery<ResponseProjects>({
    queryKey: ['projects'],
    queryFn: GetProjects
  })
  
  
  useEffect(() => {

  
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(prev => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting
          }))
        } else {
          if(IsLargerScrenn) {
            setIsVisible  (prevState => {
              const update = {...prevState}
              delete update[entry.target.id]
              return update
            })
          }
        }
      },
      { threshold: 0} // Gatilho ao atingir 10% de visibilidade
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    if(elementRef2.current) {
      observer.observe(elementRef2.current);
    }

    if(SkillElement.current) {
      observer.observe(SkillElement.current);
    }
    if(AboutImgElement.current) {
      observer.observe(AboutImgElement.current);
    }
    if(contactRef.current) {
      observer.observe(contactRef.current);
    }

    return () => observer.disconnect();
  }, [IsLargerScrenn]);

  return (
    <div className={`w-full h-full flex flex-col  ${IsLargerScrenn ? "mt-[5rem]" : 'items-center px-4 w-[100vw]  ' } `  }>
   <Helmet title={`home`} />

      {/* Seção principal */}
      <div className={`mt-10 w-full h-[70vh] items-start grid ${IsLargerScrenn ? " grid-cols-2" : "grid-cols-1 mx-auto"} ${isVisible['element2'] ? "animate-SlideInFadeIn" : 'animate-SlideOut'}`} id='element2' ref={elementRef2}>
        <div className="w-ful flex pt-10 pb-10 flex-col justify-center h-[50%] mt-[5rem]">
          <h1 className={`text-muted text-[1.5rem] gap-1 w-full flex font-mono font-semibold ${IsLargerScrenn ? "text-[2.2rem]" : 'text-[1.3rem]'}`}>
            {t('HomePage.RobsonIsdeveloper')} {"   "}
           <h2 className="font-mono text-[#C778DD] ml-3">{t('HomePage.Name')}</h2>
          </h1>
          <h1 className={`text-muted gap-1 w-full flex font-mono font-semibold ${IsLargerScrenn ? 'text-[2.2rem]' : 'text-[1.5rem]'}`}>
            and
            <h2 className="font-mono mr-3 ml-3 text-[#C778DD]">front-end</h2>
            developer
          </h1>

          <h3 className="mt-7 text-[#a2a8b4] font-[400] font-mono">
          {t('HomePage.HereCrafts')}
          </h3>

          <Button variant={'outlineTwo'} className="font-mono font-semibold mt-5 w-[90%] " asChild>
            <a target='blank' href="https://www.instagram.com/robson_ribeiro.07/" className='text-[1.6rem] text-muted-foreground'>#Contate-me</a>
          </Button>
        </div>

        <div className="flex flex-col items-center  select-none pointer-events-none">
          <img src={BannerSvg} alt="" className="w-auto h-full" />
          <img src={Banner2} alt="" className="w-[20vw] h-full" />
        </div>
      </div>

      {/* Seção do Texterea */}
      <div className="w-[fit-content] mx-auto mt-[3rem]">
        <Texterea
          width={IsLargerScrenn? '50vw' : '80vw'}
          label={t('HomePage.WithGreat')}
          borderTop={true}
          heigth="6em"
          WithVirgula
          color="#FFF"
          fontSize={IsLargerScrenn? '1.7em' : '1.1em'}
        />
        <Texterea
          className="ml-auto"
          width={IsLargerScrenn ? "7vw" : '30vw'}
          label="-  Dr. Who"
          heigth="3rem"
          borderTop={false}
          fontSize="1rem"
          color="#abb2bf"
        />
      </div>

      {/* Seção do Scroll */}
      <div
        className={`flex  flex-1 items-start mt-[6rem] flex-col h-[35vw] w-full ${
          isVisible["element1"] ? 'animate-SlideInFadeInRight' : ' '
        }`}
        id='element1'
        ref={elementRef}
      >
        <div className="flex justify-between w-[75vw]">
          <p className="flex items-center text-white text-1xl lg:text-4xl">
            <b className="text-[#c470db]">#</b>
            <b className="font-mono">{t('HomePage.Projects')}</b>
            <b className={`w-[50vw] h-[2.5px] bg-[#c470db] ml-2`}></b>
          </p>

          {IsLargerScrenn ? (
            <Link  to="/project#cardElement" className="text-white underline cursor-pointer hover:text-muted-foreground whitespace-nowrap">
            {t('HomePage.ViewAll')}
          </Link>
          ): (
            <p className="text-white underline cursor-pointer hover:text-muted-foreground whitespace-nowrap">
            all {'>'}
          </p>
          )}
        </div>
        
        {projectsData ? (
          <CardContents/>

        ): (
          <SkeletonHome/>
        )}

      </div>

      <div className={` ${isVisible['elementSkill'] ? "animate-SlideInFadeIn" : ''} ${IsLargerScrenn ? 'mt-[5rem]' : 'mt-10 w-[80vw]'}`} id='elementSkill' ref={SkillElement}>
        <div>
        <p className='flex items-center text-[#c470db] text-3xl'>
          #
          <p className='text-muted text-3xl font-mono'>
            skills
          </p>
          <p className="w-[10vw] h-[1px] bg-[#624572] ml-2"></p>
        </p>
        </div>

        <div className='grid grid-cols-1 w-[50vw] h-[60vh] gap-2 lg:grid-cols-2'>
          <div className=' w-full'>
            <img src={skillSvg} alt="" />
          </div>

          <div className={`flex flex-wrap w-[100vw] gap-4 h-[fit-content]`}>
            <SkilCard label={["Javascript", "TypeScript", "CSS"]} Description='Language'/>
            <SkilCard label={["HTML CSS SCSS", "JavaScript", "REACT JS", "TypeScript", "Io Socket", "Back-end"]} Description='Other'/>
            <SkilCard label={['MongosseDB']} Description='Databases'/>

            <SkilCard label={['Next JS']} Description='Framework'/>
          </div>
        </div>
      </div>

       <div className='grid grid-cols-[43vw_1fr] items-center gap-10 mt-[7rem]'>
        <div className='w-full'>
         <div >
         <p className='flex items-center text-[#624572] text-3xl font-mono font-semibold'>#
          <p className='text-muted'>
            {t('HomePage.AboutTitle')}
          </p>
          <p className="w-[15vw] h-[2px] bg-[#624572] ml-2"></p>
        </p>
         </div>


         <p className='mt-10 font-mono text-muted'>
          {t('HomePage.AboutMe')}
         </p>
         <Button variant={'secondaryTwo'} className='rounded-none mt-5'>
          {t('HomePage.ViewAllAbout')}
         </Button>
       </div>

       <div className={`w-full ${isVisible['bannerAbout'] ? "animate-SlideInFadeInRight" : ''}`} id='bannerAbout'ref={AboutImgElement}>
        <img src={BanneAbout} alt="" />

       </div>
       </div>

      <div className={`${isVisible['contact'] ? "animate-SlideInFadeIn" : " "} `} id='contact' ref={contactRef}>
        <p className='flex items-center text-3xl text-[#624572] mt-[10rem] '>#
          <p className='text-muted mr-4' >contacts</p>
        <p className='w-[10vw] bg-[#624572] h-1'></p>

        </p>

        <div className='grid grid-cols-1 place-items-start  xl:grid-cols-2 xl:place-items-end max-w-xs: gap-5 mb-10'>
        <p className='text-[#ABB2BF] '>
        I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me
        </p>



        <div className='flex justify-end '>

          <div className='border border-[#ABB2BF] h-[8rem] w-[fit-content] px-3 round'>
            <header className='p-3 text-muted font-mono text-start'>
              Message me here
            </header>

            <p className='flex text-sm text-muted items-center gap-2'>
              <Envelope/>
               @Robsonrodriguez.007@gmai.com
            </p>

            <p className='flex text-sm text-muted items-center gap-2'> 
              <InstagramLogo/>
              @robson_ribeiro.07
            </p>
            
          </div>
        </div>
        </div>
      </div>
    </div>
  );
}
