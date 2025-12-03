"use client";

const skillsData = {
    Frontend: ["React", "Next.js", "TypeScript", "Tailwind CSS", "Three.js", "Framer Motion"],
    Backend: ["Node.js", "Express", "Python", "PostgreSQL", "MongoDB", "GraphQL"],
    Tools: ["Git", "Docker", "AWS", "Figma", "Jest", "CI/CD"],
    Design: ["UI/UX", "Prototyping", "Wireframing", "Color Theory", "Typography"]
};

export default function Skills() {
    return (
        <section id="skills" className="section-padding">
            <div className="container">
                <h2 className="section-title">Technical Expertise</h2>
                <div className="skills-grid">
                    {Object.entries(skillsData).map(([category, skills]) => (
                        <div key={category} className="skill-category glass-panel">
                            <h3>{category}</h3>
                            <div className="skill-tags">
                                {skills.map((skill) => (
                                    <span key={skill} className="skill-tag">{skill}</span>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            <style jsx>{`
        .section-title {
          text-align: center;
          margin-bottom: 3rem;
          font-size: 2.5rem;
          background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
          background-clip: text;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .skills-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: 30px;
        }

        .skill-category {
          padding: 30px;
          transition: transform 0.3s ease;
        }

        .skill-category:hover {
          transform: translateY(-5px);
          background: rgba(255, 255, 255, 0.05);
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 1.5rem;
          color: var(--text-primary);
          border-bottom: 2px solid var(--accent-primary);
          display: inline-block;
          padding-bottom: 5px;
        }

        .skill-tags {
          display: flex;
          flex-wrap: wrap;
          gap: 10px;
        }

        .skill-tag {
          padding: 8px 16px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          font-size: 0.9rem;
          color: var(--text-secondary);
          transition: all 0.2s ease;
        }

        .skill-tag:hover {
          background: var(--accent-primary);
          color: white;
          border-color: var(--accent-primary);
          transform: scale(1.05);
        }
      `}</style>
        </section>
    );
}
