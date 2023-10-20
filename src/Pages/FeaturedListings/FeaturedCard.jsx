const FeaturedCard = ({ car }) => {
  const { photo, brandName, modelName, year, fuel, price, transmission } = car;
  return (
    <div>
      <div className="card card-compact  bg-[#222732] shadow-xl text-white">
        <figure>
          <img className="h-[250px] w-full" src={photo} alt="Shoes" />
        </figure>
        <div className="card-body">
          <h2 className="card-title ">
            {brandName}, {modelName}
          </h2>
          <hr />
          <div className="flex items-center justify-evenly">
            <button className="bg-[#ff4605] px-4 py-3 font-bold rounded-lg">
              {year}
            </button>
            <div className="lg:flex gap-3">
              <p className="text-lg">{transmission}</p>
              <p className="text-lg">{fuel}</p>
            </div>
            <h2 className="text-xl font-bold">${price}</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCard;
