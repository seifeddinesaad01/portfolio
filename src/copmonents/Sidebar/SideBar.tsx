import React from 'react'
import { links } from '../../Data/constants'
interface Iprops  {
    display:boolean;
}
const SideBar = ({display}:Iprops) => {
  return (
   <aside className={display ? "" : "show"}>

    {links.map((link,index)=>{
        return (
            <a href="#" key={index}>
                <li>{link}</li>
            </a>
        )
    })}
   </aside>
  )
}

export default SideBar