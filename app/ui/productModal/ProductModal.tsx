import { FaBalanceScale } from "react-icons/fa";
import { FaHeart } from "react-icons/fa6";

const ProductModal = () => {
  return (
    /* Page Div */
    <div className="flex flex-col items-center justify-center gap-3 py-16 space-y-10 bg-white shadow-2xl md:px-12 md:justify-start md:items-start md:flex-row rounded-2xl md:space-y-0 md:space-x-0">
      {/*Image container */}
      <div>
        <img
          className="object-cover mx-auto duration-200 hover:scale-105 w-60"
          src="/product/headphone.png"
          alt="headphones"
        />
      </div>

      {/*Product Info */}
      <div className="flex flex-col items-center justify-center w-3/5 md:items-start md:justify-start">
        <p className="w-32 py-1 text-sm text-center bg-black rounded-2xl">Free Shipping</p>
        <h2 className="max-w-sm mt-6 text-2xl font-medium text-black bold">
          Razer Kraken Kitty EDT Gaming Headset Quartz
        </h2>
        <p className="mt-6 text-sm text-center text-black line-through md:text-left">$799</p>
        <p className="mt-3 text-5xl font-bold text-center text-black md:text-left ">$599</p>
        <p className="mt-3 text-sm font-light text-gray-400">
          This offer is valid until april 3 or as long as stock lasts!
        </p>
        <button className="w-full py-4 mt-6 text-lg duration-300 bg-blue-600 border-b-8 rounded-lg border-b-blue-700 hover:-translate-y-0.5 hover:shadow-lg">
          Add to cart
        </button>

        {/* Stock group */}
        <div className="flex items-center justify-center h-12 space-x-3 group">
          <div className="w-3 h-3 bg-green-400 rounded-full group-hover:animate-bounce"></div>
          <p className="text-sm text-black">50+ pcs in stock.</p>
        </div>

        {/* Buttons Container */}
        <div className="flex flex-col justify-center gap-1 md:gap-7 md:flex-row">
          <div className="flex flex-row items-center gap-2 p-3 px-6 mt-3 text-xs text-black duration-300 border border-gray-300 rounded-md md:text-md hover:-translate-y-0.5 hover:shadow-lg">
            <FaBalanceScale />
            Add to Cart
          </div>
          <div className="flex flex-row items-center gap-2 p-3 mt-3 text-xs text-black duration-300 border border-gray-300 rounded-md md:text-md hover:shadow-lg hover:-translate-y-0.5">
            <FaHeart />
            Add to wishlist
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
