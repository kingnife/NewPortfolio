"use client";

import { useState } from 'react';

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });
    const [status, setStatus] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            });

            if (res.ok) {
                setStatus('success');
                setFormData({ name: '', email: '', message: '' });
            } else {
                setStatus('error');
            }
        } catch (error) {
            setStatus('error');
        }
    };

    return (
        <section id="contact" className="section-padding">
            <div className="container">
                <h2 className="section-title">Get In Touch</h2>
                <div className="contact-wrapper glass-panel">
                    <form onSubmit={handleSubmit} className="contact-form">
                        <div className="form-group">
                            <label htmlFor="name">Name</label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                placeholder="John Doe"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                placeholder="john@example.com"
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="message">Message</label>
                            <textarea
                                id="message"
                                name="message"
                                value={formData.message}
                                onChange={handleChange}
                                required
                                rows="5"
                                placeholder="Tell me about your project..."
                            ></textarea>
                        </div>
                        <button type="submit" className="submit-btn" disabled={status === 'sending'}>
                            {status === 'sending' ? 'Sending...' : 'Send Message'}
                        </button>
                        {status === 'success' && <p className="success-msg">Message sent successfully!</p>}
                        {status === 'error' && <p className="error-msg">Something went wrong. Please try again.</p>}
                    </form>
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

        .contact-wrapper {
          max-width: 600px;
          margin: 0 auto;
          padding: 40px;
        }

        .form-group {
          margin-bottom: 20px;
        }

        label {
          display: block;
          margin-bottom: 8px;
          color: var(--text-secondary);
          font-size: 0.9rem;
        }

        input, textarea {
          width: 100%;
          padding: 12px;
          background: rgba(255, 255, 255, 0.05);
          border: 1px solid var(--glass-border);
          border-radius: 8px;
          color: var(--text-primary);
          font-family: inherit;
          transition: border-color 0.2s ease;
        }

        input:focus, textarea:focus {
          outline: none;
          border-color: var(--accent-primary);
          background: rgba(255, 255, 255, 0.1);
        }

        .submit-btn {
          width: 100%;
          padding: 14px;
          background: var(--accent-primary);
          color: white;
          border-radius: 8px;
          font-weight: 600;
          font-size: 1rem;
          transition: background 0.2s ease;
        }

        .submit-btn:hover {
          background: var(--accent-secondary);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .success-msg {
          color: #4ade80;
          text-align: center;
          margin-top: 15px;
        }

        .error-msg {
          color: #f87171;
          text-align: center;
          margin-top: 15px;
        }
      `}</style>
        </section>
    );
}
