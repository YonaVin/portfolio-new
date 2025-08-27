import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';
import './App.css';



// Page components for the book
const Page = React.forwardRef((props, ref) => {
  return (
    <div className="book-page" ref={ref}>
      <div className="page-content">
        {props.children}
      </div>
      <div className="bottom-border"></div>
      {props.number === "2" && (
        <div className="folded-corner"></div>
      )}
      {(props.number === "2" || props.number === "4") && (
        <div className="right-border"></div>
      )}
      {(props.number === "1" || props.number === "3") && (
        <div className="left-border"></div>
      )}
    </div>
  );
});

// Projects data (unused - keeping for reference)
/*
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
*/

function App() {
  const [selectedProject, setSelectedProject] = useState(0);
  const [selectedImage, setSelectedImage] = useState(0);
  const [selectedTab, setSelectedTab] = useState("design");
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  // Handle navbar visibility on scroll
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down and not at the top
        setIsNavbarVisible(false);
      } else if (currentScrollY <= 100) {
        // At the top of the page
        setIsNavbarVisible(true);
      }
      // Don't show navbar when scrolling up
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);


  const projectsData = [
    {
      title: "My Portfolio Website",
      shortDescription: "Creative notebook-style portfolio",
      description: "A unique portfolio website with notebook paper design, interactive book sections, and creative animations. Features a hand-drawn aesthetic with modern React functionality.",
      role: "Designer & Frontend Developer",
      technologies: ["React", "CSS3", "Framer Motion", "Creative Design"],
      images: ["https://via.placeholder.com/600x400/96ceb4/ffffff?text=Portfolio+Website", "https://via.placeholder.com/600x400/4ecdc4/ffffff?text=Portfolio+Website+2"],
      icon: "📓",
      category: "design",
      liveLink: "https://example.com/portfolio",
    },
    {
      title: "OMS Project",
      shortDescription: "Order Management System",
      description: "Comprehensive order management system with intuitive interface design, dashboard analytics, and streamlined workflow for efficient business operations.",
      role: "UI/UX Designer & Frontend Developer",
      technologies: ["React", "TypeScript", "Material-UI", "Chart.js"],
      images: ["https://via.placeholder.com/600x400/4ecdc4/ffffff?text=OMS+Project", "https://via.placeholder.com/600x400/ff6b6b/ffffff?text=OMS+Project+2"],
      icon: "📊",
      category: "design",
      liveLink: "https://example.com/oms",
    },
    {
      title: "Seven Luck Casino",
      shortDescription: "Responsive casino platform.",
      description: "SevenLuck Casino, operated by Grand Korean Leisure (a subsidiary of the Korean Tourism Organization), is one of Korea’s leading casinos for foreigners. The company approached us for a complete design rebrand and the development of a new set of digital products.",
      role: "UI/UX Designer & Frontend Developer",
      technologies: ["Vue.js", "CSS3", "Vuex", "Vue Router", "Vuex"],
      images: ["https://via.placeholder.com/600x400/45b7d1/ffffff?text=Seven+Luck+Casino", "https://via.placeholder.com/600x400/96ceb4/ffffff?text=Seven+Luck+Casino+2"],
      icon: "🎰",
      category: "design",
      liveLink: "https://example.com/sevenluck",
    },
    {
      title: "PriceGolf Market",
      shortDescription: "Golf equipment marketplace",
      description: "E-commerce platform specializing in golf equipment and accessories. Features product catalog, price comparison tools, user reviews, and secure checkout system with golf-specific categories.",
      role: "UI/UX Designer & Frontend Developer",
      technologies: ["React", "Node.js", "MongoDB", "Stripe", "E-commerce"],
      images: ["https://via.placeholder.com/600x400/ff6b6b/ffffff?text=PriceGolf+Market", "https://via.placeholder.com/600x400/4ecdc4/ffffff?text=PriceGolf+Market+2"],
      icon: "⛳",
      category: "design",
      liveLink: "https://example.com/pricegolf",
    },
    {
      title: "DataMon",
      shortDescription: "Data monitoring platform",
      description: "Advanced data monitoring and analytics platform with real-time dashboards, alert systems, and comprehensive reporting tools. Built for enterprise-level data management and visualization.",
      role: "Full Stack Developer",
      technologies: ["React", "Node.js", "Python", "PostgreSQL", "D3.js"],
      images: ["https://via.placeholder.com/600x400/4ecdc4/ffffff?text=DataMon", "https://via.placeholder.com/600x400/ff6b6b/ffffff?text=DataMon+2"],
      icon: "📈",
      category: "code",
      liveLink: "https://example.com/datamon",
    },
    {
      title: "Studio 21",
      shortDescription: "Creative studio management",
      description: "Comprehensive studio management system for creative agencies. Features project tracking, client management, resource allocation, and integrated billing system with automated workflows.",
      role: "Backend Developer & System Architect",
      technologies: ["Node.js", "Express", "MongoDB", "Socket.io", "AWS"],
      images: ["https://via.placeholder.com/600x400/45b7d1/ffffff?text=Studio+21", "https://via.placeholder.com/600x400/96ceb4/ffffff?text=Studio+21+2"],
      icon: "🎬",
      category: "code",
      liveLink: "https://example.com/studio21",
    },
    {
      title: "Tech In",
      shortDescription: "Technology innovation hub",
      description: "Innovation platform connecting tech startups with investors and mentors. Features startup profiles, pitch decks, networking tools, and investment tracking with advanced matching algorithms.",
      role: "Full Stack Developer",
      technologies: ["React", "TypeScript", "GraphQL", "Redis", "Docker"],
      images: ["https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Tech+In", "https://via.placeholder.com/600x400/4ecdc4/ffffff?text=Tech+In+2"],
      icon: "🚀",
      category: "code",
      liveLink: "https://example.com/techin",
    },
    {
      title: "Art Collection",
      shortDescription: "Illustrations",
      description: "A collection of digital artwork featuring fantasy characters and whimsical illustrations. Includes detailed character designs, environmental art, and concept pieces showcasing creative storytelling through visual art.",
      role: "Illustrator",
      technologies: ["Procreate", "Photoshop"],
      images: ["/art1.png", "/art2.png", "/art3.png"],
      icon: "🎨",
      category: "art",
      liveLink: "https://example.com/digitalart",
    },
  ];

  const filteredProjects = projectsData.filter(
    (p) => p.category === selectedTab
  );

  return (
    <div className="notebook-page">
      {/* Navigation Bar */}
      <motion.nav 
        className={`navbar ${isNavbarVisible && lastScrollY > 100 ? 'scrolled' : ''}`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ 
          opacity: isNavbarVisible ? 1 : 0, 
          y: isNavbarVisible ? 0 : -100 
        }}
        transition={{ duration: 0.3 }}
      >
        <div className="nav-container">
          <div className="nav-links">
            <a href="#home" className="nav-link">
              Home
              <img src="/line.svg" alt="" className="nav-line" />
            </a>
            <a href="#about" className="nav-link">
              About
              <img src="/line.svg" alt="" className="nav-line" />
            </a>
            <a href="#projects" className="nav-link">
              Projects
              <img src="/line.svg" alt="" className="nav-line" />
            </a>
            <a href="#skills" className="nav-link">
              Skills
              <img src="/line.svg" alt="" className="nav-line" />
            </a>
            <a href="#contact" className="nav-link">
              Contact
              <img src="/line.svg" alt="" className="nav-line" />
            </a>
          </div>
        </div>
      </motion.nav>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        {/* Hero Section */}
        <motion.section 
          id="home"
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
              Hello, I'm Alyona
            </motion.h1>
            
            <motion.h2 
              className="hero-subtitle"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Designer and aspiring Frontend Developer. I combine creativity and code to turn ideas into working products.
            </motion.h2>
            
            <motion.div 
              className="hero-buttons"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a href="#projects" className="view-projects-btn">View Projects</a>
              <a href="#contact" className="contact-btn">Contact</a>
            </motion.div>
          </div>
        </motion.section>

        {/* About Me Section */}
        <motion.section 
          id="about"
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h2 className="section-title">About Me</h2>
          <div className="book-container">
            <HTMLFlipBook
              width={500}
              height={600}
              size="stretch"
              minWidth={450}
              maxWidth={550}
              minHeight={550}
              maxHeight={650}
              showCover={false}
              flippingTime={1000}
              className="questionnaire-book"
              startPage={0}
              drawShadow={false}
              usePortrait={false}
            >
              <Page number="1">
                <h3 className="page-title">About Me</h3>
                <div className="about-content">
                  <p>Hi! I'm Alyona — a designer and aspiring frontend developer. I've been working with web design and interfaces for over 3 years, and recently I've been diving deeper into development to bring ideas to life not just in mockups, but in code.</p>
                  <p>I love finding the balance between aesthetics and usability: creating projects that look and work equally well. I'm currently actively developing my skills in JavaScript, HTML, CSS and React, learning through practice and building a portfolio of real projects.</p>
                  <p>My goal is to work on products where user experience and attention to detail matter. I'm open to new opportunities, especially international ones, and I'm always ready for new challenges.</p>
                  <p>Besides work, I love motorcycles 🏍 and sports.</p>
                </div>
              </Page>
              
              <Page number="2">
                <div className="image-page">
                  <img src="https://via.placeholder.com/400x500/4ecdc4/ffffff?text=Image+1" alt="Placeholder 1" />
                </div>
              </Page>
              
              <Page number="3">
                <div className="image-page">
                  <img src="https://via.placeholder.com/400x500/ff6b6b/ffffff?text=Image+2" alt="Placeholder 2" />
                </div>
              </Page>
              
              <Page number="4">
                <h3 className="page-title">My Questionnaire</h3>
                <div className="questionnaire-item">
                  <span className="question-marker">🎨</span>
                  <span className="question-text">Favorite color:</span>
                  <span className="answer-text">Blue (like the sky on a clear day!)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">📚</span>
                  <span className="question-text">Favorite subject:</span>
                  <span className="answer-text">Computer Science (now it's my life 😅)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🎵</span>
                  <span className="question-text">Favorite song:</span>
                  <span className="answer-text">Bohemian Rhapsody - Queen</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🎮</span>
                  <span className="question-text">Hobbies:</span>
                  <span className="answer-text">Programming, drawing, reading sci-fi</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">💪</span>
                  <span className="question-text">My motto:</span>
                  <span className="answer-text">"Code should be beautiful and work!"</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">⭐</span>
                  <span className="question-text">Dream:</span>
                  <span className="answer-text">Create an app that millions will use</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🖌️</span>
                  <span className="question-text">What I love to draw:</span>
                  <span className="answer-text">UI/UX designs and abstract patterns</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🍕</span>
                  <span className="question-text">Favorite food:</span>
                  <span className="answer-text">Pizza (especially with pepperoni!)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🌍</span>
                  <span className="question-text">Want to visit:</span>
                  <span className="answer-text">Japan (technology + culture = dream!)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🚀</span>
                  <span className="question-text">Favorite technology:</span>
                  <span className="answer-text">React (creating magic on the web!)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🎯</span>
                  <span className="question-text">Goal for the year:</span>
                  <span className="answer-text">Learn AI and create a smart app</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🌟</span>
                  <span className="question-text">Favorite time of day:</span>
                  <span className="answer-text">Night (when everyone sleeps and I code!)</span>
                </div>
              </Page>
            </HTMLFlipBook>
          </div>
        </motion.section>

        {/* Skills Section */}
        <motion.section 
          id="skills"
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <h2 className="section-title">Skills</h2>
          <div className="skills-container">
            {/* Design Skills */}
            <div className="skill-category-container">
              <h3 className="skill-category-title">🎨 Design</h3>
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
                <div className="skill-card">
                  <span className="skill-name">Illustrator</span>
                  <div className="skill-note">Vector Graphics</div>
                </div>
              </div>
            </div>

            {/* Frontend Skills */}
            <div className="skill-category-container">
              <h3 className="skill-category-title">💻 Frontend</h3>
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
                  <span className="skill-name">TypeScript</span>
                  <div className="skill-note">Type Safety</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">CSS/SASS</span>
                  <div className="skill-note">Styling</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">HTML5</span>
                  <div className="skill-note">Markup</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">Next.js</span>
                  <div className="skill-note">Full Stack</div>
                </div>
              </div>
            </div>

            {/* Tools Skills */}
            <div className="skill-category-container">
              <h3 className="skill-category-title">🛠️ Tools</h3>
              <div className="skill-cards">
                <div className="skill-card">
                  <span className="skill-name">Git</span>
                  <div className="skill-note">Version Control</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">Node.js</span>
                  <div className="skill-note">Backend</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">VS Code</span>
                  <div className="skill-note">Code Editor</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">Figma</span>
                  <div className="skill-note">Design Tool</div>
                </div>
                <div className="skill-card">
                  <span className="skill-name">Postman</span>
                  <div className="skill-note">API Testing</div>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Projects Section */}
        <motion.section 
          id="projects"
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="section-title">Projects</h2>
          <div className="notebook-container">
            {/* Левая часть - блокнот */}
            <div className="notebook-page-left">
              {/* Вкладки */}
              <div className="notebook-tabs">
                <div
                  className={`tab ${selectedTab === "design" ? "active" : ""}`}
                  onClick={() => setSelectedTab("design")}
                >
                  Page 1
                </div>
                <div
                  className={`tab ${selectedTab === "code" ? "active" : ""}`}
                  onClick={() => setSelectedTab("code")}
                >
                  Page 2
                </div>
                <div
                  className={`tab ${selectedTab === "art" ? "active" : ""}`}
                  onClick={() => setSelectedTab("art")}
                >
                  Page 3
                </div>
              </div>

              {/* Список проектов */}
              <div className="sticky-notes-grid">
                {filteredProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="project-card"
                    onClick={() => {
                      setSelectedProject(
                        projectsData.indexOf(project)
                      );
                      setSelectedImage(0);
                    }}
                  >
                    <img src="/project.svg" alt="" className="project-svg" />
                    <div className="project-content">
                      <div className="note-icon">{project.icon}</div>
                      <h3 className="note-title">{project.title}</h3>
                      <p className="note-description">{project.shortDescription}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Правая часть - лист бумаги */}
            <div className="notebook-page-right">
              {selectedProject !== null && (
                <div className="project-details">
                  <h3 className="project-detail-title">
                    {projectsData[selectedProject].title}
                  </h3>

                  <div className="project-screenshot">
                    <img
                      src={
                        projectsData[selectedProject].images[selectedImage]
                      }
                      alt={projectsData[selectedProject].title}
                    />
                  </div>

                  <div className="project-gallery">
                    <div className="gallery-container">
                      {projectsData[selectedProject].images.map((img, index) => (
                        <img
                          key={index}
                          src={img}
                          alt={`Gallery ${index}`}
                          className={`gallery-image ${
                            selectedImage === index ? "active" : ""
                          }`}
                          onClick={() => setSelectedImage(index)}
                        />
                      ))}
                    </div>
                  </div>

                  <div className="project-info">
                    <p className="project-detail-description">
                      {selectedTab === "art" 
                        ? "My hobby is creating digital art and illustrations. I love drawing fantasy characters, creating concept art, and experimenting with different styles. This helps me develop creativity and find inspiration for design projects."
                        : projectsData[selectedProject].description
                      }
                    </p>
                    <p className="project-role">
                      <strong>Role:</strong>{" "}
                      {projectsData[selectedProject].role}
                    </p>
                    <div className="project-tech-detail">
                      <div className="tech-tags">
                        {projectsData[selectedProject].technologies.map(
                          (tech, idx) => (
                            <span key={idx} className="tech-tag">
                              {tech}
                            </span>
                          )
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="project-actions">
                    <a
                      href={projectsData[selectedProject].liveLink}
                      className="view-project-btn"
                      target="_blank"
                      rel="noreferrer"
                    >
                      View Project
                    </a>
                    <div className="project-navigation">
                      <button
                        className="previous-btn"
                        onClick={() =>
                          setSelectedProject(
                            (prev) =>
                              prev > 0 ? prev - 1 : projectsData.length - 1
                          )
                        }
                      >
                        Previous
                      </button>
                      <button
                        className="next-btn"
                        onClick={() =>
                          setSelectedProject(
                            (prev) =>
                              prev < projectsData.length - 1 ? prev + 1 : 0
                          )
                        }
                      >
                        Next
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.section>

        {/* Contact & Social Media Section */}
        <motion.section 
          id="contact"
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="section-title">Contact</h2>
          <div className="contact-social-container">
            {/* Contact Form - Left Side */}
            <div className="contact-left">
              <div className="contact-info">
                <img src="/contact.svg" alt="" className="contact-svg" />
                <div className="contact-content">
                  <p className="contact-text">
                    I'm always open to new opportunities and collaborations. 
                    Feel free to reach out if you'd like to work together or just say hello!
                  </p>
                  <div className="contact-details">
                    <div className="contact-item">
                      <span className="contact-label">Email:</span>
                      <a href="mailto:your.email@example.com" className="contact-link">
                        alenafil93@gmail.com
                      </a>
                    </div>
                    <div className="contact-item">
                      <span className="contact-label">Location:</span>
                      <span className="contact-text">Seoul, Korea / Remote</span>
                    </div>
                    <div className="contact-item">
                      <span className="contact-label">Availability:</span>
                      <span className="contact-text">Open to new projects</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Social Media - Right Side */}
            <div className="social-right">
              <h3 className="social-title">Social Media</h3>
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
            </div>
          </div>
        </motion.section>
      </motion.div>
    </div>
  );
}

export default App;
