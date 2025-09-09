import React from "react";
import SkillCard from "./SkillCard";
import "../../index.css";

// Updated skills array with the requested changes
const skills = [
  {
    category: "Frontend Technologies",
    details: "JavaScript, HTML, CSS, ReactJS, VueJS, AJAX",
  },
  {
    category: "Backend Technologies",
    details: "Java, TypeScript, Python, C, C++, Bash scripting, NodeJS, Django, Spring Boot",
  },
  {
    category: "Mobile Application",
    details: "Java for Android, React-Native for iOS/Android",
  },
  {
    category: "Database Technologies",
    details: "MongoDB, SQLite, PostgreSQL, DynamoDB, Azure Cosmos DB",
  },
  {
    category: "Other Web Technologies",
    details: "RabbitMQ, Apache Kafka, WebSocket, REST APIs, XML, JSON",
  },
  {
    category: "Build and Deployment Technologies",
    details: "Docker, AWS, Azure, GCP, Bitbucket, GitHub, GitLab, Jenkins, Terraform",
  },
  {
    category: "Testing Tools",
    details: "Selenium, JUnit, AndroidJUnitRunner, Chai, Mocha",
  },
  {
    category: "Management Tools",
    details: "Git, Jira, Trello, Confluence",
  },
  {
    category: "Platforms",
    details: "Android, Linux, Windows, macOS",
  },
];

const Skills = () => {
  return (
    <div className="p-4 bg-gray-100 rounded-2xl shadow-lg">
      <p className="mt-2 mb-4 text-gray-700 text-base leading-relaxed">
        Committed to continuously updating skills with the latest technologies.
      </p>
      <div className="mt-2 space-y-2">
        {skills.map((skill, index) => (
          <SkillCard key={index} category={skill.category} details={skill.details} />
        ))}
      </div>
    </div>
  );
};

export default Skills;
