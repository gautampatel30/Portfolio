// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaUser } from "react-icons/fa";
// import { IoIosPaper } from "react-icons/io";
// import { MdWork } from "react-icons/md";
// import Left from "./components/home/Left";
// import About from "./components/about/About";
// import Resume from "./components/resume/Resume";
// import Projects from "./components/projects/Projects";

// const Home = () => {
//   const [about, setAbout] = useState(true);
//   const [resume, setResume] = useState(false);
//   const [projects, setProjects] = useState(false);

//   return (
//     <div className="w-full min-h-screen lg:h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-white text-gray-800 flex flex-col lg:flex-row items-start justify-between p-4 lg:p-0 rounded-2xl shadow-lg overflow-hidden">
//       {/* Left Icons */}
//       <div className="w-full lg:w-16 h-full bg-transparent flex lg:flex-col gap-4 lg:gap-0">
//         <div className="w-full h-full bg-transparent flex flex-row lg:flex-col items-center justify-evenly py-6">
//           <span
//             onClick={() => {
//               setAbout(true);
//               setResume(false);
//               setProjects(false);
//             }}
//             className={`${
//               about ? "text-blue-500" : "text-gray-500"
//             } text-xl flex items-center justify-center hover:text-blue-500 duration-300 cursor-pointer relative group`}
//           >
//             <FaUser />
//             <span className="text-white font-medium text-xs uppercase bg-blue-500 px-4 py-[1px] rounded-xl absolute left-1/2 transform -translate-x-1/2 lg:left-12 lg:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-20 opacity-0">
//               About
//             </span>
//           </span>
//           <span
//             onClick={() => {
//               setAbout(false);
//               setResume(true);
//               setProjects(false);
//             }}
//             className={`${
//               resume ? "text-blue-500" : "text-gray-500"
//             } text-xl flex items-center justify-center hover:text-blue-500 duration-300 cursor-pointer relative group`}
//           >
//             <IoIosPaper />
//             <span className="text-white font-medium text-xs uppercase bg-blue-500 px-4 py-[1px] rounded-xl absolute left-1/2 transform -translate-x-1/2 lg:left-12 lg:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-20 opacity-0">
//               Resume
//             </span>
//           </span>
//           <span
//             onClick={() => {
//               setAbout(false);
//               setResume(false);
//               setProjects(true);
//             }}
//             className={`${
//               projects ? "text-blue-500" : "text-gray-500"
//             } text-xl flex items-center justify-center hover:text-blue-500 duration-300 cursor-pointer relative group`}
//           >
//             <MdWork />
//             <span className="text-white font-medium text-xs uppercase bg-blue-500 px-4 py-[1px] rounded-xl absolute left-1/2 transform -translate-x-1/2 lg:left-12 lg:translate-x-0 group-hover:opacity-100 transition-all duration-300 z-20 opacity-0">
//               Projects
//             </span>
//           </span>
//         </div>
//       </div>
//       {/* Main Content */}
//       <div className="flex-1 h-full flex flex-col lg:flex-row gap-6 lg:gap-0 items-start overflow-hidden">
//         <Left />
//         <div className="flex-1 h-full bg-white rounded-2xl flex justify-center items-center shadow-lg overflow-hidden">
//           <div className="w-full h-full flex flex-col overflow-auto scrollbar-hide">
//             {about && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="h-full w-full"
//               >
//                 <About />
//               </motion.div>
//             )}
//             {resume && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="h-full w-full"
//               >
//                 <Resume />
//               </motion.div>
//             )}
//             {projects && (
//               <motion.div
//                 initial={{ opacity: 0 }}
//                 animate={{ opacity: 1 }}
//                 transition={{ duration: 0.5 }}
//                 className="h-full w-full"
//               >
//                 <Projects />
//               </motion.div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaUser } from "react-icons/fa";
import { IoIosPaper } from "react-icons/io";
import { MdWork } from "react-icons/md";
import Left from "./components/home/Left";
import About from "./components/about/About";
import Resume from "./components/resume/Resume";
import Projects from "./components/projects/Projects";
import Sidebar from "./components/Sidebar/Sidebar"; // Ensure the correct import path

const Home = () => {
  const [about, setAbout] = useState(true);
  const [resume, setResume] = useState(false);
  const [projects, setProjects] = useState(false);

  return (
    <div className="w-full min-h-screen lg:h-screen bg-gradient-to-br from-gray-100 via-gray-200 to-white text-gray-800 flex flex-col lg:flex-row items-start justify-between p-4 lg:p-0 rounded-2xl shadow-lg overflow-hidden">
      {/* Sidebar Icons */}
      <div className="w-full lg:w-16 h-full bg-transparent flex lg:flex-col gap-4 lg:gap-0">
        <Sidebar
          setAbout={setAbout}
          setResume={setResume}
          setProjects={setProjects}
          about={about}
          resume={resume}
          projects={projects}
        />
      </div>
      {/* Main Content */}
      <div className="flex-1 h-full flex flex-col lg:flex-row gap-6 lg:gap-0 items-start overflow-hidden">
        <Left />
        <div className="flex-1 h-full bg-white rounded-2xl flex justify-center items-center shadow-lg overflow-hidden">
          <div className="w-full h-full flex flex-col overflow-auto scrollbar-hide">
            {about && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <About />
              </motion.div>
            )}
            {resume && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <Resume />
              </motion.div>
            )}
            {projects && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.5 }}
                className="h-full w-full"
              >
                <Projects />
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
