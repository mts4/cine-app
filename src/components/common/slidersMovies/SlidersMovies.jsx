import React from 'react'
import './slidersmovies.components.styles.css'

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const SlidersMovies = ({movies}) => {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 3,
        speed: 2000,
        autoplaySpeed: 3000,
        prevArrow: false,
        nextArrow: false,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 900,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots:false
              }
            }
          ]
      };

    return (
        <div className="col-12">
            <Slider {...settings} className="sliderMovies">
              {
                  movies.map(item => (
                      <div key={item.id} className="sliderCard">
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
            </Slider>
        </div>
    )
}

export default SlidersMovies
