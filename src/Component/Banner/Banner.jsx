import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import car1 from "../../assets/car1.jpg";
import car2 from "../../assets/car2.jpg";
import car3 from "../../assets/car3.png";
import car4 from "../../assets/car4.jpg";
import car5 from "../../assets/car5.png";

const Banner = () => {
  return (
    <div>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        effect="fade"
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, EffectFade]}
        className="mySwiper"
      >
        <SwiperSlide>
          <img
            className=" bg-center h-[80vh] w-full object-cover"
            src={car1}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" bg-center h-[80vh] w-full object-cover"
            src={car2}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className=" bg-center h-[80vh] w-full object-cover"
            src={car3}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover bg-center  h-[80vh] w-full object-cover"
            src={car4}
            alt=""
          />
        </SwiperSlide>
        <SwiperSlide>
          <img
            className="bg-cover bg-center  h-[80vh] w-full object-cover"
            src={car5}
            alt=""
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
