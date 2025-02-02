import { Skeleton } from "@/components/ui/skeleton";

export function SkeletonHome() {
    return (
        <div className="flex w-full gap-2 mt-10">
            {Array.from({length: Math.round(Math.random() * 3)}).map(( ) => (
                <Skeleton className="w-[20vw] h-[50vh] rounded-none"/>
            ))}
        </div>
    )
}