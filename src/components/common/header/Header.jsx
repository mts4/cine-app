import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"
import Home from '../../home/Home'
import MoviesAction from '../../movies/MoviesAction'
import MoviesTerror from '../../movies/MoviesTerror'
import MoviesRomance from '../../movies/MoviesRomance'
import Navbar from './Navbar'


const Header = () => {
    return (
        <Router>
            <Navbar />
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
