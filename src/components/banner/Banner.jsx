import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import bimg from '../../assets/banner__main.png'

import "./styles.css";

export default function Banner() {
  return (
    <div className="banner">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src={bimg} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={bimg} alt="" />
        </SwiperSlide>

        <SwiperSlide>
          <img src={bimg} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  );
}