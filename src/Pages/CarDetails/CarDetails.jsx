import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import DetailsCard from "./DetailsCard";

const CarDetails = () => {
  const [loadedCars, setLoadedCars] = useState([]);
  const [foundCar, setFoundCar] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    fetch("http://localhost:5005/cars")
      .then((res) => res.json())
      .then((data) => {
        setLoadedCars(data);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const findCar = loading ? (
      <p>loading..</p>
    ) : (
      loadedCars.find((car) => car._id === id)
    );
    setFoundCar(findCar);
  }, [id, loadedCars, loading]);

  return (
    <div>
      <DetailsCard foundCar={foundCar}></DetailsCard>
    </div>
  );
};

export default CarDetails;
