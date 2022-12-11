import React from "react"
import { Swiper, SwiperSlide } from "swiper/react"

const Clients = () => {
  return (
    <section id="clients" className="clients">
      <div className="container" data-aos="zoom-out">
        <Swiper
          spaceBetween={50}
          slidesPerView={3}
          
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 4,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 5,
              spaceBetween: 50,
            },
          }}
        >
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-1.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-2.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-3.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-4.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-5.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-6.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-7.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              src="/assets/img/clients/client-8.png"
              className="img-fluid"
              alt=""
            />
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  )
}

export default Clients
