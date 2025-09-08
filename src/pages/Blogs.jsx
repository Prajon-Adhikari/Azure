import React, { useState } from "react";
import AddBlog from "../components/AddBlog";
import blogImage from "../assets/blogImage.jpeg";
import BlogsCard from "../components/BlogsCard";
import aboutuscoding1 from "../assets/aboutuscoding1.jpg";
import aboutuscoding2 from "../assets/aboutuscoding2.jpg";
import aboutusheroimage2 from "../assets/aboutusheroimage2.jpg";
import { Link } from "react-router-dom";

const categoriesOptions = [
  { value: "Web development", label: "Web Development" },
  { value: "Mobile app development", label: "Mobile App Development" },
  { value: "Courses & education", label: "Courses & Education" },
];

const blogData = [
   {
    id: 1,
    title: "Why Every Business Needs a Website",
    description:
      "A professional website builds trust, improves credibility, and helps businesses grow in the digital age.",
    category: "Web development",
    image: aboutuscoding1,
    createdAt: "2025-09-01T12:00:00Z",
  },
  {
    id: 2,
    title: "Top Features of a Modern Mobile App",
    description:
      "From user-friendly interfaces to AI-powered personalization, discover what makes mobile apps successful.",
    category: "Mobile app development",
    image: aboutuscoding2,
    createdAt: "2025-08-25T10:30:00Z",
  },
  {
    id: 3,
    title: "The Future of Online Learning",
    description:
      "E-learning platforms are transforming education with flexible courses and interactive learning experiences.",
    category: "Courses & education",
    image: aboutusheroimage2,
    createdAt: "2025-08-15T09:15:00Z",
  },
  {
    id: 4,
    title: "How Web Apps Transform Businesses",
    description:
      "Web applications streamline operations, reduce costs, and create better customer experiences.",
    category: "Web development",
    image: aboutuscoding1,
    createdAt: "2025-07-30T14:00:00Z",
  },
  {
    id: 5,
    title: "Why Startups Should Invest in Mobile Apps",
    description:
      "Mobile apps help startups reach customers faster, improve engagement, and build strong brand identity.",
    category: "Mobile app development",
    image: aboutuscoding2,
    createdAt: "2025-07-20T11:45:00Z",
  },
  {
    id: 6,
    title: "Benefits of Learning Full-Stack Development",
    description:
      "Full-stack skills open opportunities to work on both frontend and backend, making developers more versatile.",
    category: "Courses & education",
    image: aboutusheroimage2,
    createdAt: "2025-07-10T08:20:00Z",
  },
  {
    id: 7,
    title: "AI Tools for Developers in 2025",
    description:
      "Discover the latest AI tools that help developers speed up coding, testing, and deployment.",
    category: "Web development",
    image: aboutuscoding1,
    createdAt: "2025-06-30T10:00:00Z",
  },
  {
    id: 8,
    title: "Top Mobile App Trends",
    description:
      "Stay ahead of the curve with the top mobile app trends shaping 2025.",
    category: "Mobile app development",
    image: aboutuscoding2,
    createdAt: "2025-06-20T12:15:00Z",
  },
  {
    id: 9,
    title: "How Online Courses are Changing Education",
    description:
      "Online courses make education accessible and flexible for millions of learners worldwide.",
    category: "Courses & education",
    image: aboutusheroimage2,
    createdAt: "2025-06-10T09:45:00Z",
  },
];

const BLOGS_PER_PAGE = 6;

