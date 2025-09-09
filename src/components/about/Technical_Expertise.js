// import React from "react";
// import { useInView } from "react-intersection-observer";
// import { FaDocker, FaAws, FaJenkins } from "react-icons/fa";
// import { AiOutlineCloudServer } from "react-icons/ai";
// import { SiKubernetes, SiGrafana } from "react-icons/si";
// import ServicesCard from "./ServicesCard";
// import "../../index.css"; // Ensure to import the CSS file for animations

// const Technical_Expertise = () => {
//   const [techExpertiseRef, techExpertiseInView] = useInView({ triggerOnce: false, threshold: 0.1 });

//   return (
//     <div ref={techExpertiseRef} className={`fade-in ${techExpertiseInView ? 'show' : ''} grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-100 rounded-2xl shadow-lg`}>
//       <ServicesCard
//         icons={<AiOutlineCloudServer className="text-4xl text-designColor" />}
//         title="Cloud Development"
//         subTitle="Experienced in developing and deploying Java applications using Spring Boot on AWS, leveraging cloud services like AWS Lambda, DynamoDB, and Kafka for real-time data streaming."
//       />
//       <ServicesCard
//         icons={<SiKubernetes className="text-4xl text-designColor" />}
//         title="Container Orchestration"
//         subTitle="Proficient in Docker and Kubernetes for scalable container orchestration and deployment, ensuring efficient and reliable application delivery."
//       />
//       <ServicesCard
//         icons={<FaJenkins className="text-4xl text-designColor" />}
//         title="CI/CD Pipelines"
//         subTitle="Skilled in designing and implementing CI/CD pipelines with Jenkins and GitLab, enabling seamless code integration and deployment using infrastructure as code practices."
//       />
//       <ServicesCard
//         icons={<SiGrafana className="text-4xl text-designColor" />}
//         title="Monitoring & Performance"
//         subTitle="Expertise in using Prometheus and Grafana for monitoring and visualizing application metrics, as well as implementing performance enhancements using Redis caching."
//       />
//     </div>
//   );
// };

// export default Technical_Expertise;

import React from "react";
import { useInView } from "react-intersection-observer";
import { FaLaptopCode, FaDocker, FaAws, FaJenkins, FaMobileAlt } from "react-icons/fa";
import { AiOutlineCloudServer } from "react-icons/ai";
import { SiKubernetes, SiGrafana, SiMicrosoftazure } from "react-icons/si";
import ServicesCard from "./ServicesCard";
import "../../index.css"; // Ensure to import the CSS file for animations

const Technical_Expertise = () => {
  const [techExpertiseRef, techExpertiseInView] = useInView({ triggerOnce: false, threshold: 0.1 });

  return (
    <div ref={techExpertiseRef} className={`fade-in ${techExpertiseInView ? 'show' : ''} grid grid-cols-1 md:grid-cols-2 gap-8 p-6 bg-gray-100 rounded-2xl shadow-lg`}>
      <ServicesCard
        icons={<FaLaptopCode className="text-4xl text-designColor" />}
        title="Full Stack Development"
        subTitle="Expert in developing scalable web and mobile applications using Java and Spring Boot, with a strong emphasis on RESTful APIs, microservices architecture, and frontend technologies like React.js and mobile frameworks such as React Native."
      />
      <ServicesCard
        icons={<AiOutlineCloudServer className="text-4xl text-designColor" />}
        title="Cloud Development"
        subTitle="Experienced in deploying and managing applications on AWS and Azure, using services like AWS Lambda, DynamoDB, Azure Functions, and Azure Cosmos DB for real-time processing and cloud-native solutions."
      />
      <ServicesCard
        icons={<FaJenkins className="text-4xl text-designColor" />}
        title="DevOps & CI/CD"
        subTitle="Skilled in creating and managing CI/CD pipelines with Jenkins, GitLab, and Terraform, automating the entire software delivery process using infrastructure as code (IaC) practices."
      />
      <ServicesCard
        icons={<SiGrafana className="text-4xl text-designColor" />}
        title="Monitoring & Performance Optimization"
        subTitle="Proficient in monitoring, logging, and performance optimization using tools like Prometheus, Grafana, and Redis, ensuring high availability and scalability of applications."
      />
    </div>
  );
};

export default Technical_Expertise;
