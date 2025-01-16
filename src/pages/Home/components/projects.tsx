import { Button } from "@/components/ui/button";
import { Separator } from "./separator";
import { CaretRight } from "@phosphor-icons/react";
import { Dialog, DialogTrigger } from "@/components/ui/dialog";
import { MoreDetailsProject } from "./more-details-projetcs";


interface ProjeCardProps {
    img: string
    Techs: string[],
    Description: string,
    Title: string,
    MoreDetails: {
        Title: string;
        Descriptions: string;
        Image: string;
    }[];

}
export function ProjectsCard({img,Techs = [], Description, Title, MoreDetails}: ProjeCardProps){


    return (
        <div className='bg-transparent w-full h-[fit-content] border border-[#abb2bf] flex flex-col  min-w-fit'>
            <img src={img} alt=""  className="w-full object-cover hover:scale-105 transition-all cursor-pointer  "/>
            <Separator/>
            <div className="flex w-full px-2 py-2 gap-3">
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
                    Live <CaretRight/>
                </Button>
                
                <Dialog>

                    <DialogTrigger asChild>
                    <Button variant={'secondaryTwo'} className="w-[10rem] rounded-none mt-10">
                    Ver Mais <CaretRight/>
                    </Button>
                
                    </DialogTrigger>
                    <MoreDetailsProject  className="min-w-[80vw]  bg-[#282C33]" MoreDetails={MoreDetails} />
                </Dialog>
               </div>

            </span>

            
        
    </div>
    )
}