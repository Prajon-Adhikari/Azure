import React, { useState } from "react";

const AddBlog = ({ isOpen, onClose, onSubmit }) => {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category || !description) return;

    onSubmit({
      id: Date.now(),
      title,
      category,
      description,
      image: image ? URL.createObjectURL(image) : null,
      createdAt: new Date(),
    });

    // Reset form + close
    setTitle("");
    setCategory("");
    setDescription("");
    setImage(null);
    onClose();
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center  bg-white/20
     backdrop-blur-sm z-50 ">
      <div className="bg-white rounded-lg shadow-lg shadow-gray-900 w-full max-w-md p-6 relative">
        {/* Close Button */}
        <button
          className="absolute top-3 right-3  text-red-500 hover:text-red-700 text-3xl cursor-pointer"
          onClick={onClose}
        >
          &times;
        </button>

        <h2 className="text-lg font-semibold mb-4 text-center">Add New Blog</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="text"
            placeholder="Blog Title"
            className="w-full border rounded p-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />

          <select
            className="w-full border rounded p-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">Select category</option>
            <option value="Hackathon planning">Web Development</option>
            <option value="Participant resources">Mobile App Development</option>
            <option value="Business impact">Courses & Education</option>
          </select>

          <textarea
            placeholder="Blog Description"
            rows="4"
            className="w-full border rounded p-2 focus:ring-2 focus:ring-red-500 focus:outline-none"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <div>
            <label className="block text-sm font-medium mb-1">Blog Image</label>
            <input
              type="file"
              className="w-full border  rounded p-2"
              onChange={(e) => setImage(e.target.files[0])}
            />
          </div>

          <button
            type="submit"
            className="w-full bg-red-600 text-white py-2 rounded hover:bg-red-700 transition"
          >
            Submit Blog
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddBlog;
