import React from "react";

const projects = [
  {
    title: "Student Result Tracker",
    description:
      "A web tool to manage student results for classes 1 to 10. Built with React and Firebase.",
    tech: ["React", "Firebase", "Tailwind"],
  },
  {
    title: "Portfolio Website",
    description:
      "My personal portfolio built using MERN stack and TailwindCSS.",
    tech: ["MongoDB", "Express", "React", "Node"],
  },
  {
    title: "YouTube Automation Tool (Idea)",
    description:
      "A conceptual tool to help manage content scheduling and thumbnails for YouTube creators.",
    tech: ["Python", "AI", "YouTube API"],
  },
];

const Projects = () => {
  return (
    <section className="bg-gray-100 py-16 px-6" id="projects">
      <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
        Projects
      </h2>
      <div className="max-w-5xl mx-auto grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-2xl p-6 shadow-md hover:shadow-xl transition"
          >
            <h3 className="text-xl font-semibold text-blue-600 mb-2">
              {project.title}
            </h3>
            <p className="text-gray-700 mb-4">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
