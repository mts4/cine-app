import React, { useContext } from 'react'
import { MoviesContext } from '../../contexts/MoviesProvider'
import SlidersMovies from '../common/slidersMovies/SlidersMovies'
import Slider from '../slider/Slider'

const MoviesTerror = () => {

    const { moviesTerror } = useContext( MoviesContext )

    return (
        <>
            <Slider />
            <div className="container">
                <div className="row mt-5">
                    <div className="col-12">
                        <h2>Peliculas de Terror</h2>
                    </div>
                    <SlidersMovies movies={moviesTerror} />
                </div>
            </div>
        </>
    )
}

export default MoviesTerror
