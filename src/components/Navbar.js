import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import {IconContext} from 'react-icons';
import { SidebarData } from './SidebarData';
import './style.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false)
    const location = useLocation();
    const showSidebar = () => setSidebar(!sidebar)
    return (
        <IconContext.Provider value={{color: 'white'}}>
            <div className='navbar'>
                <Link to="#" className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar}/>
                </Link>
                <div className="nav-name">
                    {location.pathname.substring(1, location.pathname.length).toUpperCase()}
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars-close'>
                            <FaIcons.FaBars />
                        </Link>
                    </li>
                  {SidebarData.map((item, index) => {
                      return (
                          <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                  <span>{item.icon}</span>
                                  <span>{item.title}</span>
                              </Link>
                          </li>
                      )
                  })}
                </ul>
            </nav>
        </IconContext.Provider>
    )
}

export default Navbar