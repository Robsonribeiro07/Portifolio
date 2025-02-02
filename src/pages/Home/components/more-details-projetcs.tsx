import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { DialogContent } from "@/components/ui/dialog";
import { PageDetailsMore } from "./page-details-more";
import { useTranslation } from "react-i18next";


interface ProjeCardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    
    MoreDetails: {
        Title: string;
        Descriptions: {
            "EN": string;
            "PT": string;
        };
        Source: {
            IMG?: string;
            VIDEO?: string;
        };
    }[];
}

export function MoreDetailsProject({MoreDetails,...rest}: ProjeCardProps) {


    const {i18n: {language}} = useTranslation()






    const SortDeImage = MoreDetails.sort((a,b) => {
       if(a.Source.IMG && !b.Source.IMG) return -1

       if(!a.Source.IMG && b.Source.IMG) return 1

        return 0
    })  
    return (

        

        
        <DialogContent {...rest} className={rest.className}>

            <Carousel orientation="horizontal" className="min-h-full " opts={{
                align: 'center', 
            }}>
             <CarouselContent className="w-full min-h-[80vh] relative select-none  rounded-none  ">
             {MoreDetails ? SortDeImage.map(item => {
                const {EN,PT} = item.Descriptions
                const Descriptions = language === 'EN' ? EN : PT
                    
                 if(item.Source){
                    return (
                        <CarouselItem key={item.Title}>
                          <PageDetailsMore Descriptions={Descriptions} Source={item.Source} Title={item.Title} />
    
                        </CarouselItem>
                        
                    )
                 }
             }): (
                <p>Nenhum Projeto Encontrado</p>
             )}
                
            </CarouselContent>

            <CarouselPrevious className="left-0"/>
            <CarouselNext  className="right-0" />
            </Carousel>

        </DialogContent>
    )
}