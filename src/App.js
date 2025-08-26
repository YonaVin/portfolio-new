import React, { useState } from 'react';
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


  const projectsData = [
    {
      title: "E-commerce Platform",
      shortDescription: "Full-featured online store",
      description: "Full-featured online store with responsive design and smooth checkout flow.",
      role: "Frontend Developer",
      technologies: ["React", "CSS", "Stripe API"],
      images: ["https://via.placeholder.com/600x400/4ecdc4/ffffff?text=E-commerce+Platform", "https://via.placeholder.com/600x400/ff6b6b/ffffff?text=E-commerce+2"],
      icon: "🛒",
      category: "code",
      liveLink: "https://example.com/ecommerce",
    },
    {
      title: "Task Manager",
      shortDescription: "Drag & drop task organizer",
      description: "Drag & drop task organizer to boost productivity.",
      role: "Fullstack Developer",
      technologies: ["React", "Node.js", "MongoDB"],
      images: ["https://via.placeholder.com/600x400/ff6b6b/ffffff?text=Task+Manager", "https://via.placeholder.com/600x400/4ecdc4/ffffff?text=Task+Manager+2"],
      icon: "📋",
      category: "code",
      liveLink: "https://example.com/taskmanager",
    },
    {
      title: "Weather App",
      shortDescription: "Beautiful weather forecasts",
      description: "Beautiful weather app showing current and weekly forecasts.",
      role: "Frontend Developer",
      technologies: ["React", "API", "CSS"],
      images: ["https://via.placeholder.com/600x400/45b7d1/ffffff?text=Weather+App", "https://via.placeholder.com/600x400/96ceb4/ffffff?text=Weather+App+2"],
      icon: "🌤️",
      category: "design",
      liveLink: "https://example.com/weather",
    },
    {
      title: "Portfolio Website",
      shortDescription: "Creative portfolio design",
      description: "Creative portfolio website combining design and frontend skills.",
      role: "Frontend Developer / Designer",
      technologies: ["React", "CSS", "Figma"],
      images: ["https://via.placeholder.com/600x400/96ceb4/ffffff?text=Portfolio+Website", "https://via.placeholder.com/600x400/4ecdc4/ffffff?text=Portfolio+Website+2"],
      icon: "🎨",
      category: "design",
      liveLink: "https://example.com/portfolio",
    },
  ];

  const filteredProjects = projectsData.filter(
    (p) => p.category === selectedTab
  );

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
                  <p>Привет! Я веб-разработчик, который любит создавать красивые и функциональные приложения.</p>
                  <p>Мой путь в программировании начался с любопытства и желания создавать что-то новое.</p>
                  <p>Я специализируюсь на React, JavaScript и современных веб-технологиях.</p>
                  <p>В свободное время люблю изучать новые технологии и работать над личными проектами.</p>
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
                <h3 className="page-title">Моя Анкета</h3>
                <div className="questionnaire-item">
                  <span className="question-marker">🎨</span>
                  <span className="question-text">Любимый цвет:</span>
                  <span className="answer-text">Синий (как небо в ясный день!)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">📚</span>
                  <span className="question-text">Любимый предмет:</span>
                  <span className="answer-text">Информатика (теперь это моя жизнь 😅)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🎵</span>
                  <span className="question-text">Любимая песня:</span>
                  <span className="answer-text">Bohemian Rhapsody - Queen</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🎮</span>
                  <span className="question-text">Хобби:</span>
                  <span className="answer-text">Программирование, рисование, чтение фантастики</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">💪</span>
                  <span className="question-text">Мой девиз:</span>
                  <span className="answer-text">"Код должен быть красивым и работать!"</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">⭐</span>
                  <span className="question-text">Мечта:</span>
                  <span className="answer-text">Создать приложение, которым будут пользоваться миллионы</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🖌️</span>
                  <span className="question-text">Что люблю рисовать:</span>
                  <span className="answer-text">UI/UX дизайны и абстрактные узоры</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🍕</span>
                  <span className="question-text">Любимая еда:</span>
                  <span className="answer-text">Пицца (особенно с пепперони!)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🌍</span>
                  <span className="question-text">Хочу побывать:</span>
                  <span className="answer-text">В Японии (технологии + культура = мечта!)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🚀</span>
                  <span className="question-text">Любимая технология:</span>
                  <span className="answer-text">React (создаю магию на вебе!)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🎯</span>
                  <span className="question-text">Цель на год:</span>
                  <span className="answer-text">Изучить AI и создать умное приложение</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">🌟</span>
                  <span className="question-text">Любимое время дня:</span>
                  <span className="answer-text">Ночь (когда все спят, а я кодирую!)</span>
                </div>
              </Page>
            </HTMLFlipBook>
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
                  Design
                </div>
                <div
                  className={`tab ${selectedTab === "code" ? "active" : ""}`}
                  onClick={() => setSelectedTab("code")}
                >
                  Code
                </div>
                <div
                  className={`tab ${selectedTab === "art" ? "active" : ""}`}
                  onClick={() => setSelectedTab("art")}
                >
                  Art
                </div>
              </div>

              {/* Список проектов */}
              <div className="sticky-notes-grid">
                {filteredProjects.map((project, idx) => (
                  <div
                    key={idx}
                    className="sticky-note"
                    onClick={() => {
                      setSelectedProject(
                        projectsData.indexOf(project)
                      );
                      setSelectedImage(0);
                    }}
                  >
                    <div className="note-icon">{project.icon}</div>
                    <h3 className="note-title">{project.title}</h3>
                    <p className="note-description">{project.shortDescription}</p>
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
                      {projectsData[selectedProject].description}
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
                        className="nav-btn"
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
                        className="nav-btn"
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
