import { Button } from "@/components/ui/button";
import { Separator } from "./separator";
import { CaretRight } from "@phosphor-icons/react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { MoreDetailsProject } from "./more-details-projetcs";
import { Video } from "lucide-react";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router";


interface ProjeCardProps extends React.HtmlHTMLAttributes<HTMLDivElement>  {
    img: string
    Techs: string[],
    Description: string,
    Title: string,
    LinkSite?: string,
    IdProject: string
    VIDEO?:string
    MoreDetails: {
        Title: string;
        Descriptions: {
            "EN": string;
            "PT": string;
        };
        Source: {
            IMG: string;
            VIDEO?: string;
        };
    }[];

}
export function ProjectsCard({Techs = [], Description, Title, MoreDetails, img,LinkSite, VIDEO, IdProject }: ProjeCardProps){

    const navigate = useNavigate()
    const {pathname} = useLocation()
    const [isVisibleVideo, setIsVisibleVideo] = useState(false); 


    const handleMouseOver = () => {
        if(!VIDEO) return;
        setIsVisibleVideo(true);
    }

    const handleMouseOut = () => {
        setIsVisibleVideo(false);
    }
    const handleNavigate = (url: string) => {
        if(pathname.includes('project')) return 
        navigate(`project#${url}`)
    }
    return (
        <div className='bg-transparent  h-[fit-content] border border-[#abb2bf] flex flex-col  min-w-fit   transition-all duration-1000 max-w-[20vw]' onClick={(e) => handleNavigate(e.currentTarget.id)} id={IdProject}>
            
            {isVisibleVideo && VIDEO && <video className="min-w-full animate-in" autoPlay muted loop src={VIDEO} onMouseLeave={handleMouseOut} />}
            {!Video || !isVisibleVideo && (
                <img src={img} alt="" className="w-auto object-cover hover:scale-105 transition-all cursor-pointer  " onMouseOver={handleMouseOver} />
            )}
            <Separator/>
            <div className="flex w-full px-2 py-2 gap-3 flex-wrap">
               {Techs.map(Techs => (
                <p key={Techs} className="text-[#ABB2BF] whitespace-nowrap">{Techs}</p> // Adicionando `key` para cada item de FerramentUsed
               ))}
            </div>
            <Separator/>


            <span className="p-4 h-full">
                <p className="text-white text-2xl">{Title}</p>
                <p className="text-[#ABB2BF]">{Description?.length > 50 ? Description.slice(0, 70): Description}</p>
               
               <div className="flex gap-2">
                
               <Button variant={'secondaryTwo'} className="w-[10rem] rounded-none mt-10">
                    <a target="blank" href={LinkSite}>Live</a> <CaretRight/>
                </Button>
                
                <Dialog>

                    <DialogTrigger asChild>
                    <Button variant={'secondaryTwo'} className="w-[10rem] rounded-none mt-10">
                    Ver Mais <CaretRight/>
                    </Button>
                
                    </DialogTrigger>
                    <MoreDetailsProject  className="min-w-[80vw]  bg-[#282C33] rounded-none" MoreDetails={MoreDetails}  />
                </Dialog>
               </div>

            </span>

            
        
    </div>
    )
}