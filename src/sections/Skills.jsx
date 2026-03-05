const Skills = () => {
  const skills = [
    "Java",
    "Spring Boot",
    "Microservices",
    "Kafka",
    "Docker",
    "React",
    "MongoDB",
    "MySQL",
    "Git",
    "REST APIs"
  ];

  return (
    <section id="skills" className="py-20 px-6 text-center">
      <h2 className="text-3xl font-bold mb-10">Tech Stack</h2>

      <div className="grid grid-cols-2 md:grid-cols-5 gap-6 max-w-4xl mx-auto">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="p-4 bg-gray-800 rounded-lg hover:scale-105 transition"
          >
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Skills;