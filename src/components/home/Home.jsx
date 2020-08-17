import React from 'react'
import SliderTop from '../sliderTop/SliderTop'
import MoviesTop from '../movies/MoviesTop'


const Home = () => {
    return (
        <>
            <SliderTop />
            <div className="container">
                <MoviesTop />
            </div>
        </>
    )
}

export default Home
