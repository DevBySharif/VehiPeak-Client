import { FaArrowLeft } from "react-icons/fa";
import { Link, useLoaderData } from "react-router-dom";

const UpdateProduct = () => {
  const loadedCar = useLoaderData();
  console.log(loadedCar);
  const {
    photo,
    brandName,
    modelName,
    year,
    transmission,
    type,
    fuel,
    price,
    rating,
    description,
    _id,
  } = loadedCar;
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

    // fetch("https://vehi-peak-server-side-4xwmy159y-devshari.vercel.app/cars", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(newCars),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //   });
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
                  defaultValue={brandName}
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
                  defaultValue={modelName}
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
                  defaultValue={year}
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
                  defaultValue={transmission}
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
                  defaultValue={type}
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
                  defaultValue={fuel}
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
                  defaultValue={price}
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
                  defaultValue={rating}
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
                  defaultValue={description}
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
                  defaultValue={photo}
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
