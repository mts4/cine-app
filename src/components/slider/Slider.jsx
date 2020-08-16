import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slider.components.styles.css'

//Import Image Sliders
import Slide1 from '../../assets/img/slider1.jpg'
import Slide2 from '../../assets/img/slider2.jpg'
import Slide3 from '../../assets/img/slider3.jpg'

const Slider = () => {

    //Array Images and text
    const slide = {
      results : [
        {
          url : `${Slide1}`,
          text : "¡Disfruta con tu pareja!"
        },
        {
          url : `${Slide2}`,
          text : "Tus hijos se divertiran"
        },
        {
          url : `${Slide3}`,
          text : "Acompañado de Pop Corns"
        }
      ]
    }

    const zoomInProperties = {
      indicators: true,
      scale: 1.2,
      duration: 2500,
      transitionDuration: 500,
      infinite: true,
      arrows: false
    }

    return (
        <div className="slide-container sliderMovie">
          <Zoom {...zoomInProperties}>
            { 
              slide.results.map((item, index) => 
                <div key={index}>
                  <img  className="img-fluid imgSlider" src={item.url} alt="imagen del slider" />
                  <span className="txtTitle">{item.text}</span>
                </div>
              )
            }
          </Zoom>
      </div>
    )
}

export default Slider
