import React, { useState } from 'react'
import './navbar.css'
import { MdOutlineTravelExplore } from "react-icons/md";
import { AiFillCloseCircle } from "react-icons/ai";
import { MdOutlineMenu } from "react-icons/md";



const Navbar = () => {
  const [active, setActive] = useState('navBar')
  //Function to toggle the navbar
  const showNav = () =>{
    setActive('navBar activeNavbar')
  }
  //Function to close the navbar
  const closeNav = () =>{
    setActive('navBar')
  }

  return (
    <section className='navBarSection'>
      <header className='header flex'>

        <div className='logoDiv'>
          <a href="#" className='logo flex'>
            <h1> <MdOutlineTravelExplore className="icon"/>TripTales</h1>
          </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            
            <li className="navItem">
              <a href="#" className="navLink">Home</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Packages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">About</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Pages</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">News</a>
            </li>

            <li className="navItem">
              <a href="#" className="navLink">Contact</a>
            </li>

            <button className='btn'>
              <a href="#">BOOK NOW</a>
            </button>
          </ul>

          <div className="closeNavBar" onClick={closeNav}>
            <AiFillCloseCircle className='icon' />
          </div>
        </div>

        <div className="toggleNavbar" onClick={showNav}>
          <MdOutlineMenu className='icon'/>

        </div>
      </header>

    </section>
  )
}

export default Navbar
