import React, { useContext } from 'react'
import { MoviesContext } from '../../contexts/MoviesProvider'
import SlidersMovies from '../common/slidersMovies/SlidersMovies'
import Slider from '../slider/Slider'

const MoviesRomance = () => {

    const { moviesRomance } = useContext( MoviesContext )

    return (
        <>
            <Slider />
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
