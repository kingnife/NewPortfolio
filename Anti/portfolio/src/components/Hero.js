"use client";

import Link from 'next/link';

export default function Hero() {
    return (
        <section className="hero">
            <div className="container hero-content">
                <div className="text-content">
                    <h1 className="fade-in-up">
                        Building <span className="gradient-text">Digital Experiences</span> that Matter.
                    </h1>
                    <p className="subtitle fade-in-up delay-1">
                        I am a Full-Stack Developer & UI/UX Designer crafting high-performance web applications with stunning visuals.
                    </p>
                    <div className="cta-group fade-in-up delay-2">
                        <Link href="#projects" className="btn btn-primary">View Projects</Link>
                        <Link href="#contact" className="btn btn-secondary">Contact Me</Link>
                    </div>
                </div>
                <div className="visual-content fade-in-up delay-3">
                    <div className="glass-card">
                        <div className="code-snippet">
                            <span className="keyword">const</span> <span className="variable">developer</span> = {'{'}
                            <br />
                            &nbsp;&nbsp;<span className="property">name</span>: <span className="string">'Your Name'</span>,
                            <br />
                            &nbsp;&nbsp;<span className="property">skills</span>: [<span className="string">'Next.js'</span>, <span className="string">'Design'</span>],
                            <br />
                            &nbsp;&nbsp;<span className="property">hardWorker</span>: <span className="boolean">true</span>
                            <br />
                            {'}'};
                        </div>
                    </div>
                </div>
            </div>

            <div className="background-glow"></div>

            <style jsx>{`
        .hero {
          min-height: 100vh;
          display: flex;
          align-items: center;
          position: relative;
          overflow: hidden;
          padding-top: 80px; /* Navbar height */
        }

        .hero-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 50px;
          align-items: center;
          z-index: 1;
        }

        h1 {
          font-size: 4rem;
          line-height: 1.1;
          margin-bottom: 1.5rem;
        }

        .gradient-text {
          background: linear-gradient(to right, var(--accent-primary), var(--accent-secondary));
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
        }

        .subtitle {
          font-size: 1.25rem;
          color: var(--text-secondary);
          margin-bottom: 2.5rem;
          max-width: 500px;
        }

        .cta-group {
          display: flex;
          gap: 20px;
        }

        .btn {
          padding: 12px 30px;
          border-radius: 30px;
          font-weight: 600;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .btn-primary {
          background: var(--accent-primary);
          color: white;
          box-shadow: 0 4px 15px var(--accent-glow);
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          box-shadow: 0 8px 25px var(--accent-glow);
        }

        .btn-secondary {
          background: transparent;
          border: 1px solid var(--text-secondary);
          color: var(--text-primary);
        }

        .btn-secondary:hover {
          border-color: var(--text-primary);
          background: rgba(255, 255, 255, 0.05);
        }

        .glass-card {
          background: var(--glass-bg);
          backdrop-filter: blur(var(--glass-blur));
          border: 1px solid var(--glass-border);
          border-radius: 20px;
          padding: 30px;
          transform: rotate(-5deg);
          transition: transform 0.5s ease;
          box-shadow: 0 20px 50px rgba(0,0,0,0.3);
        }

        .glass-card:hover {
          transform: rotate(0deg) scale(1.02);
        }

        .code-snippet {
          font-family: 'Fira Code', monospace;
          font-size: 0.9rem;
          line-height: 1.6;
          color: #a1a1a1;
        }

        .keyword { color: #c678dd; }
        .variable { color: #e06c75; }
        .property { color: #d19a66; }
        .string { color: #98c379; }
        .boolean { color: #56b6c2; }

        .background-glow {
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          width: 600px;
          height: 600px;
          background: radial-gradient(circle, var(--accent-glow) 0%, transparent 70%);
          opacity: 0.2;
          z-index: 0;
          pointer-events: none;
        }

        /* Animations */
        .fade-in-up {
          opacity: 0;
          transform: translateY(20px);
          animation: fadeInUp 0.8s forwards;
        }

        .delay-1 { animation-delay: 0.2s; }
        .delay-2 { animation-delay: 0.4s; }
        .delay-3 { animation-delay: 0.6s; }

        @keyframes fadeInUp {
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @media (max-width: 968px) {
          .hero-content {
            grid-template-columns: 1fr;
            text-align: center;
          }
          
          .subtitle {
            margin: 0 auto 2.5rem;
          }

          .cta-group {
            justify-content: center;
          }

          .visual-content {
            margin-top: 50px;
            display: flex;
            justify-content: center;
          }
          
          h1 {
            font-size: 3rem;
          }
        }
      `}</style>
        </section>
    );
}
