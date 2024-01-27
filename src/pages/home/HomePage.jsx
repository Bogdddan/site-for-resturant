import React from "react";
// import { IoIosCafe } from "react-icons/io";
import { NavLink } from "react-router-dom";
// import { slide as Menu } from 'react-burger-menu'
import { FaInstagram } from "react-icons/fa";
import { RiFacebookCircleLine } from "react-icons/ri";



function HomePage() {
  return (
    <div>
      <nav>
        {/* <IoIosCafe /> */}
        {/* <Menu> */}
        <span>BARATIE</span>
        <NavLink to='/visit'>visit</NavLink>
        <NavLink to='/menu'>Menu</NavLink>
        <NavLink to='about'>About us</NavLink>
        <span><FaInstagram /></span>
        <span><RiFacebookCircleLine /></span>
        {/* </Menu> */}
      </nav>
      <h3>   Time, dedication,<br />
        and darn good eats.</h3>
      <p>If breakfast is the most important meal of the day, then brunch is the most important
        meal of the week. We treat it with the pomp and ceremony it deserves, using farm-
        fresh ingredients to craft food you’ll spend the next six days dreaming about.
      </p>
      <button>Our Story</button>
    </div>
  )
}

export default HomePage;