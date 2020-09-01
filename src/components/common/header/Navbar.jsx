import React from 'react'
import './header.components.styles.css'
import Icon from '../icon/Icon'

import { NavLink } from "react-router-dom";

const Navbar = () => {

     React.useEffect(() => {
          document.querySelector('.hamburger').addEventListener('click', function() {
               document.querySelector('.nav-items').classList.toggle('show')
               document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('fade'))
          })
          const header = document.querySelector('.menu-nav')
          window.onscroll = function(){
               const top = window.scrollY
               top >=50 ? ( header.classList.add('active') ) : ( header.classList.remove('active') )
          }
     })

     return (
          <nav className="menu-nav">
               <div className="hamburger">
               <input type="checkbox" className="iconMenu"/>
                    <span className="line"></span>
                    <span className="line"></span>
                    <span className="line"></span>
               </div>
               <Icon />
               <ul className="nav-items">
                    <li className="nav-item">
                         <NavLink to="/" exact>Inicio</NavLink>
                    </li>
                    <li className="nav-item">
                         <NavLink to="/accion">Acción</NavLink>
                    </li>
                    <li className="nav-item">
                         <NavLink to="/terror">Terror</NavLink>
                    </li>
                    <li className="nav-item">
                         <NavLink to="/romance">Romance</NavLink>
                    </li>
                    <li className="nav-item">
                         <NavLink to="/contacto">Contacto</NavLink>
                    </li>
               </ul>
          </nav>
     )
}

export default Navbar
