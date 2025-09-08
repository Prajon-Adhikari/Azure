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
        <span className="text-xs bg-blue-100 text-blue-600 px-2 py-1 rounded-full">
          {category}
        </span>
      )}

      {/* Title */}
      <h3 className="text-lg font-semibold mt-2">{title}</h3>

      {/* Description */}
      <p className="text-sm text-gray-600 mt-1 line-clamp-3">{description}</p>

      {/* Date */}
    
      {createdAt && (
        <p className="text-xs text-gray-400 mt-2">
          {new Date(createdAt).toLocaleDateString()}
        </p>
      )}
      </div>
    
 
  );
};

export default BlogsCard;
