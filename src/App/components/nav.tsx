import React from "react"
import { NavLink, useLocation } from "react-router"

interface NavProps extends React.ComponentProps<'nav'>{
    to: string,
    label: string
}
export function Nav({to, label}: NavProps) {

    const {pathname} = useLocation()

    const isActive = pathname === to
    return (
            <NavLink to={to} className={`flex  font-[400] hover:text-white ${isActive ? "text-white" : "text-[#ABB2BF]"}`}>
            <h5 className='text-[#C778DD]'>#</h5>
            <a href="#">{label}</a>
          </NavLink>
    )
}