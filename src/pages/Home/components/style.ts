
import {css, styled} from 'styled-components'


interface TexteraProps {
    width?: string;
    heigth?: string;
    borderTop: boolean
    color: string
    fontSize: string
}

export const Textera = styled.div<TexteraProps>`
width: ${props => props.width};
height: ${props => props.heigth};

border: 1px solid #abb2bf;
position: relative;

display: flex;
align-items: center;

justify-content: center;
border-collapse: collapse;


${props => props.borderTop === false && css`
border-top: none;

` }

p {
    color: ${props => props.color || '#ffff'};
    font-size: ${props => props.fontSize || '14px'};
    text-align: center
}
img {
    position: absolute;
    
    &:first-child {
   top: -10px;
    left: 10%;

    }


   &:nth-child(2) {
    bottom: -15px;
    left: 90%;
   }

    
}

`