import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { FreeMode, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import poster1 from "../../assets/poster1 (1).png";
import poster2 from "../../assets/poster1 (2).png";
import poster3 from "../../assets/poster1 (3).png";
import poster4 from "../../assets/poster1 (4).png";
import poster5 from "../../assets/poster1 (5).png";
import poster6 from "../../assets/poster1 (6).png";
import poster7 from "../../assets/poster1 (7).png";
import CarsByBrand from "./CarsByBrand";

const BrandCar = () => {
  const [brandCars, setBrandCars] = useState([]);
  const { brand } = useParams();
  useEffect(() => {
    fetch("http://localhost:5005/cars")
      .then((res) => res.json())
      .then((data) => {
        setBrandCars(data);
      });
  }, []);

  const matchedCars = brandCars.filter((car) => car.brandName === brand);

  return (
    <div>
      <div>
        {matchedCars.length > 1 ? (
          <Swiper
            slidesPerView={3}
            spaceBetween={20}
            freeMode={true}
            pagination={{
              clickable: true,
            }}
            modules={[FreeMode, Pagination]}
            className="pt-12"
          >
            <SwiperSlide style={{ width: "300px", height: "700px" }}>
              <img src={poster1} alt="" />
            </SwiperSlide>
            <SwiperSlide style={{ width: "300px", height: "700px" }}>
              <img src={poster2} alt="" />
            </SwiperSlide>
            <SwiperSlide style={{ width: "300px", height: "700px" }}>
              <img src={poster3} alt="" />
            </SwiperSlide>
            <SwiperSlide style={{ width: "300px", height: "700px" }}>
              <img src={poster4} alt="" />
            </SwiperSlide>
            <SwiperSlide style={{ width: "300px", height: "700px" }}>
              <img src={poster5} alt="" />
            </SwiperSlide>
            <SwiperSlide style={{ width: "300px", height: "700px" }}>
              <img src={poster6} alt="" />
            </SwiperSlide>
            <SwiperSlide style={{ width: "300px", height: "700px" }}>
              <img src={poster7} alt="" />
            </SwiperSlide>
          </Swiper>
        ) : (
          ""
        )}
      </div>
      <h1 className="text-5xl font-bold my-5 text-center">
        Our Collections of {brand}
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto gap-4">
        {matchedCars.length > 0 ? (
          matchedCars.map((car) => (
            <CarsByBrand key={car._id} car={car}></CarsByBrand>
          ))
        ) : (
          <p className="text-5xl font-bold col-span-3 text-center">
            No cars found for the brand: {brand}
          </p>
        )}
      </div>
    </div>
  );
};

export default BrandCar;
