import api from "@/lib/axios";


export type ResponseProjects = {
        id: string;
        Title: string;
        BannerImage: string;
        Descriptions: string
        Techs: string[]
        VIDEO?:string
        LinkSite: string
        MoreDetails: {
            Title: string;
            Descriptions: {
                "EN": string,
                "PT": string
            }
        Source: {
            IMG: string;
            VIDEO?: undefined;
        };
        }[];
}[]
export async function GetProjects() {

    const response = await api.get<ResponseProjects>('/projects')

    return response.data as ResponseProjects
}