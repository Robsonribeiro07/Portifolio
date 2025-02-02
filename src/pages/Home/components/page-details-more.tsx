
interface PageDeatilsMore {
    Title: string;
        Descriptions: string;
        Source: {
            IMG?: string;
            VIDEO?: string;
        };
}
export function PageDetailsMore({Descriptions = "",Title = '',Source}: PageDeatilsMore) {



    return(
        <div className="grid grid-cols-2 h-full gap-2 place-items-center place-content-center ">
            <div className="w-full h-full">
               
               {Source ? Source.IMG ? (
                <img src={Source.IMG}  alt=""  className="h-full object-right w-full object-contain" />
               ) : (
                <video controls={false} autoPlay className="w-full h-full object-cover" src={Source.VIDEO} />
               ): (
                 <p>No Source Provided</p>
 
               )}
                
            </div>
            <div className="w-full min-h-full p-4">
                <header className="text-muted font-mono flex text-2xl items-center">
                  <p className="text-purple text-4xl">/</p>
                  <p>{Title}</p>
                  <p className="ml-2">{}</p>
                  <p className="w-[10vw] h-[1.5px] bg-purple ml-3"></p>
                </header>

                <div className="mt-10">
                    
                <div className="mt-6">
                    <p className="text-muted  leading-relaxed" dangerouslySetInnerHTML={{ __html: Descriptions }} />
                </div>
                </div>
            </div>
        </div>
    )
}