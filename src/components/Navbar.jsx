import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <nav className="bg-white text-gray-800 shadow-md fixed top-0 left-0 right-0 z-50">
        {/* Top bar */}
        <div className="bg-red-600 flex justify-between px-[140px] text-white text-sm py-1">
          <p>Bharatpur-10,Chitwan</p>
          <p>Let's Build Future Togehter!</p>
          <p>hello@azure.com.np</p>
        </div>

        {/* Main Nav */}
        <div className="container mx-auto flex justify-between items-center px-[140px] py-2">
          <Link to="/" className="text-2xl font-bold text-red-600">
            AzureDev
          </Link>

          <div className="space-x-14 relative flex items-center">
            {/* Home */}
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? "text-red-600" : "hover:text-red-600"
              }
            >
              Home
            </NavLink>

            {/* Services with mega dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setIsOpen(true)}
              onMouseLeave={() => setIsOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-red-600">
                Services <ChevronDown size={16} />
              </button>

              {isOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[1000px] bg-white shadow-2xl rounded-lg p-8 grid grid-cols-4 gap-8 z-50">
                  {/* Web Development */}
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold mb-3">
                      🌐 Web Development
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><Link to="#">Custom Web Apps</Link></li>
                      <li><Link to="#">E-commerce Solutions</Link></li>
                      <li><Link to="#">CMS Development</Link></li>
                      <li><Link to="#">Progressive Web Apps</Link></li>
                    </ul>
                  </div>

                  {/* Mobile Development */}
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold mb-3">
                      📱 Mobile Development
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><Link to="#">iOS Apps</Link></li>
                      <li><Link to="#">Android Apps</Link></li>
                      <li><Link to="#">Cross-platform</Link></li>
                      <li><Link to="#">App Maintenance</Link></li>
                    </ul>
                  </div>

                  {/* Cloud Services */}
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold mb-3">
                      ☁️ Cloud Services
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><Link to="#">AWS Solutions</Link></li>
                      <li><Link to="#">Azure Cloud</Link></li>
                      <li><Link to="#">DevOps</Link></li>
                      <li><Link to="#">Cloud Migration</Link></li>
                    </ul>
                  </div>

                  {/* Digital Solutions */}
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold mb-3">
                      🎨 Digital Solutions
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li><Link to="#">UI/UX Design</Link></li>
                      <li><Link to="#">Digital Marketing</Link></li>
                      <li><Link to="#">SEO Services</Link></li>
                      <li><Link to="#">Content Strategy</Link></li>
                    </ul>
                  </div>
                </div>
              )}
            </div>

            {/* Other links */}
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-red-600" : "hover:text-red-600"
              }
            >
              About
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-red-600" : "hover:text-red-600"
              }
            >
              Contact
            </NavLink>
            <NavLink
              to="/portfolio"
              className={({ isActive }) =>
                isActive ? "text-red-600" : "hover:text-red-600"
              }
            >
              Portfolio
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
;