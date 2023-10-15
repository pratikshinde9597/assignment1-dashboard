import React from 'react'
import 
 {BsSearch, BsJustify}
 from 'react-icons/bs'
 import { MdWavingHand } from "react-icons/md";

function Header({OpenSidebar}) {
  return (
    <header className='header'>
        <div className='menu-icon'>
            <BsJustify className='icon' onClick={OpenSidebar}/>
        </div>
        <div className='header-left'>
            <b>Hello Saharukh</b><MdWavingHand  id = 'hand'/>
        </div>
        <div className='header-right'>
            <div className='search'><BsSearch id='ser-logo'/>
            <input type='search' placeholder='Search' id='search1'></input>
            </div>
        </div>
    </header>
  )
}

export default Header