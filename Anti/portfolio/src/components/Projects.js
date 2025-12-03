"use client";

import Link from 'next/link';

const projects = [
    {
        id: 1,
        title: "E-Commerce Platform",
        description: "A full-stack e-commerce solution with real-time inventory, secure payments, and admin dashboard.",
        tech: ["Next.js", "Node.js", "PostgreSQL", "Stripe"],
        image: "linear-gradient(135deg, #f6d365 0%, #fda085 100%)", // Placeholder gradient
        demoLink: "#",
        codeLink: "#"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "Collaborative task manager with drag-and-drop interface and team features.",
        tech: ["React", "Firebase", "Tailwind", "Dnd-Kit"],
        image: "linear-gradient(135deg, #84fab0 0%, #8fd3f4 100%)",
        demoLink: "#",
        codeLink: "#"
    },
    {
        id: 3,
        title: "AI Content Generator",
        description: "SaaS application leveraging OpenAI API to generate marketing copy and blog posts.",
        tech: ["Next.js", "OpenAI API", "MongoDB", "Auth.js"],
        image: "linear-gradient(135deg, #a18cd1 0%, #fbc2eb 100%)",
        demoLink: "#",
        codeLink: "#"
    }
];

export default function Projects() {
    return (
        <section id="projects" className="section-padding">
            <div className="container">
                <h2 className="section-title">Featured Projects</h2>
                <div className="projects-grid">
                    {projects.map((project) => (
                        <div key={project.id} className="project-card glass-panel">
                            <div className="project-image" style={{ background: project.image }}>
                                <div className="overlay">
                                    <Link href={project.demoLink} className="btn-icon">Live Demo</Link>
                                    <Link href={project.codeLink} className="btn-icon">GitHub</Link>
                                </div>
                            </div>
                            <div className="project-info">
                                <h3>{project.title}</h3>
                                <p>{project.description}</p>
                                <div className="tech-stack">
                                    {project.tech.map((t) => (
                                        <span key={t} className="tech-tag">{t}</span>
                                    ))}
                                </div>
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

        .projects-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 40px;
        }

        .project-card {
          overflow: hidden;
          transition: transform 0.3s ease, box-shadow 0.3s ease;
        }

        .project-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.4);
        }

        .project-image {
          height: 200px;
          position: relative;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .overlay {
          position: absolute;
          inset: 0;
          background: rgba(0,0,0,0.7);
          display: flex;
          gap: 15px;
          align-items: center;
          justify-content: center;
          opacity: 0;
          transition: opacity 0.3s ease;
        }

        .project-card:hover .overlay {
          opacity: 1;
        }

        .btn-icon {
          padding: 8px 16px;
          background: white;
          color: black;
          border-radius: 20px;
          font-weight: 600;
          font-size: 0.9rem;
        }

        .btn-icon:hover {
          background: var(--accent-primary);
          color: white;
        }

        .project-info {
          padding: 25px;
        }

        h3 {
          font-size: 1.5rem;
          margin-bottom: 10px;
          color: var(--text-primary);
        }

        p {
          color: var(--text-secondary);
          margin-bottom: 20px;
          font-size: 0.95rem;
        }

        .tech-stack {
          display: flex;
          flex-wrap: wrap;
          gap: 8px;
        }

        .tech-tag {
          font-size: 0.8rem;
          color: var(--accent-primary);
          background: rgba(59, 130, 246, 0.1);
          padding: 4px 10px;
          border-radius: 12px;
        }
      `}</style>
        </section>
    );
}
