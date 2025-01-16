import { useQuery } from "@tanstack/react-query";
import { ProjectsCard } from "./components/projects";
import { GetProjects, ResponseProjects } from "@/api/get-project";
import { p } from "node_modules/react-router/dist/development/fog-of-war-BhhVTjSZ.d.mts";

export function CardContents() {


    const {data: projectsData, isFetched} = useQuery<ResponseProjects>({
      queryKey: ['projects'],
      queryFn: GetProjects
    })
    
   

    return (
        
        <div className="grid grid-cols-1 gap-3   h-full mt-10 lg:grid-cols-4  lg:w-[90vw]  ">
         {projectsData ? (
            projectsData.map(projects => {
               const {BannerImage,MoreDetails,Techs,Title,Descriptions,id} = projects
               return (
                <ProjectsCard Description={Descriptions} img={BannerImage} Techs={Techs} key={id} Title={Title} MoreDetails={MoreDetails}/>
               )
            })
            
         ): (
            <p>Loading...</p>
         )}
        </div>

    )
}