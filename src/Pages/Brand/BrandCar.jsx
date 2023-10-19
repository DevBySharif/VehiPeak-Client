import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 max-w-[1400px] mx-auto gap-4">
        {matchedCars.length > 0 ? (
          matchedCars.map((car) => (
            <CarsByBrand key={car._id} car={car}></CarsByBrand>
          ))
        ) : (
          <p>No cars found for the brand: {brand}</p>
        )}
      </div>
    </div>
  );
};

export default BrandCar;
