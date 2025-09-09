// import React from "react";
// import { useInView } from "react-intersection-observer";
// import Title from "../home/Title";
// import ProjectsCard from "./ProjectsCard";
// import "../../index.css"; // Ensure you have your CSS for animations

// // Import the GitHub logo image
// import githubLogo from "../../assets/github.png";

// // Example data for projects (replace with your actual data)
// const projectsData = [
//   {
//     title: "Event Management App",
//     description: "A mobile application for event registration and management, enabling users to browse and register for events seamlessly.",
//     githubUrl: "https://github.com/gautumpatel/YDS",
//     architectUrl: "https://github.com/gautumpatel/YDS/blob/main/Architecture%20.png?raw=true",
//     frontEnd: ["React Native"],
//     backEnd: ["Node.js"],
//     cloudDevOps: ["Route 53", "ECS", "Load Balancer", "CloudFront", "Auto Scaling"],
//     additionalPoints: [
//       "Seamless event registration and management.",
//       "Real-time notifications for event updates.",
//       "Integrated payment gateway for ticket purchases.",
//     ],
//   },
//   {
//     title: "Apptist: Online Education Platform",
//     description: "An online education website offering course purchases and live teaching, designed to enhance the learning experience for users.",
//     githubUrl: "https://github.com/gautumpatel/Humber-Industry-Project-Apptist/tree/master",
//     architectUrl: "https://github.com/gautumpatel/Humber-Industry-Project-Apptist/blob/ce9d3b6517287c2c1b41a64759f44d39af6cf454/Architecture%20Diagram.jpg?raw=true",
//     frontEnd: ["React JS"],
//     backEnd: ["GraphQL"],
//     cloudDevOps: ["DynamoDB", "Amplify", "Cognito", "App Sync"],
//     additionalPoints: [
//       "Interactive course content with multimedia support.",
//       "Live classes and real-time student engagement.",
//       "Scalable backend for handling high traffic.",
//     ],
//   },
//   {
//     title: "E-commerce Microservices Platform",
//     description: "A comprehensive e-commerce website that supports diverse product purchases and provides services similar to major retail platforms.",
//     githubUrl: "https://github.com/gautumpatel/Serverless-Event-driven-E-commerce-Microservices",
//     architectUrl: "https://user-images.githubusercontent.com/1147445/158019166-96732203-6642-4242-b1d9-d53ece2e1ed3.png",
//     frontEnd: ["React JS"],
//     backEnd: ["JavaScript"],
//     cloudDevOps: ["API Gateway", "Lambda", "SQS", "DynamoDB"],
//     additionalPoints: [
//       "Microservices architecture for modular development.",
//       "Integration with third-party payment gateways.",
//       "Advanced search and filtering capabilities.",
//     ],
//   },
//   {
//     title: "Advanced Serverless Application Framework",
//     description: "A versatile framework for building serverless applications using AWS services, featuring modules on web applications, authentication, data processing, and more.",
//     githubUrl: "https://github.com/gautumpatel/serverless-workshop",
//     architectUrl: "https://raw.githubusercontent.com/gautumpatel/serverless-workshop/main/AWS%20Architect.png",
//     frontEnd: ["JavaScript"],
//     backEnd: ["Python"],
//     cloudDevOps: ["AWS Step Functions", "AWS Kinesis", "S3", "AWS Amplify", "Cognito", "CodePipeline", "Rekognition"],
//     additionalPoints: [
//       "Comprehensive coverage of serverless architectures.",
//       "Built-in modules for authentication and data processing.",
//       "Integration with various AWS services for enhanced functionality.",
//     ],
//   },
//   {
//     title: "Database Migration Automation",
//     description: "An automated solution for database migration using AWS services, including MariaDB, Terraform, Jenkins, and Docker, ensuring smooth data transitions.",
//     githubUrl: "https://github.com/gautumpatel/Database-Migration/",
//     architectUrl: "https://raw.githubusercontent.com/gautumpatel/Database-Migration/main/AWS%20Architect.png",
//     frontEnd: ["JavaScript"],
//     backEnd: ["Node.js"],
//     cloudDevOps: ["AWS", "MariaDB", "Terraform", "Jenkins", "Docker", "Bash"],
//     additionalPoints: [
//       "Automated migration process for databases.",
//       "Integration with Terraform for infrastructure management.",
//       "Efficient handling of data transitions with minimal downtime.",
//     ],
//   },
// ];

// const Projects = () => {
//   // Intersection Observer for the section
//   const { ref: sectionRef, inView: sectionInView } = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   // Intersection Observer for the title
//   const { ref: titleRef, inView: titleInView } = useInView({
//     triggerOnce: false,
//     threshold: 0.1,
//   });

//   return (
//     <section
//       id="projects"
//       ref={sectionRef}
//       className={`transition-opacity duration-1000 ${sectionInView ? 'opacity-100' : 'opacity-0'}`}
//     >
//       <div className="p-6 bg-white rounded-2xl shadow-md">
//         <div className="mb-6">
//           <div
//             ref={titleRef}
//             className={`transition-transform duration-700 ease-out transform ${
//               titleInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
//             }`}
//           >
//             <Title title="Projects" subTitle="" icon={<img src={githubLogo} alt="GitHub Logo" className="w-8 h-8" />} />
//           </div>
//         </div>
//         <div className="flex flex-col space-y-6 mt-6">
//           {projectsData.map((project, index) => (
//             <ProjectsCard
//               key={index}
//               title={project.title}
//               description={project.description}
//               githubUrl={project.githubUrl}
//               architectUrl={project.architectUrl}
//               frontEnd={project.frontEnd}
//               backEnd={project.backEnd}
//               cloudDevOps={project.cloudDevOps}
//             />
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Projects;

