import React from "react";

const Navbar = () => {
  return (
    <>
      <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto text-white px-4">
        <h1 className="w-fulll text-3xl font-bold text-[#00df9a]">REACT.</h1>
        <ul className="flex">
          <li className="p-4">Home</li>
        </ul>
        <div></div>
      </div>

    </>
  );
};

export default Navbar;
