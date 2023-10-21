import { useContext, useState } from "react";
import Rating from "react-rating";
import Swal from "sweetalert2";
import { AuthContext } from "../../Provider/AuthProvider";
import car4 from "../../assets/mixed-car/audi.png";
import car2 from "../../assets/mixed-car/bmw.png";
import car1 from "../../assets/mixed-car/chevrolet.png";
import car3 from "../../assets/mixed-car/fferari.png";
import car5 from "../../assets/mixed-car/mrec.png";

const DetailsCard = ({ foundCar }) => {
  const { user } = useContext(AuthContext);
  const email = user.email;
  console.log(email);
  const {
    brandName,
    modelName,
    year,
    transmission,
    fuel,
    price,
    description,
    photo,
    rating,
  } = foundCar;

  const [images, setImages] = useState({
    img2: car2,
    img3: car3,
    img1: car1,
    img4: car4,
    img5: car5,
  });

  const [activeImg, setActiveImage] = useState(images.img4);

  const handleAddToCart = () => {
    const cartData = { modelName, brandName, price, photo, email };
    fetch("https://vehi-peak-server-side.vercel.app/cart", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(cartData),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "success!",
            text: "Product added successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div>
      <div className="flex flex-col justify-between lg:flex-row gap-16  max-w-[1400px] mx-auto  my-12">
        <div className="flex flex-col gap-6 lg:w-2/4">
          <img
            src={activeImg}
            alt=""
            className="w-full h-1/2 aspect-square object-cover rounded-xl"
          />
          <div className="grid grid-flow-col justify-between h-24">
            <img
              src={photo}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(photo)}
            />
            <img
              src={images.img1}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img1)}
            />
            <img
              src={images.img2}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img2)}
            />
            <img
              src={images.img3}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img3)}
            />
            <img
              src={images.img4}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img4)}
            />
            <img
              src={images.img5}
              alt=""
              className="w-24 h-24 rounded-md cursor-pointer"
              onClick={() => setActiveImage(images.img5)}
            />
          </div>
        </div>
        {/* ABOUT */}
        <div className="flex flex-col ml-4 gap-4 lg:w-2/4">
          <div>
            <span className=" text-orange-600 font-semibold">{brandName}</span>
            <h1 className="text-3xl font-bold">{modelName}</h1>
          </div>
          <div className="space-x-4">
            <span className="font-semibold">{year}</span>
            <span>{transmission}</span>
            <span>{fuel}</span>
          </div>
          <div>
            <hr className="w-1/2" />
          </div>
          <p className="text-gray-700">{description}</p>
          <h6 className="text-4xl font-bold text-orange-600">$ {price}</h6>
          <div>
            <p className="block font-sans text-sm font-normal leading-normal text-[#ff4605] antialiased opacity-75">
              <Rating
                emptySymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>
                }
                fullSymbol={
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                      clipRule="evenodd"
                    />
                  </svg>
                }
                initialRating={rating}
                readonly
              />
            </p>
          </div>
          <div>
            <button
              onClick={handleAddToCart}
              className="bg-orange-800 text-white font-semibold py-3 px-16 rounded-xl h-full"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
