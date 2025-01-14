import { Separator } from "./separator";

interface SkilCardProps {
    label: string[];
    Description: string;
}

export function SkilCard({ Description, label }: SkilCardProps) {
    return (
        <div className="w-[8rem] h-[fit-content] border border-[#abb2bf]">
            <header className="p-2 text-muted">
                {Description}
            </header>
            <Separator />

        <div className="text-muted-foreground font-mono p-2 text-xl">
                {label ? (
                    label.map((skill, index) => (
                        <p key={index}>{skill}</p> // Adicionando `key` para cada item
                    ))
                ) : (
                    <p>Nenhuma habilidade disponível</p> // Caso o array esteja vazio
                )}
            </div>
        </div>
    );
}
