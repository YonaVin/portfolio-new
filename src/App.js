import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './App.css';

// Projects data
const projects = [
  {
    title: "E-commerce Platform",
    description: "A full-featured e-commerce platform with user authentication, product management, shopping cart, and payment integration. Built with modern web technologies for optimal performance and user experience.",
    role: "Full Stack Developer",
    technologies: ["React", "Node.js", "MongoDB", "Stripe", "Redux"],
    screenshot: "https://via.placeholder.com/600x400/4ecdc4/ffffff?text=E-commerce+Platform",
    gallery: [
      "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Home+Page",
      "https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Product+Page",
      "https://via.placeholder.com/300x200/45b7d1/ffffff?text=Cart+Page"
    ],
    link: "https://github.com/yourusername/ecommerce-platform"
  },
  {
    title: "Task Manager",
    description: "A modern task management application with drag-and-drop functionality, real-time updates, and collaborative features. Perfect for team productivity and project organization.",
    role: "Frontend Developer",
    technologies: ["React", "TypeScript", "Firebase", "DnD Kit", "Tailwind"],
    screenshot: "https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Task+Manager",
    gallery: [
      "https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Dashboard",
      "https://via.placeholder.com/300x200/45b7d1/ffffff?text=Task+Board",
      "https://via.placeholder.com/300x200/96ceb4/ffffff?text=Analytics"
    ],
    link: "https://github.com/yourusername/task-manager"
  },
  {
    title: "Weather App",
    description: "A beautiful weather application with real-time forecasts, location-based weather data, and an intuitive user interface. Features include 7-day forecasts and weather alerts.",
    role: "Frontend Developer",
    technologies: ["JavaScript", "Weather API", "CSS3", "Geolocation", "PWA"],
    screenshot: "https://via.placeholder.com/600x400/45b7d1/ffffff?text=Weather+App",
    gallery: [
      "https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Current+Weather",
      "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Forecast",
      "https://via.placeholder.com/300x200/96ceb4/ffffff?text=Settings"
    ],
    link: "https://github.com/yourusername/weather-app"
  },
  {
    title: "Portfolio Website",
    description: "A creative portfolio website showcasing my work and skills. Features smooth animations, responsive design, and an interactive user experience that reflects my design philosophy.",
    role: "Designer & Developer",
    technologies: ["React", "Framer Motion", "CSS3", "Responsive Design", "Creative UI"],
    screenshot: "https://via.placeholder.com/600x400/96ceb4/ffffff?text=Portfolio+Website",
    gallery: [
      "https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Home+Page",
      "https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Projects+Page",
      "https://via.placeholder.com/300x200/45b7d1/ffffff?text=Contact+Page"
    ],
    link: "https://github.com/yourusername/portfolio"
  }
];

