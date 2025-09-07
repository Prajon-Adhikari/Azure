import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/Project";
import {
  Bot,
  MonitorSmartphone,
  Database,
  Cpu,
  Filter,
  Search,
  Code,
  Brain,
  BarChart,
  FileImage
} from "lucide-react";

const Portfolio = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const [filter, setFilter] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");



  const getIcon = (category) => {
    switch (category) {
      case "ai":
        return Bot;
      case "web":
        return MonitorSmartphone;
      case "blockchain":
        return Database;
      case "iot":
        return Cpu;
      case "ml":
        return Brain;
      case "data":
        return BarChart;
        case "graphic":
        return FileImage;
      default:
        return Code;
    }
  };

  const filteredProjects = projects.filter(project => {
    const matchesFilter = filter === "all" || project.category === filter;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "web", name: "Web Development" },
    { id: "ai", name: "AI & ML" },
    { id: "blockchain", name: "Blockchain" },
    { id: "graphic", name: "Graphic Design" },
    { id: "iot", name: "IoT" }
  ];

  return (
    <>
      <div className="bg-white text-black px-6 md:px-[140px] py-10 transition-colors duration-500">
        <section className="mt-15">
          <div className="container mx-auto px-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center mb-8"
            >
              <span className="inline-block py-1 px-3 rounded-full text-lg font-medium bg-red-100 text-red-600 mb-4">
                Our Portfolio
              </span>

              <div className="max-w-3xl mx-auto">
                <p className="text-[46px] font-bold text-black">
                  Some of our <span className="text-red-600">recent works</span>
                </p>
              </div>
            </motion.div>

            {/* Filter and Search */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ boxShadow: "0 10px 25px -5px rgba(245, 101, 101, 0.1)" }}
              className="mb-12"
            >
              <div className="flex flex-col shadow-2xl md:flex-row gap-6 items-center justify-between p-6 rounded-lg bg-gray-100 text-black">
                {/* Category Filter */}
                <div className="flex items-center">
                  <Filter className="mr-2 h-5 w-5 text-gray-600" />
                  <span className="mr-4 font-medium text-md">Filter:</span>
                  <div className="flex flex-wrap gap-2">
                    {categories.map(category => (
                      <motion.button
                        key={category.id}
                        onClick={() => setFilter(category.id)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`px-3 py-1.5 text-md font-medium rounded-full transition-colors ${
                          filter === category.id
                            ? "bg-red-600 text-white"
                            : "bg-gray-200 hover:bg-gray-300 text-gray-700"
                        }`}
                      >
                        {category.name}
                      </motion.button>
                    ))}
                  </div>
                </div>

                {/* Search */}
                <div className="relative w-full md:w-64">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-500">
                    <Search className="w-4 h-4" />
                  </div>
                  <motion.input
                    type="text"
                    className="w-full py-2 pl-10 pr-4 bg-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-red-500 text-black placeholder:text-gray-500"
                    placeholder="Search projects..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    whileFocus={{ boxShadow: "0 0 0 3px rgba(245, 101, 101, 0.3)" }}
                  />
                </div>
              </div>
            </motion.div>

            {/* Projects Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.length > 0 ? (
                filteredProjects.map((project) => (
                  <ProjectCard
                    key={project.id}
                    title={project.title}
                    description={project.description}
                    tags={project.tags}
                    image = {project.image}
                    code={project.code}
                    category={project.category}
                    icon={getIcon(project.category)}
                  />
                ))
              ) : (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="col-span-1 md:col-span-2 lg:col-span-3 text-center py-16 rounded-lg bg-gray-100"
                >
                  <p className="text-xl text-gray-500">No projects found matching your criteria.</p>
                  <motion.button
                    onClick={() => {
                      setFilter("all");
                      setSearchTerm("");
                    }}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="mt-4 inline-flex items-center px-4 py-2 bg-red-600 text-white rounded-lg text-sm font-medium hover:bg-red-500 transition-all"
                  >
                    Clear Filters
                  </motion.button>
                </motion.div>
              )}
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Portfolio;
