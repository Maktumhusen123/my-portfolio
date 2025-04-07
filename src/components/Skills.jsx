import React from "react";

const skills = [
  "AppDynamics",
  "Grafana",
  "Dynatrace",
  "ServiceNow",
  "AWS Basics",
  "Selenium with Python",
  "SQL",
  "HTML",
];

const Skills = () => {
  return (
    <section className="bg-gray-100 py-16 px-6" id="skills">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Skills
      </h2>

      <div className="max-w-4xl mx-auto grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 text-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="bg-white shadow-md rounded-xl p-4 hover:shadow-lg transition"
          >
            <p className="text-gray-800 font-semibold">{skill}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;
