import { useEffect, useState } from "react";
import { FaArrowLeft } from "react-icons/fa";
import { Link, useParams } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateProduct = () => {
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

  const handleUpdateProduct = (event) => {
    event.preventDefault();
    const form = event.target;
    const brandName = form.brandName.value;
    const modelName = form.modelName.value;
    const type = form.type.value;
    const year = form.year.value;
    const transmission = form.transmission.value;
    const fuel = form.fuel.value;
    const price = form.price.value;
    const description = form.description.value;
    const photo = form.photo.value;
    const rating = form.rating.value;

    const newCars = {
      brandName,
      modelName,
      type,
      year,
      transmission,
      fuel,
      price,
      description,
      photo,
      rating,
    };

    fetch(`http://localhost:5005/cars/${foundCar._id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCars),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Product Updated successfully",
            icon: "Success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="p-24">
        <Link to="/">
          <button className="flex justify-center gap-2 items-center bg-[#f27426] px-4 py-3 mb-4 rounded-lg text-white font-semibold">
            <FaArrowLeft></FaArrowLeft> Back to Home
          </button>
        </Link>
        <h2 className="text-3xl font-extrabold text-center">Update a Car</h2>
        <form onSubmit={handleUpdateProduct}>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Brand Name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="brandName"
                  defaultValue={foundCar.brandName}
                  placeholder="Brand Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Model Name</span>
              </label>
              <label>
                <input
                  type="text"
                  name="modelName"
                  defaultValue={foundCar.modelName}
                  placeholder="Model Name"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Year</span>
              </label>
              <label>
                <input
                  type="text"
                  name="year"
                  defaultValue={foundCar.year}
                  placeholder="Year"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Transmission</span>
              </label>
              <label>
                <input
                  type="text"
                  name="transmission"
                  defaultValue={foundCar.transmission}
                  placeholder="Transmission"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Type</span>
              </label>
              <label>
                <input
                  type="text"
                  name="type"
                  defaultValue={foundCar.type}
                  placeholder="Type"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Fuel</span>
              </label>
              <label>
                <input
                  type="text"
                  name="fuel"
                  defaultValue={foundCar.fuel}
                  placeholder="Fuel"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Price(USD)</span>
              </label>
              <label>
                <input
                  type="text"
                  name="price"
                  defaultValue={foundCar.price}
                  placeholder="Price"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Rating</span>
              </label>
              <label>
                <input
                  type="text"
                  name="rating"
                  defaultValue={foundCar.rating}
                  placeholder="Rating"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>

          <div className="md:flex mb-8">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label>
                <input
                  type="text"
                  name="description"
                  defaultValue={foundCar.description}
                  placeholder="Description"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 ml-4">
              <label className="label">
                <span className="label-text">Photo URL</span>
              </label>
              <label>
                <input
                  type="text"
                  name="photo"
                  defaultValue={foundCar.photo}
                  placeholder="Photo URL"
                  className="input input-bordered w-full"
                />
              </label>
            </div>
          </div>
          <input
            type="submit"
            value="Update Car"
            className="btn-block bg-[#f27426] py-3 rounded-lg text-white font-bold"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateProduct;
