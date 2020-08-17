import React, { useState, useEffect, createContext } from 'react'
import { FetchTopRated, FetchActionMovies, FetchHorrorMovies, FetchRomanceMovies } from './../constants/Requests'

export const MoviesContext = createContext()

const MoviesProvider = (props) => {

    const [moviesPopular, setMoviesPopular] = useState([])
    const [moviesAction, setMoviesAction] = useState([])
    const [moviesTerror, setMoviesTerror] = useState([])
    const [moviesRomance, setMoviesRomance] = useState([])

    useEffect(() => getMoviesPopular(), []);
    useEffect(() => getMoviesTerror(), []);
    useEffect(() => getMoviesRomance(), []);

    const getMoviesPopular = () => {
        fetch(FetchTopRated())
            .then(res => res.json())
            .then(data => setMoviesPopular(data.results))
            .catch(err => console.log(err));
    }

    const getMoviesAction = () => {
        fetch(FetchActionMovies())
            .then(res => res.json())
            .then(data => setMoviesAction(data.results))
            .catch(err => console.log(err))
    }

    const getMoviesTerror = () => {
        fetch(FetchHorrorMovies())
            .then(res => res.json())
            .then(data => setMoviesTerror(data.results))
            .catch(err => console.log(err))
    }

    const getMoviesRomance = () => {
        fetch(FetchRomanceMovies())
            .then(res => res.json())
            .then(data => setMoviesRomance(data.results))
            .catch(err => console.log(err))
    }

    return (
        <MoviesContext.Provider 
            value={{ 
                    moviesPopular, 
                    getMoviesAction,
                    moviesAction,
                    moviesTerror,
                    moviesRomance 
                }}>
            { props.children }
        </MoviesContext.Provider>
    )
}

export default MoviesProvider
