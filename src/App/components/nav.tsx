import React from "react"
import { NavLink, useLocation } from "react-router"

interface NavProps extends React.ComponentProps<'nav'>{
    to: string,
    label: string
    textColor?: string
    textSize?: string
}
export function Nav({to, label, textColor, textSize}: NavProps) {

    const {pathname} = useLocation()

    const textColors = textColor ||  "text-[#ABB2BF]"
    const textSizes = textSize || "text-1xl"

    const isActive = pathname === to
    return (
            <NavLink to={to} className={`flex ${textSizes} font-[400] hover:text-white ${isActive ? "text-white" : textColors}`}>
            <h5 className='text-[#C778DD]'>#</h5>
            <a href="#">{label}</a>
          </NavLink>
    )
}