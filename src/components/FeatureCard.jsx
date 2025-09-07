import { useState } from "react";
import { motion } from "framer-motion"

const FeatureCard = ({ title,  image, description }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

 

  return (
    <>
    
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{
        y: -10,
        boxShadow: "0 20px 25px -5px rgba(225, 29, 72, 0.3)", // red shadow
      }}
      transition={{ duration: 0.4 }}
      className="backdrop-blur-md bg-white border border-gray-200 rounded-lg overflow-hidden flex flex-col text-black shadow-md hover:shadow-lg transition duration-300 hover:scale-105"
    >
        <div className={`relative h-40 overflow-hidden`}>
        {!isImageLoaded && (
          <div className="absolute inset-0 bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 bg-[length:200%_100%] animate-shimmer rounded" />
        )}

        <img
          src={image}
          alt={title}
          onLoad={() => setIsImageLoaded(true)}
          className={`w-full h-full object-cover transition-transform duration-700 hover:scale-110 ${
            isImageLoaded ? "opacity-100" : "opacity-0"
          }`}
        />
      </div>

      <div className="p-6 flex-grow">
        <motion.h3
          className="text-xl font-semibold mb-2"
          whileHover={{ color: "#e11d48" }} // red-600
        >
          {title}
        </motion.h3>
        <p className="text-gray-600 mb-4">{description}</p>
     
      </div>
    </motion.div>

  </>
  );

};

export default FeatureCard;
