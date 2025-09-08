import React from "react";

const BlogsCard = ({ title, description, image, category, createdAt }) => {
  return (
    <div className="p-4 border rounded-lg shadow-sm hover:shadow-lg transition-shadow duration-300 bg-white cursor-pointer">
      {/* Image */}
      {image && (
        <img
          src={image}
          alt={title}
          className="w-full h-40 object-cover rounded mb-3"
        />
      )}

      {/* Category */}
      {category && (
        <span className={`text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full
              ${category === "Web Development" ? "bg-blue-300 text-blue-900" : ""}
      ${category === "Mobile app development" ? "bg-green-300 text-green-900" : ""}
      ${category === "Courses & education" ? "bg-yellow-300 text-yellow-900" : ""}
        `}>
          {category }
        </span>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold mt-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-1 " 
       style={{
                display: "-webkit-box",
                WebkitLineClamp: 3,
                WebkitBoxOrient: "vertical",
                lineHeight: "1.3rem", 
                height: "4.5rem", 
              }}>{description}</p>

      {/* Date */}
    
    <div className="flex justify-between mx-3">
      {createdAt && (
        <p className="text-xs text-gray-800 mt-2 italic">
    {new Date(createdAt).toLocaleDateString("en-US", {
      month: "short", // Oct
      day: "numeric", // 15
      year: "numeric", // 2025
    })}
  </p>

      )}
      <button className="text-red-600 italic
      cursor-pointer">View More <span> &rarr; </span></button>
      </div>
      </div>
    
 
  );
};

export default BlogsCard;
