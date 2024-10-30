// import React, { useEffect, useState } from "react";
// import Container from "./Container";
// import { config } from "../../config";
// import { getData } from "../lib";
// import Title from "./Title";
// import { Link } from "react-router-dom";
// import { CategoryProps } from "../../type";

// const Categories = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const endpoint = `${config?.baseUrl}/categories`;
//       try {
//         const data = await getData(endpoint);
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);
//   return (
//     <Container>
//       <div className="mb-10">
//         <div className="flex items-center justify-between">
//           <Title text="Popular categories" />
//           <Link
//             to={"/category/tvAndAudio"}
//             className="font-medium relative group overflow-hidden"
//           >
//             View All Categories{" "}
//             <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
//           </Link>
//         </div>
//         <div className="w-full h-[1px] bg-gray-200 mt-3" />
//       </div>
//       <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
//         {categories.map((item: CategoryProps) => (
//           <Link
//             to={`/category/${item?._base}`}
//             key={item?._id}
//             className="w-full h-auto relative group overflow-hidden"
//           >
//             <img
//               src={item?.image}
//               alt="categoryImage"
//               className="w-full h-auto rounded-md group-hover:scale-110 duration-300"
//             />
//             <div className="absolute bottom-3 w-full text-center">
//               <p className="text-sm md:text-base font-bold">{item?.name}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Categories;
// import React, { useEffect, useState } from "react";
// import Container from "./Container";
// import { getData } from "../lib";
// import Title from "./Title";
// import { Link } from "react-router-dom";
// import { CategoryProps } from "../../type";

// const Categories = () => {
//   const [categories, setCategories] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const endpoint = "https://farm-e-store-backend.vercel.app/api/category/get-category";
//       try {
//         const data = await getData(endpoint);
//         setCategories(data);
//       } catch (error) {
//         console.error("Error fetching data", error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <Container>
//       <div className="mb-10">
//         <div className="flex items-center justify-between">
//           <Title text="Popular categories" />
//           <Link
//             to="/category"
//             className="font-medium relative group overflow-hidden"
//           >
//             View All Categories{" "}
//             <span className="absolute bottom-0 left-0 w-full block h-[1px] bg-gray-600 -translate-x-[100%] group-hover:translate-x-0 duration-300" />
//           </Link>
//         </div>
//         <div className="w-full h-[1px] bg-gray-200 mt-3" />
//       </div>
//       <div className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-7">
//         {categories.map((item: CategoryProps) => (
//           <Link
//             to={`/category/${item._id}`}
//             key={item._id}
//             className="w-full h-auto relative group overflow-hidden"
//           >
//             <img
//               src={item.imageUrl}
//               alt={item.title}
//               className="w-full h-auto rounded-md group-hover:scale-110 duration-300"
//             />
//             <div className="absolute bottom-3 w-full text-center">
//               <p className="text-sm md:text-base font-bold">{item.title}</p>
//             </div>
//           </Link>
//         ))}
//       </div>
//     </Container>
//   );
// };

// export default Categories;
import React, { useEffect, useState } from "react";
import Container from "./Container";
import { getData } from "../lib";
import Title from "./Title";
import { Link } from "react-router-dom";
import { CategoryProps } from "../../type";
import Banana from "../assets/brands/banana.png";
import Cauliflower from "../assets/brands/cauliflower.png";
import mango from "../assets/brands/mango1.png";
import pomegranate from "../assets/brands/pomegranate.png";
import pumpkin from "../assets/brands/pumpkin.png";
import rose from "../assets/brands/rose.png";
import tomato from "../assets/brands/tomato.png";


const CategoriesAndCrops = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const endpoint = "https://farm-e-store-backend.vercel.app/api/category/get-category";
      try {
        const data = await getData(endpoint);
        setCategories(data);
      } catch (error) {
        console.error("Error fetching data", error);
      }
    };
    fetchData();
  }, []);

  // Sample crop data for demonstration; replace with actual data or paths
  const crops = [
    { name: "Banana", imagePath: Banana },
    { name: "Cauliflower", imagePath: Cauliflower },
    { name: "Mango", imagePath: mango },
    { name: "Pomegranate", imagePath: pomegranate },
    { name: "Pumpkin", imagePath: pumpkin },
    { name: "Rose", imagePath: rose },
    { name: "Tomato", imagePath: tomato },
  ];

  return (
    <Container>
      <div className="flex flex-col lg:flex-row gap-10">
        {/* Categories Section */}
        <div className="w-full lg:w-1/2 p-5 border rounded-md">
          <u><Title text="Shop by categories" /></u>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            {categories.slice(0, 7).map((item: CategoryProps) => (
              <Link
                to={`/category/${item._id}`}
                key={item._id}
                className="flex flex-col items-center text-center"
              >
                <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src={item.imageUrl}
                    alt={item.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm font-bold">{item.title}</p>
              </Link>
            ))}
            <Link to="/category" className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <p className="text-sm font-bold">View More</p>
              </div>
            </Link>
          </div>
        </div>

        {/* Shop by Crops Section */}
        <div className="w-full lg:w-1/2 p-5 border rounded-md">
          <u><Title text="Shop by Crops" /></u>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-5">
            {crops.slice(0, 7).map((crop, index) => (
              <div key={index} className="flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-gray-200 rounded-full overflow-hidden">
                  <img
                    src={crop.imagePath} // Replace with actual offline image paths
                    alt={crop.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <p className="mt-2 text-sm font-bold">{crop.name}</p>
              </div>
            ))}
            <Link to="/crops" className="flex flex-col items-center text-center">
              <div className="w-20 h-20 bg-gray-200 rounded-full flex items-center justify-center">
                <p className="text-sm font-bold">View More</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </Container>
  );
};

export default CategoriesAndCrops;
