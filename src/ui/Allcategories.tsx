import React, { useEffect, useState } from "react";
import { getData } from "../lib";
import { Link } from "react-router-dom";
import { CategoryProps } from "../../type";

const AllCategories = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCategories = async () => {
      const endpoint =
        "https://farm-e-store-backend.vercel.app/api/category/get-category";
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories", error);
        setError("Failed to load categories. Please try again later.");
      } finally {
        setLoading(false);
      }
    };

    fetchCategories();
  }, []);

  return (
    <div className="p-5">
      <h2 className="text-xl font-bold mb-4">All Categories</h2>
      {loading ? (
        <p>Loading...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
          {categories.map((item: CategoryProps) => (
            <Link
              to={`/category/${item._id}/subcategory`} // Link to the subcategory route
              key={item._id}
              className="flex flex-col items-center text-center border rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <div className="w-24 h-24 bg-gray-200 rounded-full overflow-hidden mb-2">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="text-md font-semibold">{item.title}</p>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default AllCategories;