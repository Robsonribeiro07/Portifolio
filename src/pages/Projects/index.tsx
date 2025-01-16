import { Helmet } from "react-helmet-async";
import { ProjectsCard } from "../Home/components/projects";
import { SkilCard } from "../Home/components/skilscard"
import { useEffect, useRef, useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetProjects } from "@/api/get-project";
export function ProjectsPage() {



    const [isVisible, setIsVisible] = useState<{[key: string]: boolean}>({});

    const cardElements = useRef<HTMLDivElement | null>(null);
    const SmallElements = useRef<HTMLDivElement | null>(null);

    const {data: projects} = useQuery({
        queryKey: ['projects'],
        queryFn: GetProjects
    })


    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
              if(entry.isIntersecting){
                setIsVisible(prev => ({
                    ...prev,
                    [entry.target.id]: entry.isIntersecting,
                }))
              } else {
               if(window.innerWidth > 768){
                setIsVisible(prevState => {
                    const update = {...prevState}
                    delete update[entry.target.id]
                    return update
                })
               }
              }
            },
            {threshold: 0}
        )
        if(cardElements.current){
            observer.observe(cardElements.current)
        }
        if(SmallElements.current){
            observer.observe(SmallElements.current)
        }   

        return () => {
            observer.disconnect()
        }
    },[])
    useEffect(() => {
        console.log(JSON.stringify(isVisible))
    },[isVisible])
    return (
         <div className="text-white h-full  mt-[8rem] font-semibold font-mono px-4 lg:px-0">
            <Helmet  title="project"/>
            
            <header>
            <p className="flex font-mono text-3xl ">
                <p className={`text-purple font-semibold text-4xl ${isVisible['cardElement'] ? 'animate-FadeInRightSS': ''}`}>/</p>
                <p className={`mt-1 font-mono ${isVisible['cardElement'] ? 'animate-SlideInFadeInRight' : 'opacity-0'}` }>projects</p>
            </p>

            <p className="text-[#abb2b2] mt-4 font-[400]">All of my projects</p>
            </header>


            <p className={`flex items-center text-3xl mt-[7rem] ${isVisible['cardElement'] ? 'animate-SlideInFadeIn': 'opacity-0'}`}>
                <p className="text-purple">#</p>
                <p>decent</p>
                <p className="w-[10vw] h-[1.5px] bg-purple ml-2" ></p>
            </p>


            <div className={`grid grid-cols-1 lg:grid-cols-4  h-[fit-content] gap-3 mt-11 ${isVisible['cardElement'] ? 'animate-SlideInFadeInRight' : 'opacity-0'}`} id="cardElement" ref={cardElements}>
              {projects ? projects.map(project => {
                return (
                  <ProjectsCard Description={project.Descriptions} img={project.BannerImage} Title={project.Title} Techs={project.Techs} MoreDetails={project.MoreDetails} />
                )
              }): (
                <p>Loading...</p>
              )}
            </div>

            <div className={isVisible['smallElement'] ? 'animate-SlideInFadeIn' : ''} id="smallElement" ref={SmallElements}> 
               <div>
               <p className="flex items-center text-3xl mt-[7rem]">
                <p className="text-purple">#</p>
                <p>small</p>
                <p className="w-[11vw] h-[1px] bg-purple ml-4"></p>
               </p>
               </div>

               <div className="flex gap-3 mt-10">
                <SkilCard width="20vw" label={['Discord']} Description="TypeScript"  withButton/>
                <SkilCard width="15rem" label={['Discord']} Description="JavaScript" />
               </div>
               <div className="flex gap-3 mt-10">
                <SkilCard width="20vw" label={['Discord']} Description="TypeScript"  withButton/>
                <SkilCard width="15rem" label={['Discord']} Description="JavaScript" />
               </div>
            </div>
         </div>
    )
}