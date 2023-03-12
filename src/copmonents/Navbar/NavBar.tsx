import React, { useState } from 'react'
import {links} from "../../Data/constants";
import {AiOutlineMenu} from "react-icons/ai";
import useWindowSize from '../../utils/useWindowSize';
import { Sidebar } from '../Sidebar';

const NavBar = () => {
    const [showSidebar,setShowSidebar] = useState(false);
    const {width} = useWindowSize();
    const iconStyle ={fontSize:"1.6rem", cursor:'pointer'};
  return (
    <nav>
        <div className="logo">
            <h1><span>s</span>eif <span>eddine</span> saa<span>d</span></h1>
        </div>
        {
            width > 900 ?  <ul>
        {links.map((link,index)=>{
        return (
            <a href={`#${link}`} key={index}><li>{link}</li></a>
        )
})}</ul> : <div className="menu" onClick={()=>setShowSidebar(!showSidebar)}><AiOutlineMenu style={iconStyle}/>
    </div>
        
           } 
      <Sidebar display={showSidebar} handleDrawer ={setShowSidebar}/>
    </nav>
  )
}

export default NavBar