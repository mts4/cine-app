import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../contexts/MoviesProvider'
import SlidersMovies from '../slidersMovies/SlidersMovies'
import SliderPrincipal from '../SliderPrincipal/SliderPrincipal'

const MoviesRomance = () => {

    const { getMoviesRomance, moviesRomance } = useContext( MoviesContext )

    useEffect(() => getMoviesRomance(), []);

    return (
        <>
            <SliderPrincipal />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <h2>Peliculas de Romance</h2>
                    </div>
                    <SlidersMovies movies={moviesRomance} />
                </div>
            </div>
        </>
    )
}

export default MoviesRomance
