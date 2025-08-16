
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';
import emailjs from 'emailjs-com';

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitMessage, setSubmitMessage] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const result = await emailjs.send(
        'service_i78p9z9',
        'template_kck3pd6',
        formData,
        'vu32HOdnvWKp9dZ-M'
      );

      if (result.text === 'OK') {
        setSubmitMessage('Thank you! Your message has been sent successfully.');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: '',
        });
      }
    } catch (error) {
      setSubmitMessage('Sorry, there was an error sending your message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'itsashar256@gmail.com',
      link: 'mailto:itsashar256@gmail.com',
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 8604865112',
      link: 'tel:+918604865112',
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Chennai, India',
      link: 'https://www.google.com/maps/place/Chennai',
    },
  ];

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: 'https://github.com/Ashar-256',
      name: 'GitHub',
    },
    {
      icon: <FaLinkedin />,
      url: 'https://linkedin.com/in/mohammad-ashar-262an',
      name: 'LinkedIn',
    },
    {
      icon: <FaTwitter />,
      url: 'https://X.com/Ashar_256',
      name: 'Twitter',
    },
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <motion.div 
          className="contact-content"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contact-header">
            <h2 className="section-title">Get In Touch</h2>
            <p className="section-subtitle">
              I'm always open to discussing new opportunities and interesting projects
            </p>
          </div>

          <div className="contact-grid">
            <motion.div 
              className="contact-info"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h3>Let's Connect</h3>
              {/* <p>
                Whether you have a project in mind, want to collaborate, or just want to say hello, 
                I'd love to hear from you. Feel free to reach out through any of the channels below.
              </p> */}

              <div className="contact-details">
                {contactInfo.map((info, index) => (
                  <motion.div 
                    key={index}
                    className="contact-item"
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="contact-icon">{info.icon}</div>
                    <div className="contact-text">
                      <h4>{info.title}</h4>
                      <a href={info.link} target="_blank" rel="noopener noreferrer">
                        {info.value}
                      </a>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="social-links">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="social-link"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    {social.icon}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            <motion.div 
              className="contact-form"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <form onSubmit={handleSubmit} className="form">
                <div className="form-group">
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="Your Email"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Subject"
                    required
                    className="form-input"
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your Message"
                    required
                    rows="5"
                    className="form-textarea"
                  />
                </div>

                <button 
                  type="submit" 
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Sending...' : 'Send Message'}
                </button>

                {submitMessage && (
                  <motion.div 
                    className={`submit-message ${submitMessage.includes('error') ? 'error' : 'success'}`}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    {submitMessage}
                  </motion.div>
                )}
              </form>
            </motion.div>
          </div>
        </motion.div>
      </div>

      <style jsx>{`
        .contact {
          padding: 5rem 0;
          background: linear-gradient(135deg, #1e293b 0%, #0f172a 100%);
        }

        .contact-content {
          max-width: 1200px;
          margin: 0 auto;
        }

        .contact-header {
          text-align: center;
          margin-bottom: 3rem;
        }

        .section-title {
          font-size: 2.5rem;
          font-weight: 700;
          margin-bottom: 1rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .section-subtitle {
          font-size: 1.25rem;
          color: #94a3b8;
          max-width: 600px;
          margin: 0 auto;
        }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 3rem;
          align-items: start;
        }

        .contact-info {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .contact-info h3 {
          font-size: 1.75rem;
          margin-bottom: 1rem;
          color: #f8fafc;
        }

        .contact-info p {
          color: #94a3b8;
          margin-bottom: 2rem;
          line-height: 1.7;
        }

        .contact-details {
          margin-bottom: 2rem;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 1rem;
          margin-bottom: 1.5rem;
        }

        .contact-icon {
          font-size: 1.5rem;
          color: #6366f1;
        }

        .contact-text h4 {
          font-size: 1.1rem;
          margin-bottom: 0.25rem;
          color: #f8fafc;
        }

        .contact-text a {
          color: #94a3b8;
          text-decoration: none;
          transition: color 0.3s ease;
        }

        .contact-text a:hover {
          color: #6366f1;
        }

        .social-links {
          display: flex;
          gap: 1rem;
        }

        .social-link {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 50px;
          height: 50px;
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          color: #cbd5e1;
          font-size: 1.25rem;
          transition: all 0.3s ease;
          text-decoration: none;
        }

        .social-link:hover {
          background: #6366f1;
          color: white;
          transform: translateY(-3px);
        }

        .contact-form {
          background: rgba(255, 255, 255, 0.05);
          padding: 2rem;
          border-radius: 1rem;
          border: 1px solid rgba(255, 255, 255, 0.1);
        }

        .form {
          display: flex;
          flex-direction: column;
          gap: 1.5rem;
        }

        .form-group {
          display: flex;
          flex-direction: column;
        }

        .form-input,
        .form-textarea {
          padding: 1rem;
          background: rgba(255, 255, 255, 0.1);
          border: 1px solid rgba(255, 255, 255, 0.2);
          border-radius: 0.5rem;
          color: #f8fafc;
          font-size: 1rem;
          transition: all 0.3s ease;
        }

        .form-input::placeholder,
        .form-textarea::placeholder {
          color: #94a3b8;
        }

        .form-input:focus,
        .form-textarea:focus {
          outline: none;
          border-color: #6366f1;
          background: rgba(255, 255, 255, 0.15);
        }

        .form-textarea {
          resize: vertical;
          min-height: 120px;
        }

        .submit-btn {
          padding: 1rem 2rem;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          border: none;
          border-radius: 0.5rem;
          font-size: 1rem;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
        }

        .submit-btn:hover:not(:disabled) {
          transform: translateY(-2px);
          box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);
        }

        .submit-btn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
        }

        .submit-message {
          padding: 1rem;
          border-radius: 0.5rem;
          text-align: center;
          font-weight: 500;
        }

        .submit-message.success {
          background: rgba(34, 197, 94, 0.2);
          color: #22c55e;
          border: 1px solid rgba(34, 197, 94, 0.3);
        }

        .submit-message.error {
          background: rgba(239, 68, 68, 0.2);
          color: #ef4444;
          border: 1px solid rgba(239, 68, 68, 0.3);
        }

        @media (max-width: 768px) {
          .contact-grid {
            grid-template-columns: 1fr;
            gap: 2rem;
          }

          .section-title {
            font-size: 2rem;
          }

          .contact-info,
          .contact-form {
            padding: 1.5rem;
          }
        }
      `}</style>
    </section>
  );
};

export default Contacts;
