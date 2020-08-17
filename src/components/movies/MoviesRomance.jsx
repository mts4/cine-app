import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../contexts/MoviesProvider'
import SlidersMovies from '../common/slidersMovies/SlidersMovies'
import SliderTop from '../sliderTop/SliderTop'

const MoviesRomance = () => {

    const { getMoviesRomance, moviesRomance } = useContext( MoviesContext )

    useEffect(() => getMoviesRomance(), []);

    return (
        <>
            <SliderTop />
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
