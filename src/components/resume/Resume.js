// import React from "react";
// import Title from "../home/Title";
// import Experience from "./Experience";
// import Skills from "./Skills";
// import Education from "./Education";
// import "../../index.css"; // Ensure you have your CSS for animations

// // Import section logos
// import experienceLogo from "../../assets/experience.png";
// import skillsLogo from "../../assets/skills.png";
// import educationLogo from "../../assets/education.png";

// const Resume = () => {
//   return (
//     <section id="resume" className="w-full px-6 py-10 bg-white text-gray-800 rounded-2xl shadow-lg space-y-10">
//       <div className="mb-10">
//         <Title 
//           title="Experience" 
//           subTitle="" 
//           icon={<img src={experienceLogo} alt="Experience Logo" className="w-10 h-10" />} 
//         />
//         <Experience /> {/* The scroll effect is applied inside this component */}
//       </div>
//       <div className="mb-10">
//         <Title 
//           title="Technical Skills" 
//           subTitle="" 
//           icon={<img src={skillsLogo} alt="Skills Logo" className="w-10 h-10" />} 
//         />
//         <Skills />
//       </div>
//       <div className="mb-10">
//         <Title 
//           title="Education" 
//           subTitle="" 
//           icon={<img src={educationLogo} alt="Education Logo" className="w-10 h-10" />} 
//         />
//         <Education />
//       </div>
//     </section>
//   );
// };

// export default Resume;

import React from "react";
import Title from "../home/Title";
import Experience from "./Experience";
import Skills from "./Skills";
import Education from "./Education";
import "../../index.css"; // Ensure you have your CSS for animations

// Import section logos
import experienceLogo from "../../assets/experience.png";
import skillsLogo from "../../assets/skills.png";
import educationLogo from "../../assets/education.png";

const Resume = () => {
  return (
    <section id="resume" className="w-full px-6 py-10 bg-white text-gray-800 rounded-2xl shadow-lg space-y-10">
      <div className="mb-10">
        <Title 
          title="Experience" 
          subTitle="" 
          icon={<img src={experienceLogo} alt="Experience Logo" className="w-10 h-10" />} 
        />
        <Experience /> {/* The scroll effect is applied inside this component */}
      </div>
      <div className="mb-10">
        <Title 
          title="Technical Skills" 
          subTitle="" 
          icon={<img src={skillsLogo} alt="Skills Logo" className="w-10 h-10" />} 
        />
        <Skills />
      </div>
      <div className="mb-10">
        <Title 
          title="Education" 
          subTitle="" 
          icon={<img src={educationLogo} alt="Education Logo" className="w-10 h-10" />} 
        />
        <Education />
      </div>
    </section>
  );
};

export default Resume;
