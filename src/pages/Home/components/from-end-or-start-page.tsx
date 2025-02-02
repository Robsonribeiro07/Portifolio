import { smoothScroll } from "@/lib/animation";
import { CaretDown, CaretUp } from "@phosphor-icons/react";

interface ArrowDownOrUpProps {
    visible: boolean
}



export function ArrowDownOrUp({visible}: ArrowDownOrUpProps) {

     const targetY = document.body.scrollHeight


     return (
       
        <>
        <CaretDown className={`fixed bottom-10 right-[10vw] bg-muted-foreground rounded-full  hover:scale-110 transition-all cursor-pointer ${visible ? "opacity-0" : "animate-SlideInFadeIn"} `}size={30} onClick={() => smoothScroll({targetY: targetY, duration: 2500 })}/>

        <CaretUp className={`top-[5rem]  fixed bg-muted-foreground rounded-full   right-[10vw] hover:scale-110 transition-all cursor-pointer ${visible ? "animate-SlideInFadeInRight " : "opacity-0"}  `} size={30}  onClick={() => smoothScroll({targetY: 0, duration: 2500})}/>

        </>
      
    )
} 