import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import Navbar from "../../Component/Navbar/Navbar";
import FeaturedCard from "./FeaturedCard";

const FeaturedListings = () => {
  const [featuredCars, setFeaturedCars] = useState([]);
  const [isShow, setIsShow] = useState(false);
  const location = useLocation();
  const isFeatureRoute = location.pathname === "/featuredCars";
  useEffect(() => {
    fetch("http://localhost:5005/cars")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedCars(data);
      });
  }, []);
  return (
    <div>
      {isFeatureRoute ? <Navbar></Navbar> : ""}
      <div className="lg:max-w-[1400px] mx-auto my-12">
        <h1 className="text-5xl font-extrabold mb-4">Featured Listing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mx-4">
          {isShow
            ? featuredCars?.map((car) => (
                <FeaturedCard key={car._id} car={car}></FeaturedCard>
              ))
            : featuredCars
                ?.slice(0, 6)
                .map((car) => (
                  <FeaturedCard key={car._id} car={car}></FeaturedCard>
                ))}
        </div>
      </div>
      <div>
        {featuredCars.length > 6 && (
          <button
            onClick={() => setIsShow(!isShow)}
            className="px-5 py-3 bg-[#ff4605] text-lg text-white font-bold block mx-auto rounded-md"
          >
            {isShow ? "See less" : "See more"}
          </button>
        )}
      </div>
    </div>
  );
};

export default FeaturedListings;
