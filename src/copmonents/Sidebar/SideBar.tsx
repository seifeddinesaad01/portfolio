import React from 'react'
import { links } from '../../Data/constants';
import {RxCross2} from "react-icons/rx";
interface Iprops  {
    display:boolean;
    handleDrawer?: any;
}
const SideBar = ({display,handleDrawer}:Iprops) => {
  return (
   <aside className={display ? "show" : "init"}>
    <div className="head">
    <h1><span>s</span>eif <span>eddine</span> saa<span>d</span></h1>
<p onClick={()=>handleDrawer(false)}><RxCross2 fontSize="1.6rem" cursor="pointer"/></p> 
    </div>
    <div className='list__items'>
{links.map((link,index)=>{
        return (
            <a href="#" key={index}>
                <li>{link}</li>
            </a>
        )
    })}
    </div>
    
   </aside>
  )
}

export default SideBar