import { Button } from "@/components/ui/button";
import { Separator } from "./separator";
import { CaretRight } from "@phosphor-icons/react";

export function ProjectsCard(){
    return (
        <div className='bg-transparent min-w-full h-[fit-content] border border-[#abb2bf] flex flex-col'>
            <img src="https://eliasdevis.github.io/images/projects/deplos.webp" alt=""  className="w-full object-cover"/>
            <Separator/>
            <div className="flex w-full px-2 py-2 gap-3">
                <p className="text-[#ABB2BF]">Pug</p>
                <p className="text-[#abb2bf]">React</p>
                <p className="text-[#abb2bf]">TypeScript</p>
                <p className="text-[#abb2bf]">CSS</p>
            </div>
            <Separator/>


            <span className="p-4 h-full">
                <p className="text-white text-2xl">ChertNodes</p>
                <p className="text-[#ABB2BF]">Minecraft servers hosting</p>

                <Button variant={'secondaryTwo'} className="w-[10rem] rounded-none mt-10">
                    Live <CaretRight/>
                </Button>

            </span>

            
        
    </div>
    )
}