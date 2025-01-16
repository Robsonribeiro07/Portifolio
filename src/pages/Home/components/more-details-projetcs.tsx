import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { DialogContent } from "@/components/ui/dialog";
import { PageDetailsMore } from "./page-details-more";
import { p } from "node_modules/react-router/dist/development/fog-of-war-BhhVTjSZ.d.mts";
import { useState } from "react";


interface ProjeCardProps extends React.HtmlHTMLAttributes<HTMLDivElement> {
    
    MoreDetails: {
        Title: string;
        Descriptions: string;
        Image: string;
    }[];
}

export function MoreDetailsProject({MoreDetails,...rest}: ProjeCardProps) {






    
  
    return (


        
        <DialogContent {...rest} className={rest.className}>

            <Carousel orientation="horizontal" className="min-h-full " opts={{
                align: 'center', 
                loop: true
            }}>
             <CarouselContent className="w-full min-h-[80vh] relative">
             {MoreDetails ? MoreDetails.map(item => {
                return (
                    <CarouselItem>
                      <PageDetailsMore Descriptions={item.Descriptions} Image={item.Image} Title={item.Title} />

                    </CarouselItem>
                    
                )
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