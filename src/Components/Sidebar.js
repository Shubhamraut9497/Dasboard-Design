import React ,{useState} from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { Link } from "react-router-dom";
import {GiCancel} from 'react-icons/gi';
import {SideBarData} from './SideBarData'
import {FooterData} from './Footer';
import { NavItem } from "react-bootstrap";
const Sidebar = () => {
    const [sidebar,setSideBar]=useState(false);
    
    const showSideBar=()=>{
        setSideBar(!sidebar);
    }

  return (
    <>
    <div className="navbar">
      <Link to={"#"} style={{position:'absolute',top:"10px",left:'20px'}} >   
      
        <AiOutlineMenu onClick={showSideBar}/>
      </Link>
      </div>
      <nav className={sidebar?"nav-menu active":'nav-menu'}>
        <ul className='nav-menu-options'>
            <li className="navbar-toggle" >
                <Link to={'#'} className='menu-bars' onClick={showSideBar}>
                     <GiCancel />
                </Link>
                {SideBarData.map((data,index)=>{
                     return (
                        <li key={index} className={data.clName}>
                            <Link to ={data.path}>
                                {data.icon}
                                <span>{data.title}</span>
                            </Link>
                        </li>
                     )
                })}
                <div style={{marginTop:'230px'}}>
                {
                  FooterData.map((value,index)=>{
                    return (
                      <li key={index+4} className={value.clName}>
                          <Link to ={value.path}>
                              {value.icon}
                              <span>{value.title}</span>
                          </Link>
                      </li>
                   )
                  })
                }
                <span style={{color:'white'}}><hr/></span>
                </div>
            </li>
        </ul>
      </nav>
      </>
  );
};

export default Sidebar;
