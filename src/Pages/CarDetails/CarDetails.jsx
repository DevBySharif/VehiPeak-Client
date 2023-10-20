import { useState } from "react";
import { useParams } from "react-router-dom";

const CarDetails = () => {
  const { id } = useParams();
  const [details, setDetails] = useState([]);
  const [selectedCar, setSelectedCar] = useState({});

  return (
    <div>
      <CarDetails selectedCar={selectedCar}></CarDetails>
    </div>
  );
};

export default CarDetails;
