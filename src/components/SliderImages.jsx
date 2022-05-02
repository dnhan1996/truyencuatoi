import React, { useState } from "react";
import Slider from "react-slick";
import { BsChevronLeft, BsChevronRight } from "react-icons/bs";
import { useSelector } from "react-redux";

export default function SliderImages(props,{slidesToShow = 3 }){

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
    
        //link to details
        //useNavigate 

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
                 {image.code ? image.code : <img src={image.img} alt={image.alt} />}
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