import React from 'react'
import 
{ BsNut, BsChevronRight, BsBox, BsQuestionSquare, BsPatchCheck, BsCreditCard2FrontFill, BsPersonBoundingBox, BsChevronCompactDown}
 from 'react-icons/bs'
 import { TbSquareKey } from "react-icons/tb";
 import man from './images/man.jpg';
 

function Sidebar({openSidebarToggle, OpenSidebar}) {
  return (
    <aside id="sidebar" className={openSidebarToggle ? "sidebar-responsive": ""}>
        <div className='sidebar-title'>
            <div className='sidebar-brand'>
                <BsNut  className='icon_header'/> Dashboard
            </div>
            <span className='icon close_icon' onClick={OpenSidebar}>X</span>
        </div>

        <ul className='sidebar-list'>
            <li className='sidebar-list-item' id='side-1'>
                <a href="">
                    <TbSquareKey className='icon'/> Dashboard
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsBox className='icon'/> Product <BsChevronRight className='A-logo'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPersonBoundingBox className='icon'/> Customers<BsChevronRight className='B-logo'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsCreditCard2FrontFill className='icon'/> Income<BsChevronRight className='C-logo'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsPatchCheck className='icon'/> Promote<BsChevronRight className='D-logo'/>
                </a>
            </li>
            <li className='sidebar-list-item'>
                <a href="">
                    <BsQuestionSquare className='icon'/> Help<BsChevronRight  className='E-logo'/>
                </a>
            </li>
        </ul>
        <div className='foot' >
            <div className='foot-img'>
                <img src={man} alt='man.jpg' height='40px'/>
            </div>
            <div className='foot-name'>
                <span className='foot-name1'>Evano</span>
                <span className='foot-name2'>Project Manager</span>
            </div>
            <div className='foot-arrow'>
                <BsChevronCompactDown/>
            </div>
        </div>
    </aside>
  )
}

export default Sidebar