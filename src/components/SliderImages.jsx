import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSelector } from "react-redux";
import { produceWithPatches } from "immer";

const NextArrow = ({ onClick }) => {
    return (
      <div className="nextArrow" onClick={onClick}>
        <BsChevronRight />
      </div>
    );
  };
  
  const PrevArrow = ({ onClick }) => {
    return (
      <div className="prevArrow" onClick={onClick}>
        <BsChevronLeft />
      </div>
    );
  };
export default function SliderImages(props,{slidesToShow = 3 }){


    //State 
    const [idSlider, setIdSlider] = useState()

    // Store novels
    const storeNovels = useSelector(state => state.novels)

    const storeImages = storeNovels.map(item => item)

    const [imageIndex, setImageIndex] = useState(0);

    
    const settings = {
      centerMode: true,
      infinite: true,
      dots: false,
      speed: 300,
      slidesToShow: slidesToShow,
      centerPadding: 1,
      swipeToSlide: true,
      focusOnSelect: true,
      beforeChange: (current, next) => setImageIndex(next),
      responsive: [
        {
          breakpoint: 1490,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
          },
        },
        {
          breakpoint: 820,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1,
          },
        },
      ],

      
    };
  
    //SendId  
    
    const onHandleSendIdActive = (value) => {
          props.idFromSlider(value)
    }

    const templateImages = storeImages.map((image, idx) => {
      if (image !== null) {
        return (
          <div
            className={idx === imageIndex ? "activeSlide" : "slide"}
            key={image.id}
            onClick={() => image.id ? onHandleSendIdActive(image.id) : onHandleSendIdActive(0) }
          >
            <div className="slideWrapper">
                 {image.code ? image.code : <img src={image.img} alt={image.alt}   />}
            </div>
          </div>
        );
      }
      return null;
    });
      
    return <>
        <Slider {...settings}>{templateImages}</Slider>
    </>
}