import { useQuery } from "@tanstack/react-query";
import { ProjectsCard } from "./components/projects";
import { GetProjects, ResponseProjects } from "@/api/get-project";
import { Skeleton } from "@/components/ui/skeleton";

export function CardContents() {


    const {data: projectsData, isFetching} = useQuery<ResponseProjects>({
      queryKey: ['projects'],
      queryFn: GetProjects
    })
    
   

    return (
        
        <div className="grid grid-cols-1 gap-4   mt-10 lg:grid-cols-2  lg:w-[70vw] ">
         {!isFetching && projectsData ? (
            projectsData.map(projects => {

               const {BannerImage,MoreDetails,Techs,Title,Descriptions,id} = projects
               return (
                <ProjectsCard Description={Descriptions} img={BannerImage} Techs={Techs} key={id} Title={Title} MoreDetails={MoreDetails} LinkSite={projects.LinkSite ? projects.LinkSite : ''} VIDEO={projects.VIDEO} onClick={() => console.log('ok')}  IdProject={projects.id} id={projects.id}/>
               )
            })
            
         ): (
            Array.from({length: Math.round(Math.random() * 3)}).map((_, index) => (
                <Skeleton key={index} />
 
            ))
         )}
        </div>

    )
}