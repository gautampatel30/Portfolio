import React from "react";
import Title from "../home/Title";
import AboutMe from "./AboutMe";
import FunFact from "./FunFact";
import Technical_Expertise from "./Technical_Expertise";
import Testimonials from "./Testimonials";
import Certification from "./Certification"; // Import the new Certification component
import "../../index.css"; // Ensure you have your CSS for animations

// Import section logos
import aboutMeLogo from "../../assets/aboutme.png";
import technicalExpertiseLogo from "../../assets/technicalexpertise.png";
import funFactLogo from "../../assets/funfact.png";
import testimonialLogo from "../../assets/testimonial.png";
import certificationLogo from "../../assets/certification.jpg"; // Import logo for Certification

const About = () => {
  return (
    <section id="about" className="w-full px-6 py-10 bg-white text-gray-800 rounded-2xl shadow-lg space-y-10 mb-20">
      <div className="mb-10">
        <Title 
          title="About Me" 
          subTitle="" 
          icon={<img src={aboutMeLogo} alt="About Me Logo" className="w-10 h-10" />} 
        />
        <AboutMe />
      </div>
      <div className="mb-10">
        <Title 
          title="Technical Expertise" 
          subTitle="" 
          icon={<img src={technicalExpertiseLogo} alt="Technical Expertise Logo" className="w-8 h-8" />} 
        />
        <Technical_Expertise />
      </div>
      <div className="mb-10">
        <Title 
          title="Certifications" 
          subTitle="" 
          icon={<img src={certificationLogo} alt="Certifications Logo" className="w-8 h-8" />} 
        />
        <Certification /> {/* Added Certification component with Title */}
      </div>
      <div className="mb-10">
        <Title 
          title="Recommendations" 
          subTitle="" 
          icon={<img src={testimonialLogo} alt="Testimonials Logo" className="w-10 h-10" />} 
        />
        <Testimonials />
      </div>
      <div className="mb-10">
        <Title 
          title="Fun Facts" 
          subTitle="" 
          icon={<img src={funFactLogo} alt="Fun Facts Logo" className="w-12 h-12" />} 
        />
        <FunFact />
      </div>
    </section>
  );
};

export default About;
