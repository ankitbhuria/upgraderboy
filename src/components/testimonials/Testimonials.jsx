import React from 'react'
import Data from './Data'
import "./testimonials.css";
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import "swiper/css";

import 'swiper/css/scrollbar';
import "swiper/css/navigation";
import "swiper/css/pagination";
// import './styles.css';

// import required modules
import { Scrollbar } from 'swiper/modules';
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
function Testimonials() {
  return (
    <>
      <section className="testimonial container section" id="testimonial">
        <h2 className="section__title">My Clients Say</h2>

        <span className="section__subtitle">Testimonials</span>
        <Swiper
          scrollbar={{
            hide: false,
          }}
          // slidesPerView={4}
          spaceBetween={24}
          modules={[Scrollbar, Navigation, Pagination, Mousewheel, Keyboard]}
          swipeHandler={true}
          grabCursor={true}
          loop={true}
          cssMode={true}
          breakpoints={{
            576: {
              width: 576,
              slidesPerView: 1,
            },
            640: {
              width: 640,
              slidesPerView: 2,
            },
            // when window width is >= 768px
            1024: {
              width: 1024,
              slidesPerView: 4,
            },
          }}
          mousewheel={true}
          keyboard={true}
          className="mySwiper testimonial__container"
        >
          {Data.map(({ id, image, title, description }) => {
            return (
              <>
                <SwiperSlide className="testimonial__card" key={id}>
                  <img src={image} alt="" className="testimonial__img" />
                  <h3 className="testimonial__name">{title}</h3>
                  <p className="testimonial__description">{description}</p>
                </SwiperSlide>
              </>
            );
          })}
        </Swiper>
      </section>
    </>
  );
}

export default Testimonials