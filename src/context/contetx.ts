import {createContext} from 'react'


export interface ProjectContext {
    id: number,
    img: {"Name": string,
         "Url": string
        
    }[],
    FerramentUsed: string[],
    name: string
    bannerImg: string,
    brevDescription: string
}
interface ProjectContextProviderProps {
    projects: ProjectContext[]
    setProjects: React.Dispatch<React.SetStateAction<ProjectContext[]>>

}
export const ProjectsContext = createContext<ProjectContextProviderProps | null>(null)