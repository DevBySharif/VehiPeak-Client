import Swal from "sweetalert2";

const ProductCard = ({ product, cartData, setCartData }) => {
  const { photo, brandName, modelName, price, _id } = product;

  const handleDelete = (_id) => {
    console.log(_id);

    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        //
        fetch(`https://vehi-peak-server-side.vercel.app/cart/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire(
                "Deleted!",
                "Your product has been deleted.",
                "success"
              );
              const remaining = cartData.filter((data) => data._id !== _id);
              setCartData(remaining);
            }
          });
      }
    });
  };
  return (
    <div>
      <div className="flex items-center hover:bg-gray-100 -mx-8 px-6 py-5">
        <div className="flex w-2/5">
          <div className="w-20">
            <img className="h-24" src={photo} alt="" />
          </div>
          <div className="flex flex-col justify-between ml-4 flex-grow">
            <span className="font-bold text-sm text-black">{modelName}</span>
            <span className="text-red-500 text-xs">{brandName}</span>
            <a
              href="#"
              onClick={() => handleDelete(_id)}
              className="font-semibold hover:text-red-500 text-gray-500 text-xs"
            >
              Remove
            </a>
          </div>
        </div>
        <div className="flex justify-center w-1/5">
          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h384c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>

          <input
            className="mx-2 border text-center w-8"
            type="text"
            value="1"
          />

          <svg className="fill-current text-gray-600 w-3" viewBox="0 0 448 512">
            <path d="M416 208H272V64c0-17.67-14.33-32-32-32h-32c-17.67 0-32 14.33-32 32v144H32c-17.67 0-32 14.33-32 32v32c0 17.67 14.33 32 32 32h144v144c0 17.67 14.33 32 32 32h32c17.67 0 32-14.33 32-32V304h144c17.67 0 32-14.33 32-32v-32c0-17.67-14.33-32-32-32z" />
          </svg>
        </div>
        <span className="text-center w-1/5 font-semibold text-sm text-black">
          ${price}
        </span>
        <span className="text-center w-1/5 font-semibold text-sm text-black">
          $400.00
        </span>
      </div>
    </div>
  );
};

export default ProductCard;
