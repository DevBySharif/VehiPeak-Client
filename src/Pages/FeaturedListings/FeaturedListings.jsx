import { useEffect, useState } from "react";
import FeaturedCard from "./FeaturedCard";

const FeaturedListings = () => {
  const [featuredCars, setFeaturedCars] = useState([]);
  useEffect(() => {
    fetch("http://localhost:5005/cars")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedCars(data);
      });
  }, []);
  return (
    <div>
      <div className="lg:max-w-[1400px] mx-auto my-12">
        <h1 className="text-5xl font-extrabold mb-4">Featured Listing</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featuredCars?.map((car) => (
            <FeaturedCard key={car._id} car={car}></FeaturedCard>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedListings;
