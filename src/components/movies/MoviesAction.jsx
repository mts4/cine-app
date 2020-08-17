import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../contexts/MoviesProvider'
import SlidersMovies from '../common/slidersMovies/SlidersMovies'
import Slider from '../slider/Slider'

const MoviesAction = () => {

    const { getMoviesAction, moviesAction } = useContext( MoviesContext )

    useEffect(() => getMoviesAction(), []);

    return (
        <>
            <Slider />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <h2>Peliculas de Acción</h2>
                    </div>
                    <SlidersMovies movies={moviesAction} />
                </div>
            </div>
        </>
    )
}

export default MoviesAction
