import { useContext, useState } from "react";
import { ProjectContext, ProjectsContext } from "./contetx";


interface ProjectContextProvider {
    children: React.ReactNode,
}
export const ProjectsProvider = ({children}: ProjectContextProvider) => {
    const [projects, setProjects] = useState<ProjectContext[]>([
        {FerramentUsed: ['REACT JS', 'Typescript','CSS'], 
         id: new Date().getMilliseconds(),
         bannerImg: 'https://res-console.cloudinary.com/ddrbxo7pj/media_explorer_thumbnails/74d8b334faf82012f5a516c6226d31d9/detailed',
         img: [{
            Name: "HomePage",
            Url: "https://res-console.cloudinary.com/ddrbxo7pj/media_explorer_thumbnails/74d8b334faf82012f5a516c6226d31d9/detailed"
         },
         {Name: "TimerPage",
          Url: "https://res-console.cloudinary.com/ddrbxo7pj/media_explorer_thumbnails/bf9c5bd16d5dd97da0698af4760fd21b/detailed"
         }
        ],
         name: "Ignite Time",
         brevDescription: "Sistema de gestão de tempo com contador visual, onde o usuário pode definir um nome para o projeto e especificar a duração em minutos. O design é minimalista, destacando o cronômetro e um botão para iniciar a contagem, ideal para acompanhar sessões de trabalho ou estudo."
        }
        
        
    ]);


    return (
        <ProjectsContext.Provider value={{projects, setProjects}}>
            {children}

        </ProjectsContext.Provider>
    )
}

export function UseProject() {
    const context = useContext(ProjectsContext)

    if(!context) {
        throw new Error("useProject must be used within a ProjectProvider")
    }
    return context

}