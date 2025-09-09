import React from "react";
import ExperienceCard from "./ExperienceCard";
import "../../index.css";

const experienceData = [
  {
    badge: "Nov 2023 - Jun 2025",
    title: "Full Stack Developer",
    subTitle: "Webmount Studio, Toronto",
    des: [
      [
        { text: "Developed scalable backend microservices using ", bold: false },
        { text: "RESTful & GraphQL APIs", bold: true },
        { text: ", focusing on modular design and data efficiency.", bold: false }
      ],
      [
        { text: "Built reusable, high-performance ", bold: false },
        { text: "React.js components", bold: true },
        { text: " with advanced hooks and Context API, optimizing UX, load times, and state management.", bold: false }
      ],
      [
        { text: "Designed and implemented dynamic UIs leveraging ", bold: false },
        { text: "React and Angular", bold: true },
        { text: " to improve component reusability and scalability.", bold: false }
      ],
      [
        { text: "Optimized ", bold: false },
        { text: "PostgreSQL and MongoDB", bold: true },
        { text: " queries, designed normalized schemas, and managed complex migrations for efficient data handling.", bold: false }
      ],
      [
        { text: "Deployed scalable services on ", bold: false },
        { text: "AWS (EC2, ECS, EKS, RDS, S3, Fargate)", bold: true },
        { text: " with Terraform and Ansible (IaC), implementing ALB, Auto Scaling, and Multi-AZ deployments to improve scalability by 40% and reduce costs by 30%.", bold: false }
      ],
      [
        { text: "Integrated ", bold: false },
        { text: "RabbitMQ", bold: true },
        { text: " for asynchronous microservice communication and email dispatching.", bold: false }
      ],
      [
        { text: "Enhanced performance via ", bold: false },
        { text: "Redis caching, query optimization, and code refactoring", bold: true },
        { text: ", reducing response times significantly.", bold: false }
      ],
      [
        { text: "Automated CI/CD pipelines with ", bold: false },
        { text: "GitLab CI, Jenkins, and Azure DevOps", bold: true },
        { text: ", enabling zero-downtime deployments through blue-green and rolling strategies.", bold: false }
      ],
      [
        { text: "Enforced security best practices with ", bold: false },
        { text: "IAM, VPC, and encryption policies", bold: true },
        { text: ", improving cloud security posture and reducing risks by 60%.", bold: false }
      ],
      [
        { text: "Deployed and managed ", bold: false },
        { text: "Kubernetes clusters (EKS)", bold: true },
        { text: " with Dockerized microservices, implementing HPA and Cluster Autoscaler to reduce infra costs by 35%.", bold: false }
      ],
      [
        { text: "Configured real-time monitoring and cost optimization with ", bold: false },
        { text: "Prometheus, Grafana, and AWS cost tools", bold: true },
        { text: ", reducing incident resolution time by 60% and cutting cloud spending by 25%.", bold: false }
      ],
      [
        { text: "Conducted code reviews and applied best practices to ensure maintainability and high-quality deliverables.", bold: false }
      ]
    ],
  }
];

const Experience = () => {
  return (
    <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 space-y-4">
      {experienceData.map((item, index) => (
        <ExperienceCard
          key={index}
          title={item.title}
          subTitle={`${item.subTitle}, ${item.badge}`}
          des={item.des}
        />
      ))}
    </div>
  );
};

export default Experience;
