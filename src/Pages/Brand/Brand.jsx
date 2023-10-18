import React, { useEffect, useState } from "react";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import { EffectCoverflow, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const Brand = () => {
  const [brand, setBrand] = useState([]);
  const [loading, setloading] = useState(true);
  useEffect(() => {
    fetch("brand.json")
      .then((res) => res.json())
      .then((data) => {
        setBrand(data.cars);
      });
    setloading(false);
  }, []);
  return (
    <div className="max-w-[1400px] mx-auto my-12">
      <h1 className="text-5xl font-extrabold my-4">Popular Make</h1>
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination]}
        className="mySwiper"
      >
        {loading ? (
          <p>Loading...</p>
        ) : (
          brand.map((item) => (
            <SwiperSlide className="w-[400px] h-[400px]" key={item.id}>
              <h3 className="text-3xl font-bold text-[#ff4605]">
                {item.brand}
              </h3>
              <img
                className="w-[400px] h-[400px]"
                src={item.image_url}
                alt={item.brand}
              />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </div>
  );
};

export default Brand;
