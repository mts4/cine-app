import React, { useContext, useEffect } from 'react'
import { MoviesContext } from '../../contexts/MoviesProvider'
import SlidersMovies from '../common/slidersMovies/SlidersMovies'
import SliderTop from '../sliderTop/SliderTop'

const MoviesTerror = () => {

    const { getMoviesTerror, moviesTerror } = useContext( MoviesContext )

    useEffect(() => getMoviesTerror(), []);

    return (
        <>
            <SliderTop />
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
