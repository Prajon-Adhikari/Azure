import { useState } from "react";
import { motion } from "framer-motion";
import { Github } from "lucide-react";

const ProjectCard = ({ title, description, image, tags, code, category, icon: Icon }) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const getCategoryName = (category) => {
    if (category === "iot") return "IoT";
    if (category === "ai") return "AI & ML";
    return category;
  };

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
      <div className={`relative min-h overflow-hidden`}>
        <div className="absolute top-3 left-3 bg-gray-200 px-3 py-1 rounded-full flex items-center text-xs font-medium z-10 text-black">
          <Icon className="w-5 h-5" />
          <span className="ml-1.5 capitalize">{getCategoryName(category)}</span>
        </div>

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

        <p className="text-gray-700 mb-4">{description}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {tags.map((tag) => (
            <motion.span
              key={tag}
              className="text-xs py-1 px-3 bg-gray-200 rounded-full"
              whileHover={{
                backgroundColor: "rgba(225, 29, 72, 0.1)", // light red
                color: "#e11d48",
              }}
            >
              {tag}
            </motion.span>
          ))}
        </div>
{category !== "graphic" && code && (
  <div className="flex justify-center">
    <motion.a
      href={code}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center text-gray-700 hover:text-red-600 transition-colors"
      whileHover={{ scale: 1.05, color: "#e11d48" }}
      whileTap={{ scale: 0.95 }}
    >
      <Github className="mr-1.5 h-4 w-4" />
      Source Code
    </motion.a>
  </div>
)}
      </div>
    </motion.div>

  </>
  );

};

export default ProjectCard;
