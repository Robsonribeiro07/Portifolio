interface funcFact {
    label: string
}

export function FunFacts({label}:funcFact ){
    return (
        <div className="border border-[#abb2b2] flex items-center justify-center w-[fit-content] p-3">
            <p className="text-[#abb2b2] ">{label}</p>
            
        </div>
    )
} 