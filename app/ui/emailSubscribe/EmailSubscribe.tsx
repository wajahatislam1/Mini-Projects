import Image from "next/image";

const EmailSubscribe = () => {
  return (
    <>
      {/* Background Container */}
      <div className="flex items-center justify-center h-screen bg-zinc-700">
        {/* Card */}
        <div className="bg-zince-800 p-2 mx-6 rounded-2xl bg-zinc-800">
          {/* Flex Container */}
          <div className="flex flex-col md:flex-row rounded-l-xl ">
            {/* Image  */}
            <img
              className="object-fit rounded-xl h-80 md:h-64 md:rounded-l-xl md:rounded-r-none transform hover:scale-105 duration-200"
              src="/emailSubscribe/image.jpg"
              alt="Profile Card"
            />
            {/* Content */}
            <div className="p-6 md:p-12">
              <h2 className="font-serif text-xl font-medium text-center text-white md:text-left">
                Get Coding tips in your ingox weekly
              </h2>
              <p className="max-w-xs my-4 ml-10 text-xs leading-5 tracking-wide text-center text-white md:text-left md:ml-0">
                Improve you coding skills. Sign up for the weekly coding newsletter
              </p>
              <div className="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                <input
                  type="text"
                  placeholder="Enter your email address"
                  className="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs placeholder:text-center
                  md:text-left placeholder:md:text-left focus:outline-none"
                />
                <button className="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500 hover:bg-lime-700 hover:text-white duration-500">
                  Subscribe
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EmailSubscribe;
