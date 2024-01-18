import React from "react";
import { IoIosCafe } from "react-icons/io";
import { NavLink } from "react-router-dom";
// import { slide as Menu } from 'react-burger-menu'


function HomePage() {
  return (
    <div>
      <nav>
        <IoIosCafe />
        
          {/* <Menu> */}
          <NavLink to='/menu'>Menu</NavLink>
          <NavLink to='about'>About us</NavLink>
          {/* </Menu> */}
      </nav>
    </div>
  )
}

export default HomePage;