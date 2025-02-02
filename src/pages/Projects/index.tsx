import { Helmet } from "react-helmet-async";
import { ProjectsCard } from "../Home/components/projects";
import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
import { GetProjects } from "@/api/get-project";
import { Skeleton } from "@/components/ui/skeleton";
import { useLocation } from "react-router";
import { smoothScroll } from "@/lib/animation";

export function ProjectsPage() {
    const location = useLocation();

    const cardElements = useRef<HTMLDivElement | null>(null);

    // 🔹 Aguarde os dados carregarem antes de chamar o scroll
    const {data: projects, isSuccess} = useQuery({
        queryKey: ['projects'],
        queryFn: GetProjects
    });

   

    // 🔹 Novo useEffect para esperar os projetos carregarem antes de fazer o scroll
    useEffect(() => {
        if (isSuccess && location.hash) {
            const element = document.getElementById(location.hash.substring(1));
            if (element) {
                setTimeout(() => {
                    smoothScroll({targetY: element.offsetTop});
                }, 300); // Pequeno delay para garantir que o elemento foi renderizado
            }
        }
    }, [isSuccess, location]);

    return (
        <div className="text-white h-full  mt-[8rem] font-semibold font-mono px-4 lg:px-0">
            <Helmet title="project"/>
            
            <header>
                <p className="flex font-mono text-3xl ">
                    <p className="text-purple font-semibold text-4xl">/</p>
                    <p className="mt-1 font-mono">projects</p>
                </p>
                <p className="text-[#abb2b2] mt-4 font-[400]">All of my projects</p>
            </header>

            <div id="cardElement" ref={cardElements} className="grid grid-cols-1 lg:grid-cols-2 h-[fit-content] gap-3 mt-11">
                {projects ? projects.map(project => (
                    <ProjectsCard 
                        Description={project.Descriptions} 
                        img={project.BannerImage} 
                        Title={project.Title} 
                        Techs={project.Techs} 
                        MoreDetails={project.MoreDetails} 
                        key={project.id}  
                        IdProject={project.id}
                    />
                )) : (
                    <div className="min-w-[80vw] gap-5 flex">
                        {Array.from({ length: 3 }).map((_, index) => (
                            <Skeleton key={index} className="w-[23vw] h-[55vh] ml-5"/>
                        ))}
                    </div>
                )}
            </div>
        </div>
    )
}
