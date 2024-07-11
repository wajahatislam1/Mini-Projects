import React from "react";
import Link from "next/link";

const Home = () => {
  return (
    <div className="flex flex-col justify-center items-center mx-auto w-svw gap-2 ">
      <h1 className="">Welcome to the Home Page</h1>
      <div className="flex gap-2 items-center">
        <p>See Mini Projects here</p>
        <Link href="miniprojects">
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-1 px-2 rounded">
            Mini Projects
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
