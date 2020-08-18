import React, { useContext } from 'react'
import { MoviesContext } from '../../contexts/MoviesProvider'
import SlidersMovies from '../slidersMovies/SlidersMovies'

const MoviesTop = () => {

    const { moviesPopular } = useContext( MoviesContext )

    return (
        <div className="row mt-7">
            <div className="col-12">
                <h2>Top de Peliculas</h2>
            </div>
            <SlidersMovies movies={moviesPopular} />
        </div>
    )
}

export default MoviesTop
