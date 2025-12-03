"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const toggleMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container navbar-container">
                <Link href="/" className="logo">
                    Portfolio<span className="dot">.</span>
                </Link>

                <div className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <Link href="#about" onClick={() => setIsMobileMenuOpen(false)}>About</Link>
                    <Link href="#skills" onClick={() => setIsMobileMenuOpen(false)}>Skills</Link>
                    <Link href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</Link>
                    <Link href="#contact" onClick={() => setIsMobileMenuOpen(false)} className="cta-button">Contact</Link>
                </div>

                <button className="mobile-menu-btn" onClick={toggleMenu} aria-label="Toggle menu">
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                    <span className={`bar ${isMobileMenuOpen ? 'open' : ''}`}></span>
                </button>
            </div>

            <style jsx>{`
        .navbar {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          z-index: 1000;
          padding: 20px 0;
          transition: all 0.3s ease;
        }

        .navbar.scrolled {
          background: rgba(5, 5, 5, 0.8);
          backdrop-filter: blur(10px);
          padding: 15px 0;
          border-bottom: 1px solid rgba(255, 255, 255, 0.05);
        }

        .navbar-container {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .logo {
          font-size: 1.5rem;
          font-weight: 700;
          color: var(--text-primary);
        }

        .dot {
          color: var(--accent-primary);
        }

        .nav-links {
          display: flex;
          gap: 30px;
          align-items: center;
        }

        .nav-links a {
          font-size: 0.95rem;
          font-weight: 500;
          color: var(--text-secondary);
        }

        .nav-links a:hover, .nav-links a.active {
          color: var(--text-primary);
        }

        .cta-button {
          padding: 8px 20px;
          background: var(--accent-primary);
          color: white !important;
          border-radius: 20px;
          transition: transform 0.2s ease, box-shadow 0.2s ease;
        }

        .cta-button:hover {
          transform: translateY(-2px);
          box-shadow: 0 4px 12px var(--accent-glow);
        }

        .mobile-menu-btn {
          display: none;
          flex-direction: column;
          gap: 6px;
          background: none;
          border: none;
          cursor: pointer;
        }

        .bar {
          width: 25px;
          height: 2px;
          background-color: var(--text-primary);
          transition: 0.3s;
        }

        @media (max-width: 768px) {
          .mobile-menu-btn {
            display: flex;
          }

          .nav-links {
            position: absolute;
            top: 100%;
            left: 0;
            width: 100%;
            flex-direction: column;
            background: var(--bg-secondary);
            padding: 20px;
            gap: 20px;
            transform: translateY(-100%);
            opacity: 0;
            pointer-events: none;
            transition: 0.3s ease;
            border-bottom: 1px solid var(--glass-border);
          }

          .nav-links.active {
            transform: translateY(0);
            opacity: 1;
            pointer-events: auto;
          }
          
          .bar.open:nth-child(1) {
            transform: rotate(45deg) translate(5px, 6px);
          }
          .bar.open:nth-child(2) {
            opacity: 0;
          }
          .bar.open:nth-child(3) {
            transform: rotate(-45deg) translate(5px, -6px);
          }
        }
      `}</style>
        </nav>
    );
}