function App() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);

  return (
    <div className="notebook-page">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <motion.section 
          className="section hero-section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="hero-content">
            <motion.h1 
              className="section-title"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              Hello! 👋
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              I'm [Your Name]
            </motion.h2>
            
            <motion.p 
              className="sketch-text"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.9, duration: 0.8 }}
            >
              I'm a web developer who loves creating beautiful and functional websites. 
              Welcome to my digital notebook with projects and ideas!
            </motion.p>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section 
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="about-content">
            <p className="sketch-text">
              I'm a passionate developer with experience in creating modern web applications. 
              I love solving complex problems and creating user experiences that 
              bring joy to people.
            </p>
            
            {/* Timeline */}
            <div className="timeline-container">
              <div className="timeline">
                <div className="timeline-item">
                  <div className="timeline-icon">✏️</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Drawing</h3>
                    <p className="timeline-description">Started with traditional art and sketching</p>
                  </div>
                </div>
                <div className="timeline-arrow">→</div>
                <div className="timeline-item">
                  <div className="timeline-icon">🎨</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Design</h3>
                    <p className="timeline-description">Moved to digital design and UI/UX</p>
                  </div>
                </div>
                <div className="timeline-arrow">→</div>
                <div className="timeline-item">
                  <div className="timeline-icon">💻</div>
                  <div className="timeline-content">
                    <h3 className="timeline-title">Frontend</h3>
                    <p className="timeline-description">Now building interactive web experiences</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Tools Illustration */}
            <div className="tools-illustration">
              <div className="tool-item">
                <div className="tool-icon">✏️</div>
                <span className="tool-name">Pencil</span>
              </div>
              <div className="tool-item">
                <div className="tool-icon">🖌️</div>
                <span className="tool-name">Brush</span>
              </div>
              <div className="tool-item">
                <div className="tool-icon">📏</div>
                <span className="tool-name">Ruler</span>
              </div>
              <div className="tool-item">
                <div className="tool-icon">📱</div>
                <span className="tool-name">Tablet</span>
              </div>
            </div>
            
            {/* Sticky Notes */}
            <div className="sticky-notes-about">
              <div className="sticky-note-about">
                <div className="note-icon-small">💡</div>
                <p className="note-text">Creative problem solver</p>
              </div>
              <div className="sticky-note-about">
                <div className="note-icon-small">🚀</div>
                <p className="note-text">Always learning new tech</p>
              </div>
              <div className="sticky-note-about">
                <div className="note-icon-small">🎯</div>
                <p className="note-text">User-focused approach</p>
              </div>
              <div className="sticky-note-about">
                <div className="note-icon-small">✨</div>
                <p className="note-text">Attention to detail</p>
              </div>
            </div>
            
            <div className="about-details">
              <div className="detail-item">
                <span className="detail-label">📍 Location:</span>
                <span className="detail-value">New York, USA</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">🎓 Education:</span>
                <span className="detail-value">Computer Science</span>
              </div>
              <div className="detail-item">
                <span className="detail-label">💼 Experience:</span>
                <span className="detail-value">3+ years</span>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            <div className="skill-category-sketch">
              <h3 className="skill-category-title">Design</h3>
              <div className="skill-cards">
                <div className="skill-card">
                  <span className="skill-name">Figma</span>
                  <div className="skill-note">UI/UX Design</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">Photoshop</span>
                  <div className="skill-note">Image Editing</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">Sketch</span>
                  <div className="skill-note">Prototyping</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">Adobe XD</span>
                  <div className="skill-note">Wireframing</div>
                </div>
              </div>
            </div>
            
            <div className="connecting-line"></div>
            
            <div className="skill-category-sketch">
              <h3 className="skill-category-title">Development</h3>
              <div className="skill-cards">
                <div className="skill-card">
                  <span className="skill-name">React</span>
                  <div className="skill-note">Frontend Framework</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">JavaScript</span>
                  <div className="skill-note">Programming</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">Node.js</span>
                  <div className="skill-note">Backend</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">TypeScript</span>
                  <div className="skill-note">Type Safety</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">CSS/SASS</span>
                  <div className="skill-note">Styling</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">Git</span>
                  <div className="skill-note">Version Control</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="notebook-container">
            {/* Left Page - Project Overview */}
            <div className="notebook-page-left">
              <div className="sticky-notes-grid">
                <div className="sticky-note" onClick={() => { setSelectedProject(0); setSelectedImage(0); }}>
                  <div className="note-icon">🛒</div>
                  <h3 className="note-title">E-commerce Platform</h3>
                  <p className="note-description">Full-featured online store</p>
                </div>
                <div className="sticky-note" onClick={() => { setSelectedProject(1); setSelectedImage(0); }}>
                  <div className="note-icon">📋</div>
                  <h3 className="note-title">Task Manager</h3>
                  <p className="note-description">Drag & drop task organizer</p>
                </div>
                <div className="sticky-note" onClick={() => { setSelectedProject(2); setSelectedImage(0); }}>
                  <div className="note-icon">🌤️</div>
                  <h3 className="note-title">Weather App</h3>
                  <p className="note-description">Beautiful weather forecasts</p>
                </div>
                <div className="sticky-note" onClick={() => { setSelectedProject(3); setSelectedImage(0); }}>
                  <div className="note-icon">🎨</div>
                  <h3 className="note-title">Portfolio Website</h3>
                  <p className="note-description">Creative portfolio design</p>
                </div>
              </div>
            </div>

            {/* Right Page - Project Details */}
            <div className="notebook-page-right">
              <div className="project-details">
                <div className="project-screenshot">
                  <img src={projects[selectedProject].gallery[selectedImage]} alt={projects[selectedProject].title} />
                </div>
                
                {/* Gallery between main image and project title */}
                <div className="project-gallery">
                  <div className="gallery-container">
                    {projects[selectedProject].gallery.map((image, index) => (
                      <img 
                        key={index} 
                        src={image} 
                        alt={`${projects[selectedProject].title} ${index + 1}`}
                        onClick={() => setSelectedImage(index)}
                        className={selectedImage === index ? 'gallery-image active' : 'gallery-image'}
                      />
                    ))}
                  </div>
                </div>
                
                <div className="project-info">
                  <h3 className="project-detail-title">{projects[selectedProject].title}</h3>
                  <p className="project-detail-description">{projects[selectedProject].description}</p>
                  <div className="project-role">
                    <strong>Role:</strong> {projects[selectedProject].role}
                  </div>
                  <div className="project-tech-detail">
                    <strong>Technologies:</strong>
                    <div className="tech-tags">
                      {projects[selectedProject].technologies.map((tech, index) => (
                        <span key={index} className="tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                  <div className="project-actions">
                    <a href={projects[selectedProject].link} target="_blank" rel="noopener noreferrer" className="view-project-btn">
                      View Project
                    </a>
                    <div className="project-navigation">
                      <button onClick={() => { setSelectedProject((prev) => prev > 0 ? prev - 1 : projects.length - 1); setSelectedImage(0); }} className="nav-btn">
                        ← Previous
                      </button>
                      <button onClick={() => { setSelectedProject((prev) => prev < projects.length - 1 ? prev + 1 : 0); setSelectedImage(0); }} className="nav-btn">
                        Next →
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* SNS Section */}
        <motion.section 
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          <h2 className="section-title">Social Media</h2>
          <div className="sns-links">
            <a href="mailto:your.email@example.com" className="sns-icon-link">
              <img src="/icons/email.svg" alt="Email" className="sns-icon-img" />
            </a>
            <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="sns-icon-link">
              <img src="/icons/linkedin.svg" alt="LinkedIn" className="sns-icon-img" />
            </a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="sns-icon-link">
              <img src="/icons/github.svg" alt="GitHub" className="sns-icon-img" />
            </a>
            <a href="https://notion.so" target="_blank" rel="noopener noreferrer" className="sns-icon-link">
              <img src="/icons/notion.svg" alt="Notion" className="sns-icon-img" />
            </a>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default App;
