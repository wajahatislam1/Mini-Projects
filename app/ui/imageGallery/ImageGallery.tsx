import { FaSearch } from "react-icons/fa";

const ImageGallery = () => {
  const images = [
    "/project/email-subscribe.png",
    "/project/product-modal.png",
    "/project/profile-card.png",
    "/project/pricing-cards.png",
    "/project/email-subscribe.png",
    "/project/product-modal.png",
    "/project/profile-card.png",
    "/project/pricing-cards.png",
  ];
  return (
    <>
      {/* Search Container */}
      <div className="flex flex-col justify-between space-y-5 md:flex-row md:space-y-0">
        {/*Input and search icon container */}
        <div className="flex items-center justify-between border-b">
          <input
            type="text"
            className="ml-6 b-none md:w-80 placeholder:font-thin focus:outline-none"
            placeholder="Search"
          />
          <FaSearch color="gray" />
        </div>
        {/*Upload button container */}
        <button className="py-3 text-lg font-normal text-white duration-300 bg-black border border-black rounded-md shadow-2xl px-14 hover:bg-white hover:text-black md:w-auto">
          Upload
        </button>
      </div>

      {/*Gallery Container*/}
      <div className="grid gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* Image container */}
        {images.map((image, index) => (
          <div className="relative group">
            <img className="rounded-md w-72" src={image} />
            <div className="absolute bottom-0 left-0 right-0 p-2 px-4 text-white duration-500 bg-black opacity-0 group-hover:opacity-100 bg-opacity-30">
              <div className="flex items-center justify-center w-full">
                <p className="text-sm">{image}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default ImageGallery;
