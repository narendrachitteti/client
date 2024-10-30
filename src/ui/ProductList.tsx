import React, { useEffect, useState } from "react";
import axios from "axios";
import { HeartIcon, ShoppingCartIcon } from "@heroicons/react/24/outline";

const ProductSection = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          "https://farm-e-store-backend.vercel.app/api/product/get-product"
        );
        setProducts(response.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };
    fetchProducts();
  }, []);

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Products</h2>
          <a href="#" className="text-blue-500 hover:underline">
            View All
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-gray-200 rounded-lg shadow-md p-3 relative"
            >
              {/* Discount Badge */}
              <div className="absolute top-2 left-2 bg-orange-500 text-white text-xs font-bold px-2 py-1 rounded-tr-md">
                {Math.round(
                  ((product.mrp_price - product.sell_price) /
                    product.mrp_price) *
                    100
                )}
                % OFF
              </div>

              {/* Wishlist Icon */}
              <button className="absolute top-2 right-2">
                <HeartIcon className="w-5 h-5 text-gray-400 hover:text-red-500" />
              </button>

              {/* Product Image */}
              <img
                src={product.imageUrl}
                alt={product.title}
                className="w-full h-32 object-contain mb-3"
              />

              {/* Product Details */}
              <h3 className="text-md font-semibold truncate">
                {product.title}
              </h3>
              <p className="text-gray-500 text-xs mb-1">{product.sub_title}</p>

              {/* Price Details */}
              <div className="flex items-center space-x-2 mb-1">
                <div className="text-base font-bold text-green-600">
                  ₹{product.sell_price}
                </div>
                <div className="text-sm text-gray-500 line-through">
                  ₹{product.mrp_price}
                </div>
              </div>
              <p className="text-xs text-green-500 mb-1">
                Saved ₹{product.mrp_price - product.sell_price}
              </p>

              {/* Size Selector */}
              <div className="mt-2">
                <label className="text-xs font-semibold text-gray-600">
                  Size
                </label>
                <select className="border border-gray-300 rounded px-1 py-1 mt-1 w-full text-xs">
                  <option>Select Size</option>
                  <option>1 kg</option>
                  <option>500 gms</option>
                  <option>250 gms</option>
                </select>
              </div>

              {/* Add to Cart Button */}
              <button
                className="mt-3 flex items-center justify-center w-full py-1.5 text-white font-semibold rounded-lg text-sm"
                style={{ backgroundColor: "#FA9F3C" }} // Custom color
              >
                <ShoppingCartIcon className="w-4 h-4 mr-1" />
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProductSection;
