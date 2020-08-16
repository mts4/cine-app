import React from 'react'
import Slider from '../slider/Slider'
import MoviesTop from '../movies/MoviesTop'


const Home = () => {
    return (
        <>
            <Slider />
            <div className="container">
                <MoviesTop />
            </div>
        </>
    )
}

export default Home
