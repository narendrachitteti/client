import React, { useEffect, useState } from "react";
import axios from "axios";

const BrandSection = () => {
  const [brands, setBrands] = useState([]);

  // Fetch the brand data from the API
  useEffect(() => {
    const fetchBrands = async () => {
      try {
        const response = await axios.get("https://farm-e-store-backend.vercel.app/api/brand/get-brand");
        setBrands(response.data);
      } catch (error) {
        console.error("Error fetching brands:", error);
      }
    };
    fetchBrands();
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Brands</h2>
          <a href="#" className="text-blue-500 hover:underline">
            View All
          </a>
        </div>
        
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide">
          {brands.map((brand) => (
            <div key={brand._id} className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md border border-gray-200 p-4 flex items-center justify-center">
              <img
                src={brand.imageUrl}
                alt={brand.title}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandSection;
