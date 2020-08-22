import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';
import * as Fa from 'react-icons/fa';
import * as Ai from 'react-icons/ai';
import { IconContext } from 'react-icons';

function NavBar({ sidebarData }) {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);
  return (
    <>
      <IconContext.Provider value={{color: sidebar? 'rgb(206, 195, 94)' : 'fff'}}>
        <div className="nav">
          <Link className="menu__bars" to="#">
            <Fa.FaBars onClick={showSidebar} />
          </Link>
        </div>
        <nav className={sidebar ? 'nav__menu active' : 'nav__menu'}>
          <div className="nav__item">
            <Link className="menu__bars" to="#">
              <Ai.AiOutlineClose onClick={showSidebar} />
            </Link>
          </div>
          {sidebarData.map((link, i) => {
            return (
              <div className={link.cName} key={i}>
                <Link to={link.path}>
                  {link.icon}
                  <span>{link.title}</span>
                </Link>
              </div>
            );
          })}
        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavBar;
