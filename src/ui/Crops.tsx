import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import mango from "../assets/brands/Mango.png";
import pomegranate from "../assets/brands/Pomegranate.png";
import pumpkin from "../assets/brands/Pumpkin.png";
import rose from "../assets/brands/Rose.png";
import tomato from "../assets/brands/Tomato.png";
import Banana from "../assets/brands/Banana.png";
import Cauliflower from "../assets/brands/Cauliflower.png";

const CropsSection = () => {
  const [isPaused, setIsPaused] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check if viewport is mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const crops = [
    { name: "Banana", imagePath: Banana },
    { name: "Cauliflower", imagePath: Cauliflower },
    { name: "Mango", imagePath: mango },
    { name: "Pomegranate", imagePath: pomegranate },
    { name: "Pumpkin", imagePath: pumpkin },
    { name: "Rose", imagePath: rose },
    { name: "Tomato", imagePath: tomato },
  ];

  // Double the crops array for seamless infinite scroll
  const duplicatedCrops = [...crops, ...crops];

  return (
    <section className="py-8 bg-gray-100">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Shop by Crops</h2>
          <Link to="/crops" className="text-blue-500 hover:underline">
            View All
          </Link>
        </div>

        <div 
          className={`
            relative overflow-hidden
            ${isMobile ? 'flex space-x-4 overflow-x-auto scrollbar-hide' : ''}
          `}
        >
          <div 
            className={`
              flex space-x-4
              ${!isMobile ? 'animate-scroll hover:pause' : ''}
              ${isPaused ? 'pause' : ''}
            `}
            onMouseEnter={() => !isMobile && setIsPaused(true)}
            onMouseLeave={() => !isMobile && setIsPaused(false)}
            style={{
              animation: !isMobile ? 'scroll 20s linear infinite' : 'none'
            }}
          >
            {(isMobile ? crops : duplicatedCrops).map((crop, index) => (
              <div
                key={index}
                className="flex-shrink-0 w-32 h-32 bg-white rounded-lg shadow-md border border-gray-200 p-4 flex items-center justify-center"
              >
                <img
                  src={crop.imagePath}
                  alt={crop.name}
                  className="w-full h-full object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        
        .animate-scroll {
          display: flex;
          width: fit-content;
        }
        
        .pause {
          animation-play-state: paused !important;
        }
        
        @media (max-width: 767px) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </section>
  );
};

export default CropsSection;
