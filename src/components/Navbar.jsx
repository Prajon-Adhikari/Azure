import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [techOpen, setTechOpen] = useState(false);
    const [solOpen, setSolOpen] = useState(false);

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

            {/* Technologies mega dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setTechOpen(true)}
              onMouseLeave={() => setTechOpen(false)}
            >
              <button onChange={techOpen} className="flex items-center gap-1 hover:text-red-600">
                Technologies <ChevronDown size={16} />
              </button>

              {techOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[1100px] bg-white shadow-2xl rounded-lg p-8 grid grid-cols-4 gap-8 z-50">
                  {/* Frontend */}
                  <div>
                    <h3 className="font-semibold mb-3">Frontend</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>React (Hooks, Redux)</li>
                      <li>Vue.js (Vuex, Nuxt)</li>
                      <li>Angular (RxJS, NgRx)</li>
                      <li>Next.js (SSR, API Routes)</li>
                    </ul>
                  </div>

                  {/* Backend */}
                  <div>
                    <h3 className="font-semibold mb-3">Backend</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Node.js (Express, NestJS)</li>
                      <li>Python (Django, Flask)</li>
                      <li>Java (Spring, Hibernate)</li>
                      <li>Go (Gin, Echo)</li>
                    </ul>
                  </div>

                  {/* DevOps & Cloud */}
                  <div>
                    <h3 className="font-semibold mb-3">DevOps & Cloud</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>AWS (EC2, S3)</li>
                      <li>Docker (Containers, Compose)</li>
                      <li>Kubernetes (K8s, Helm)</li>
                      <li>Azure (AKS, Functions)</li>
                    </ul>
                  </div>

                  {/* Database & Storage */}
                  <div>
                    <h3 className="font-semibold mb-3">Database & Storage</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>MongoDB (NoSQL, Atlas)</li>
                      <li>PostgreSQL (SQL, JSONB)</li>
                      <li>MySQL (RDBMS, InnoDB)</li>
                      <li>Redis (Cache, Pub/Sub)</li>
                    </ul>
                  </div>

                  {/* Mobile Development */}
                  <div>
                    <h3 className="font-semibold mb-3">Mobile Development</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Flutter (Dart, Material)</li>
                      <li>React Native (Native, Expo)</li>
                      <li>Swift (iOS, SwiftUI)</li>
                      <li>Kotlin (Android, Jetpack)</li>
                    </ul>
                  </div>

                  {/* AI & ML */}
                  <div>
                    <h3 className="font-semibold mb-3">AI & ML</h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>TensorFlow (Deep Learning)</li>
                      <li>PyTorch (Torch, Vision)</li>
                      <li>Scikit-learn (ML, Data Science)</li>
                      <li>OpenCV (Computer Vision)</li>
                    </ul>
                  </div>
                </div>
              )}
            </div>


            {/* Solutions mega dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setSolOpen(true)}
              onMouseLeave={() => setSolOpen(false)}
            >
              <button className="flex items-center gap-1 hover:text-red-600">
                Solutions <ChevronDown size={16} />
              </button>

              {solOpen && (
                <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-[950px] bg-white shadow-2xl rounded-lg p-8 grid grid-cols-4 gap-8 z-50">
                  {/* Enterprise Solutions */}
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold mb-3">
                      🏢 Enterprise Solutions
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700 ">
                      <li>ERP Systems <span className="text-xs text-gray-500">(SAP, Oracle)</span></li>
                      <li>CRM Solutions <span className="text-xs text-gray-500">(Salesforce, HubSpot)</span></li>
                      <li>Business Intelligence <span className="text-xs text-gray-500">(Tableau, Power BI)</span></li>
                      <li>Enterprise Mobility <span className="text-xs text-gray-500">(Mobile Solutions)</span></li>
                    </ul>
                  </div>

                  {/* Industry Solutions */}
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold mb-3">
                      🏭 Industry Solutions
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>Healthcare IT <span className="text-xs text-gray-500">(EMR, Telemedicine)</span></li>
                      <li>FinTech <span className="text-xs text-gray-500">(Payments, Banking)</span></li>
                      <li>EdTech <span className="text-xs text-gray-500">(LMS, E-Learning)</span></li>
                      <li>Retail Tech <span className="text-xs text-gray-500">(POS, Inventory)</span></li>
                    </ul>
                  </div>

                  {/* Innovation */}
                  <div>
                    <h3 className="flex items-center gap-2 font-semibold mb-3">
                      💡 Innovation
                    </h3>
                    <ul className="space-y-2 text-sm text-gray-700">
                      <li>AI & ML <span className="text-xs text-gray-500">(TensorFlow, PyTorch)</span></li>
                      <li>IoT Solutions <span className="text-xs text-gray-500">(Smart Devices)</span></li>
                      <li>Blockchain <span className="text-xs text-gray-500">(Smart Contracts)</span></li>
                      <li>AR/VR <span className="text-xs text-gray-500">(Immersive Tech)</span></li>
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
