import { Textera } from "./style";

import Virgulas from '../../../assets/virgulasTextera.svg';
import React from "react";


interface TexteraProps extends React.HTMLAttributes<HTMLDivElement> {
    width?: string,
    label: string,
    heigth: string,
    WithVirgula?: boolean 
    borderTop: boolean
    color: string
    fontSize: string
}

export function Texterea({className, ...rest}: TexteraProps  ) {
   
    if(rest.WithVirgula) {
        return (
            <Textera className={className} {...rest}>
            <img src={Virgulas} alt="Virgula" />
            <img src={Virgulas} alt="Virgula" />

            <p className="font-mono">{rest.label}</p>

        </Textera>
        )
    }
    return (
        <Textera className={className} {...rest}>

            <p className="font-mono">{rest.label}</p>

        </Textera>
    )
}