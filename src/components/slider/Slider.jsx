import React from 'react'
import { Zoom } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './slider.components.styles.css'

//Import Image Sliders
import SlideDesktop1 from '../../assets/img/slider1.jpg'
import SlideMobile1 from '../../assets/img/slider1-mobile.jpg'

import SlideDesktop2 from '../../assets/img/slider2.jpg'
import SlideMobile2 from '../../assets/img/slider2-mobile.jpg'

import SlideDesktop3 from '../../assets/img/slider3.jpg'
import SlideMobile3 from '../../assets/img/slider3-mobile.jpg'

const Slider = () => {

    //Array Images and text
    const slide = {
      results : [
        {
          urlDesktop : `${SlideDesktop1}`,
          urlMobile : `${SlideMobile1}`,
          text : "¡Disfruta con tu pareja!"
        },
        {
          urlDesktop : `${SlideDesktop2}`,
          urlMobile : `${SlideMobile2}`,
          text : "Tus hijos se divertiran"
        },
        {
          urlDesktop : `${SlideDesktop3}`,
          urlMobile : `${SlideMobile3}`,
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
                  <img  className="img-fluid imgSlider slideDesktop" src={item.urlDesktop} alt="imagen del slider Desktop" />
                  <img  className="img-fluid imgSlider slideMobile" src={item.urlMobile} alt="imagen del slider Mobile" />
                  <span className="txtTitle">{item.text}</span>
                </div>
              )
            }
          </Zoom>
      </div>
    )
}

export default Slider
