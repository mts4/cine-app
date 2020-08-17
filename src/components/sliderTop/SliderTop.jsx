import React from 'react'
import './slider.components.styles.css'

import Slider from "react-slick";
// Import css files
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

//Import Image Sliders
import SlideDesktop1 from '../../assets/img/slider1.jpg'
import SlideMobile1 from '../../assets/img/slider1-mobile.jpg'

import SlideDesktop2 from '../../assets/img/slider2.jpg'
import SlideMobile2 from '../../assets/img/slider2-mobile.jpg'

import SlideDesktop3 from '../../assets/img/slider3.jpg'
import SlideMobile3 from '../../assets/img/slider3-mobile.jpg'

const SliderTop = () => {

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

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 2000,
        autoplaySpeed: 3000,
        arrows: false
    };

    return (
          <Slider {...settings} className="sliderMovies">
            { 
              slide.results.map((item, index) => 
                <div key={index} className="boxSliderMovies">
                  <img  className="img-fluid imgSlider slideDesktop" src={item.urlDesktop} alt="imagen del slider Desktop" />
                  <img  className="img-fluid imgSlider slideMobile" src={item.urlMobile} alt="imagen del slider Mobile" />
                  <span className="txtTitle">{item.text}</span>
                </div>
              )
            }
          </Slider>
    )
}

export default SliderTop
