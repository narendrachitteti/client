import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  FiSearch,
  FiHeart,
  FiUser,
  FiShoppingCart,
  FiMenu,
  FiX,
} from "react-icons/fi";
import farmLogo from "../assets/farmLogo.png";

const Navbar = () => {
  const [categories, setCategories] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [activeCategory, setActiveCategory] = useState(null);
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [selectedLanguage, setSelectedLanguage] = useState("en"); // Default language

  // Fetch categories from the API
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://farm-e-store-backend.vercel.app/api/category/get-category"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.error("Error fetching categories:", error);
      }
    };

    fetchCategories();
  }, []);

  // Fetch subcategories from the API
  useEffect(() => {
    const fetchSubCategories = async () => {
      try {
        const response = await fetch(
          "https://farm-e-store-backend.vercel.app/api/subcategory/get-sub-category"
        );
        const data = await response.json();
        setSubCategories(data);
      } catch (error) {
        console.error("Error fetching subcategories:", error);
      }
    };

    fetchSubCategories();
  }, []);

  // Language change handler
  const handleLanguageChange = (lang) => {
    setSelectedLanguage(lang);
    // You can add logic to change the app's language here
  };

  return (
    <nav className="bg-white border-b shadow-md relative z-50">
      {/* Top Bar */}
      <div className="flex justify-between items-center px-6 py-2 bg-green-800 text-white text-sm">
        <div className="flex space-x-4">
          <a href="#" className="hover:underline">
            Sell on Farm E-store
          </a>
          <a href="#" className="hover:underline">
            Bulk Order Inquiries
          </a>
          <a href="#" className="hover:underline">
            Corporate Site
          </a>
        </div>
        <div className="flex items-center space-x-2">
          <span className="bg-orange-500 px-2 py-1 rounded text-white font-semibold">
            Missed Call To Order: 1800-3000-2434
          </span>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="flex justify-between items-center px-6 py-4">
        {/* Logo */}
        <img src={farmLogo} alt="Logo" className="h-16" />

        {/* Search Input for All Screens */}
        <div className="flex-grow mx-2 relative max-w-xs">
          <input
            type="text"
            placeholder="Search..."
            className="w-full border border-gray-300 rounded-l px-4 py-2"
          />
          <div className="absolute right-0 top-0 bottom-0 flex items-center border-l border-gray-300 bg-[#FA9527] rounded-r px-2">
            <FiSearch className="w-5 h-5 text-white" />
          </div>
        </div>

        {/* Language Selector */}
        <select
          value={selectedLanguage}
          onChange={(e) => handleLanguageChange(e.target.value)}
          className="border border-gray-300 rounded px-2 py-1 text-gray-600"
        >
          <option value="en">English</option>
          <option value="es">Español</option>
          <option value="fr">Français</option>
          <option value="hi">हिन्दी</option>
        </select>

        {/* Icons for Mobile and Large Screens */}
        <div className="flex items-center space-x-4">
          {/* Mobile Icons */}
          <Link to="#" className="text-gray-600 hover:text-gray-800 lg:hidden">
            <FiHeart className="w-5 h-5" />
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-800 lg:hidden">
            <FiUser className="w-5 h-5" />
          </Link>
          <Link to="#" className="text-gray-600 hover:text-gray-800 lg:hidden">
            <FiShoppingCart className="w-5 h-5" />
          </Link>

          {/* Desktop Icons with Labels */}
          <div className="hidden lg:flex items-center space-x-1">
            <Link to="#" className="text-gray-600 hover:text-gray-800 flex items-center">
              <FiHeart className="w-5 h-5" />
              <span className="ml-1">Wishlist</span>
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-800 flex items-center">
              <FiUser className="w-5 h-5" />
              <span className="ml-1">Login</span>
            </Link>
            <Link to="#" className="text-gray-600 hover:text-gray-800 flex items-center">
              <FiShoppingCart className="w-5 h-5" />
              <span className="ml-1">Cart</span>
            </Link>
          </div>

          {/* Hamburger Menu */}
          <button
            onClick={() => setMenuOpen(!isMenuOpen)}
            className="text-black lg:hidden"
          >
            {isMenuOpen ? <FiX className="w-6 h-6" /> : <FiMenu className="w-6 h-6" />}
          </button>
        </div>
      </div>
      <hr />

      {/* Main Categories - Left Drawer for Mobile */}
      <div
        className={`fixed inset-y-0 left-0 bg-white p-6 transition-transform transform ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:translate-x-0 lg:flex lg:justify-center lg:space-x-6 py-4 text-gray-600 font-semibold text-sm z-50`}
      >
        {/* Close Button for Mobile */}
        {isMenuOpen && (
          <button
            className="text-black lg:hidden mb-4"
            onClick={() => setMenuOpen(false)}
          >
            <FiX className="w-6 h-6" />
          </button>
        )}

        {/* Categories List */}
        {categories.map((category) => (
          <div
            key={category._id}
            className="relative group"
            onClick={() =>
              setActiveCategory(activeCategory === category._id ? null : category._id)
            }
          >
            <Link to="#" className="hover:text-gray-800">
              {category.title}
            </Link>
            {(activeCategory === category._id || (isMenuOpen && activeCategory === category._id)) && (
              <div className="absolute top-full mt-1 bg-white border z-50 rounded shadow-lg w-48 lg:group-hover:block">
                {subCategories
                  .filter((sub) => sub.category_id === category._id)
                  .map((sub) => (
                    <Link
                      to="#"
                      key={sub._id}
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      {sub.title}
                    </Link>
                  ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
