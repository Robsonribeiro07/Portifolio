import api from "@/lib/axios";


export type ResponseProjects = {
        id: number;
        Title: string;
        BannerImage: string;
        Descriptions: string
        Techs: string[];
        MoreDetails: {
            Title: string;
            Descriptions: string;
            Image: string;
        }[];
}[]
export async function GetProjects() {

    const response = await api.get<ResponseProjects>('/projects')

    return response.data as ResponseProjects
}