import React from "react";
import { useInView } from "react-intersection-observer";
import Title from "../home/Title";
import ProjectsCard from "./ProjectsCard";
import "../../index.css"; // Ensure you have your CSS for animations

// Import the GitHub logo image
import githubLogo from "../../assets/github.png";

// Example data for projects (replace with your actual data)
const projectsData = [
  {
    title: "Harmony with Heart - Mobile App for Yogi Divine Society",
    description: "A mobile application for event registration and management, enabling users to browse and register for events seamlessly.",
    githubUrl: "https://github.com/gautumpatel/YDS",
    architectUrl: "https://github.com/gautumpatel/YDS/blob/main/Architecture%20.png?raw=true",
    frontEnd: ["React Native"],
    backEnd: ["Node.js"],
    cloudDevOps: ["Route 53", "ECS", "Load Balancer", "CloudFront", "Auto Scaling"],
    additionalPoints: [
      "Seamless event registration and management.",
      "Real-time notifications for event updates.",
      "Integrated payment gateway for ticket purchases.",
    ],
  },
  {
    title: "Apptist: Online Education Platform",
    description: "An online education website offering course purchases and live teaching, designed to enhance the learning experience for users.",
    githubUrl: "https://github.com/gautumpatel/Humber-Industry-Project-Apptist/tree/master",
    architectUrl: "https://github.com/gautumpatel/Humber-Industry-Project-Apptist/blob/ce9d3b6517287c2c1b41a64759f44d39af6cf454/Architecture%20Diagram.jpg?raw=true",
    frontEnd: ["React JS"],
    backEnd: ["GraphQL"],
    cloudDevOps: ["DynamoDB", "Amplify", "Cognito", "App Sync"],
    additionalPoints: [
      "Interactive course content with multimedia support.",
      "Live classes and real-time student engagement.",
      "Scalable backend for handling high traffic.",
    ],
  },
  {
    title: "E-commerce Microservices Platform",
    description: "A comprehensive e-commerce website that supports diverse product purchases and provides services similar to major retail platforms.",
    githubUrl: "https://github.com/gautumpatel/Serverless-Event-driven-E-commerce-Microservices",
    architectUrl: "https://user-images.githubusercontent.com/1147445/158019166-96732203-6642-4242-b1d9-d53ece2e1ed3.png",
    frontEnd: ["React JS"],
    backEnd: ["JavaScript"],
    cloudDevOps: ["API Gateway", "Lambda", "SQS", "DynamoDB"],
    additionalPoints: [
      "Microservices architecture for modular development.",
      "Integration with third-party payment gateways.",
      "Advanced search and filtering capabilities.",
    ],
  },
  {
    title: "Advanced Serverless Application Framework",
    description: "A versatile framework for building serverless applications using AWS services, featuring modules on web applications, authentication, data processing, and more.",
    githubUrl: "https://github.com/gautumpatel/serverless-workshop",
    architectUrl: "https://raw.githubusercontent.com/gautumpatel/serverless-workshop/main/AWS%20Architect.png",
    frontEnd: ["JavaScript"],
    backEnd: ["Python"],
    cloudDevOps: ["AWS Step Functions", "AWS Kinesis", "S3", "AWS Amplify", "Cognito", "CodePipeline", "Rekognition"],
    additionalPoints: [
      "Comprehensive coverage of serverless architectures.",
      "Built-in modules for authentication and data processing.",
      "Integration with various AWS services for enhanced functionality.",
    ],
  },
  {
    title: "Database Migration Automation",
    description: "An automated solution for database migration using AWS services, including MariaDB, Terraform, Jenkins, and Docker, ensuring smooth data transitions.",
    githubUrl: "https://github.com/gautumpatel/Database-Migration/",
    architectUrl: "https://raw.githubusercontent.com/gautumpatel/Database-Migration/main/AWS%20Architect.png",
    frontEnd: ["JavaScript"],
    backEnd: ["Node.js"],
    cloudDevOps: ["AWS", "MariaDB", "Terraform", "Jenkins", "Docker", "Bash"],
    additionalPoints: [
      "Automated migration process for databases.",
      "Integration with Terraform for infrastructure management.",
      "Efficient handling of data transitions with minimal downtime.",
    ],
  },
];

const Projects = () => {
  // Intersection Observer for the section
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  // Intersection Observer for the title
  const { ref: titleRef, inView: titleInView } = useInView({
    triggerOnce: false,
    threshold: 0.1,
  });

  return (
    <section
      id="projects"
      ref={sectionRef}
      className={`transition-opacity duration-1000 ${sectionInView ? 'opacity-100' : 'opacity-0'} mb-20`}
    >
      <div className="p-6 bg-white rounded-2xl shadow-md">
        <div className="mb-6">
          <div
            ref={titleRef}
            className={`transition-transform duration-700 ease-out transform ${
              titleInView ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
            }`}
          >
            <Title 
              title="Projects" 
              subTitle="" 
              icon={<img src={githubLogo} alt="GitHub Logo" className="w-8 h-8" />} 
            />
          </div>
        </div>
        <div className="flex flex-col space-y-6 mt-6">
          {projectsData.map((project, index) => (
            <ProjectsCard
              key={index}
              title={project.title}
              description={project.description}
              githubUrl={project.githubUrl}
              architectUrl={project.architectUrl}
              frontEnd={project.frontEnd}
              backEnd={project.backEnd}
              cloudDevOps={project.cloudDevOps}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
