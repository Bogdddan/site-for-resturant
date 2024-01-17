import React from "react";
import { IoIosCafe } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { slide as Menu } from 'react-burger-menu'


function HomePage() {
  return (
    <div>
      <nav>
        <IoIosCafe />
        <div>
          <RxHamburgerMenu />
          <Menu>
            <a id="home" >Home</a>
            <a id="about" >About</a>
            <a id="contact" >Contact</a>
          </Menu>
        </div>
      </nav>
    </div>
  )
}

export default HomePage;

{/* <Menu>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="about" className="menu-item" href="/about">About</a>
        <a id="contact" className="menu-item" href="/contact">Contact</a>
        <a onClick={ this.showSettings } className="menu-item--small" href="">Settings</a>
      </Menu> */}