import React from 'react'
import './header.components.styles.css'

import {
    BrowserRouter as Router,
    Switch,
    Route,
    NavLink
  } from "react-router-dom";


import Icon from '../icon/Icon';
import Home from '../../home/Home';
import MoviesAction from '../../movies/MoviesAction';
import MoviesTerror from '../../movies/MoviesTerror';
import MoviesRomance from '../../movies/MoviesRomance';


const Header = () => {

    React.useEffect(() => {
        document.querySelector('.hamburger').addEventListener('click', function() {
            document.querySelector('.nav-items').classList.toggle('show');
            document.querySelectorAll('.nav-item').forEach(item => item.classList.toggle('fade'));
        })

       const header = document.querySelector('.menu-nav')

       window.onscroll = function(){
           const top = window.scrollY

           if(top >=600){
                header.classList.add('active')
           }
           else{
                header.classList.remove('active')
           }
       }
    })

    return (
        <Router>
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
            <Switch>
                <Route path="/" exact>
                    <Home />
                </Route>
                <Route path="/accion">
                    <MoviesAction />
                </Route>
                <Route path="/terror">
                    <MoviesTerror />
                </Route>
                <Route path="/romance">
                    <MoviesRomance />
                </Route>
            </Switch>
        </Router>
    )
}

export default Header
