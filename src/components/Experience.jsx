import React from "react";
import { motion } from "framer-motion";

const experiences = [
  {
    role: "Senior Project Engineer",
    period: "Dec 2024 – Present",
    responsibilities: [
      "Managing Windows and Linux Administration, ensuring system stability, security, and performance.",
      "Deploying, configuring, and managing AWS services like EC2, S3, IAM, RDS, and CloudWatch.",
      "Conducting Disaster Recovery (DR) tests for failover from on-premises to AWS.",
      "Integrating Moogsoft with ServiceNow for automated incident creation and event correlation.",
      "Managing Incident, Change, and Problem management using ServiceNow.",
    ],
  },
  {
    role: "Project Engineer/Scholar Trainee",
    period: "Nov 2020 – Nov 2024",
    responsibilities: [
      "Led application monitoring using AppDynamics and Dynatrace.",
      "Developed dashboards, alerts, and reports to support proactive performance monitoring.",
      "Implemented self-healing mechanisms and custom monitoring extensions.",
      "Built synthetic monitoring with Selenium and Python.",
      "Reduced alert noise with custom ping tests and DB monitoring.",
      "Integrated AppDynamics with ServiceNow via Moogsoft.",
    ],
  },
];

const Experience = () => {
  return (
    <section className="bg-white pt-3 pb-12 px-6" id="experience">
      <motion.h2
        className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10"
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        Professional Experience
      </motion.h2>

      <div className="max-w-5xl mx-auto space-y-8">
        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            className="bg-gray-100 rounded-2xl p-6 shadow"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-semibold text-blue-700">
              {exp.role}{" "}
              <span className="text-gray-600 text-base font-normal">
                ({exp.period})
              </span>
            </h3>
            <ul className="mt-4 list-disc list-inside text-gray-700 space-y-1">
              {exp.responsibilities.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
