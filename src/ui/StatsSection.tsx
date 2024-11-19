import React from "react";

const StatsSection = () => {
  return (
    <div className="bg-gray-200 py-8 px-4 flex justify-around items-center text-center">
      <div className="flex-1">
        <h2 className="text-green-600 text-2xl sm:text-2xl font-bold">300+</h2>
        <p className="text-black font-medium text-sm sm:text-base">Brands</p>
      </div>
      <div className="flex-1">
        <h2 className="text-green-600 text-2xl sm:text-2xl font-bold">20M+</h2>
        <p className="text-black font-medium text-sm sm:text-base">Happy Farmers</p>
      </div>
      <div className="flex-1">
        <h2 className="text-green-600 text-2xl sm:text-2xl font-bold">5K+</h2>
        <p className="text-black font-medium text-sm sm:text-base">Products</p>
      </div>
      <div className="flex-1">
        <h2 className="text-green-600 text-2xl sm:text-2xl font-bold">15K+</h2>
        <p className="text-black font-medium text-sm sm:text-base">Pincodes Delivery</p>
      </div>
    </div>
  );
};

export default StatsSection;
