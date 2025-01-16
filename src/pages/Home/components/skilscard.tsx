import { Button } from "@/components/ui/button";
import { Separator } from "./separator";

interface SkilCardProps {
    label: string[];
    Description: string;
    width?: string
    withButton?: boolean
}

export function SkilCard({ Description, label,width, withButton = false }: SkilCardProps) {


    const Width = width || "8rem";
    return (
        <div className={`w-[${Width}] min-w-fit h-[fit-content] border border-[#abb2bf] `}>
            <header className="p-2 text-muted">
                {Description}
            </header>
            <Separator />

        <div className="text-muted-foreground font-mono p-2 text-1xl">
                {label ? (
                    label.map((skill, index) => (
                        <p key={index}>{skill}</p> // Adicionando `key` para cada item
                    ))
                ) : (
                    <p>Nenhuma habilidade disponível</p> // Caso o array esteja vazio
                )}

                {withButton && (
                    <Button variant={'secondaryTwo'} className="rounded-none mt-4">
                        GitHub {'=>'}
                    </Button>
                )}
            </div>
        </div>
    );
}
