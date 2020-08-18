import React from 'react'
import SliderPrincipal from '../SliderPrincipal/SliderPrincipal'
import MoviesTop from '../movies/MoviesTop'
import Suscribe from '../suscribe/Suscribe'


const Home = () => {
    return (
        <>
            <SliderPrincipal />
            <div className="container">
                <MoviesTop />
            </div>
            <div className="container-fluid p-0">
                <Suscribe />
            </div>
        </>
    )
}

export default Home
