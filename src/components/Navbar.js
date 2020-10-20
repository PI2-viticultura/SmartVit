import React, {useState} from 'react';
import { Link, useLocation } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {IconContext} from 'react-icons';
import { SidebarData } from './SidebarData';
import api from '../services/api';
import './style.css';

function Navbar() {
    const [sidebar, setSidebar] = useState(false);
    const [notifications, setNotifications] = React.useState([]);
    const location = useLocation();
    const showSidebar = () => setSidebar(!sidebar);
    let var_notification = [];

    React.useEffect(() => {
        let repeat;

        async function fetchData() {
            try {
                await api.get("/notification/user_id",
                {
                    "Content-Type": "application/json",
                    "X-Requested-With": "XMLHttpRequest"
                }).then((res) => {
                    var_notification = res.data.filter((element) => typeof element.message === "string");
                    setNotifications(var_notification);
                }).catch((error) => {
                });
                repeat = setTimeout(fetchData, 60000); // request again after a minute
            } catch (error) {
                console.error(error.message);
                repeat = setTimeout(fetchData, 60000);
            }
        }

        fetchData();

        return () => {
            if (repeat) {
                clearTimeout(repeat);
            }
        }
    }, []);

    return (
        <IconContext.Provider value={{color: 'white'}}>
            <div className='navbar'>
                <div>
                    <Link to="#" className='menu-bars'>
                        <FaIcons.FaBars onClick={showSidebar}/>
                    </Link>
                    {/* <div className="nav-name">
                        {location.pathname.substring(1, location.pathname.length).toUpperCase()}
                    </div> */}
                </div>
                <div className='notification'>
                    <Link to="/notifications">
                        <span><FaIcons.FaBell/></span>
                        {notifications.length > 0 &&
                            <span className="badge">{notifications.length}</span>
                        }
                    </Link>
                </div>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className="navbar-toggle">
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineClose />
                        </Link>
                    </li>
                  {SidebarData.map((item, index) => {
                      return (
                          <li key={index} className={item.cName}>
                              <Link to={item.path}>
                                  {item.icon}
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