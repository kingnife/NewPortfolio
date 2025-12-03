"use client";

export default function About() {
    return (
        <section id="about" className="section-padding">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content glass-panel">
                    <div className="about-text">
                        <p>
                            I am a passionate Full-Stack Developer with a keen eye for design.
                            I bridge the gap between engineering and aesthetics, creating software that not only works perfectly but looks beautiful.
                        </p>
                        <p>
                            With expertise in modern web technologies like Next.js, React, and Node.js,
                            I build scalable applications from the ground up. My approach combines technical depth with creative problem-solving.
                        </p>
                        <div className="stats">
                            <div className="stat-item">
                                <span className="stat-number">5+</span>
                                <span className="stat-label">Years Experience</span>
                            </div>
                            <div className="stat-item">
                                <span className="stat-number">50+</span>
                                <span className="stat-label">Projects Completed</span>
                            </div>
                        </div>
                    </div>
                    <div className="about-visual">
                        <div className="profile-card">
                            <div className="profile-glow"></div>
                            {/* Placeholder for profile image or abstract graphic */}
                            <div className="profile-placeholder"></div>
                        </div>
                    </div>
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

        .about-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          padding: 40px;
          align-items: center;
        }

        .about-text p {
          font-size: 1.1rem;
          color: var(--text-secondary);
          margin-bottom: 1.5rem;
          line-height: 1.8;
        }

        .stats {
          display: flex;
          gap: 40px;
          margin-top: 30px;
        }

        .stat-number {
          display: block;
          font-size: 2rem;
          font-weight: 700;
          color: var(--accent-primary);
        }

        .stat-label {
          font-size: 0.9rem;
          color: var(--text-secondary);
        }

        .about-visual {
          display: flex;
          justify-content: center;
        }

        .profile-card {
          width: 300px;
          height: 400px;
          background: rgba(255, 255, 255, 0.03);
          border-radius: 20px;
          position: relative;
          overflow: hidden;
        }

        .profile-glow {
          position: absolute;
          top: -50%;
          left: -50%;
          width: 200%;
          height: 200%;
          background: radial-gradient(circle, var(--accent-secondary) 0%, transparent 50%);
          opacity: 0.2;
          animation: rotate 10s linear infinite;
        }

        .profile-placeholder {
          position: absolute;
          inset: 5px;
          background: var(--bg-secondary);
          border-radius: 15px;
          z-index: 1;
        }

        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @media (max-width: 768px) {
          .about-content {
            grid-template-columns: 1fr;
            text-align: center;
          }

          .stats {
            justify-content: center;
          }
        }
      `}</style>
        </section>
    );
}