const Blog = () => {
  const [blogs, setBlogs] = useState(blogData);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState("All posts");
  const [currentPage, setCurrentPage] = useState(1);

  // Add blog
  const handleAddBlog = (newBlog) => {
    setBlogs([newBlog, ...blogs]);
  };

  // Filter blogs
  const filteredBlogs =
    selectedCategory === "All posts"
      ? blogs
      : blogs.filter((b) => b.category === selectedCategory);

  // Pagination calculations
  const totalPages = Math.ceil(filteredBlogs.length / BLOGS_PER_PAGE);
  const startIndex = (currentPage - 1) * BLOGS_PER_PAGE;
  const currentBlogs = filteredBlogs.slice(
    startIndex,
    startIndex + BLOGS_PER_PAGE
  );

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
  };

  return (
    <section>
      {/* Header and Featured Section */}
      <div className="mt-16">
        <img
          src={blogImage}
          alt="blogImage"
          className="w-full h-[400px] object-cover"
        />
      </div>

      {/* What's New Section */}
      <div className="today mx-[140px] mt-10">
        <div className="h_TitleContainer flex">
          <div className="h-12 w-1 bg-red-600 mr-3"></div>
          <div className="paragraph text-4xl">
            What's new <span className="text-[#fd0d34]">Today ?</span>
          </div>
        </div>
      </div>

      {/* Featured Blog Section */}
      <div className="mx-[140px] mt-8 flex flex-col md:flex-row gap-8 items-center">
        <div className="flex-1">
          <img
            src={aboutuscoding1}
            alt="Featured Blog"
            className="rounded-lg shadow-lg w-full h-[300px] object-cover"
          />
        </div>
        <div className="flex-1">
          <h2 className="text-3xl font-bold mt-3">
            Top 10 Hackathon Project Ideas for 2025
          </h2>
          <p className="text-gray-600 mt-4">
            From AI-powered apps to climate tech solutions, explore the most
            exciting and impactful project ideas to inspire your next hackathon
            journey.
          </p>
          <button className="mt-6 bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition cursor-pointer">
            Read More <span className="text-[18px]">&rarr;</span>
          </button>
        </div>
      </div>

      {/* Category Filter */}
      <div className="main_container mt-12 mx-[140px]">
        <div className="flex gap-3 mb-8 flex-wrap justify-center font-semibold">
          <button
            onClick={() => {
              setSelectedCategory("All posts");
              setCurrentPage(1);
            }}
            className={`px-4 py-2 rounded cursor-pointer ${
              selectedCategory === "All posts"
                ? "bg-red-600 text-white"
                : "bg-gray-300 text-black"
            }`}
          >
            All posts
          </button>
          {categoriesOptions.map((cat) => (
            <button
              key={cat.value}
              onClick={() => {
                setSelectedCategory(cat.value);
                setCurrentPage(1);
              }}
              className={`px-4 py-2 rounded cursor-pointer ${
                selectedCategory === cat.value
                  ? "bg-red-600 text-white"
                  : "bg-gray-300 text-black"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-semibold">
            {selectedCategory === "All posts"
              ? "All Blog Posts"
              : selectedCategory}
          </h2>
          <button
            onClick={() => setIsModalOpen(true)}
            className="px-5 py-2 bg-red-600 text-white rounded hover:bg-red-700"
          >
            + Add Blog
          </button>
        </div>

        {/* Blog grid */}
        {currentBlogs.length === 0 ? (
          <p className="text-gray-500">No blogs available yet.</p>
        ) : (
          <>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 cursor-pointer">
      {currentBlogs.map((blog) => (
        <BlogsCard
          key={blog.id}
          title={blog.title}
          description={blog.description}
          image={blog.image}
          category={blog.category}
          createdAt={blog.createdAt}
        />
      ))}
    </div>

            {/* Pagination */}
            <div className="flex justify-center gap-2 mt-6">
              <button
                onClick={() => handlePageChange(currentPage - 1)}
                className="px-3 py-1 border rounded hover:bg-gray-200 cursor-pointer"
                disabled={currentPage === 1}
              >
                &lt;
              </button>
              {Array.from({ length: totalPages }, (_, i) => (
                <button
                  key={i + 1}
                  onClick={() => handlePageChange(i + 1)}
                  className={`px-3 py-1 border rounded cursor-pointer ${
                    currentPage === i + 1 ? "bg-red-600 text-white" : ""
                  } hover:bg-red-300`}
                >
                  {i + 1}
                </button>
              ))}
              <button
                onClick={() => handlePageChange(currentPage + 1)}
                className="px-3 py-1 border rounded hover:bg-gray-200 cursor-pointer"
                disabled={currentPage === totalPages}
              >
                &gt;
              </button>
            </div>
          </>
        )}

        {/* Add Blog Modal */}
        <AddBlog
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          onSubmit={handleAddBlog}
        />
      </div>

         <section className="bg-gray-100 py-12 mt-8">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 items-center">
        {/* Left Side Text */}
        <div>
          <h2 className="text-3xl font-bold text-black">
            Let’s connect and{" "}
            <span className="text-[#fd0d34]">turn your vision into reality.</span>
          </h2>
          <p className="text-gray-800 mt-4">
            We are available from 10:00 AM to 5:00 PM, Sunday to Friday.
          </p>
        </div>

        {/* Right Side Contact */}
        <div className="mt-8 md:mt-0 text-center md:text-right">
          <p className="uppercase text-sm tracking-wide text-gray-900">
            Reach out now!
          </p>
          <h3 className="text-3xl font-bold text-black mt-2">
            9801848492
          </h3>
        <Link to="/contact">
          <button className="mt-4 px-6 py-3 bg-red-600 text-white font-semibold rounded-full shadow-md hover:bg-red-700 transition">
            Let’s Start Conversation
          </button>
          </Link>
        </div>
      </div>
    </section>

    </section>
  );
};

export default Blog;
