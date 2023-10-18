const AddProduct = () => {
  const handleAddProduct = (event) => {
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
    };
    console.log(newCars);

    fetch("http://localhost:5005/cars", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCars),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  return (
    <div className="p-24">
      <h2 className="text-3xl font-extrabold">Add a Cars</h2>
      <form onSubmit={handleAddProduct}>
        <div className="md:flex mb-8">
          <div className="form-control md:w-1/2">
            <label className="label">
              <span className="label-text">Brand Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="brandName"
                placeholder="Brand Name"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Model Name</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="modelName"
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
            <label className="input-group">
              <input
                type="text"
                name="year"
                placeholder="Year"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Transmission</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="transmission"
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
            <label className="input-group">
              <input
                type="text"
                name="type"
                placeholder="Type"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Fuel</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="fuel"
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
            <label className="input-group">
              <input
                type="text"
                name="price"
                placeholder="Price"
                className="input input-bordered w-full"
              />
            </label>
          </div>
          <div className="form-control md:w-1/2 ml-4">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="description"
                placeholder="Description"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>

        <div className="mb-8">
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Photo URL</span>
            </label>
            <label className="input-group">
              <input
                type="text"
                name="photo"
                placeholder="Photo URL"
                className="input input-bordered w-full"
              />
            </label>
          </div>
        </div>
        <input type="submit" value="Add Car" className="btn btn-block" />
      </form>
    </div>
  );
};

export default AddProduct;