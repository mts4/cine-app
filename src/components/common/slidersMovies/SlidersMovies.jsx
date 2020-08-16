import React from 'react'
import './slidersmovies.components.styles.css'

const SlidersMovies = ({movies}) => {

    return (
        <>
            {
            movies.map(item => (
                <div className="col-12 col-md-3" key={item.id}>
                    <div className="card movie_card" >
                        <img src={"https://image.tmdb.org/t/p/original" + item.poster_path} className="card-img-top" alt="Imagen de cartelera" />
                        <div className="card-body">
                            <a href="http://" target="_blank" rel="noopener noreferrer">
                                <i className="fas fa-play play_button" data-toggle="tooltip" data-placement="bottom" title="Play Trailer">
                                </i>
                            </a>
                            <h5 className="card-title">{item.title}</h5>
                            <span className="movie_info">{item.release_date}</span>
                            <span className="movie_info float-right">
                                <i className="fas fa-star"></i> {item.vote_average}
                            </span>
                        </div>
                    </div>
                </div>
            ))
        }
        </>
    )
}

export default SlidersMovies
