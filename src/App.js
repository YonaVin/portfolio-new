import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import HTMLFlipBook from 'react-pageflip';
import './App.css';

// Utility function for image paths
const getImageUrl = (path) => `${process.env.PUBLIC_URL}${path}`;



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
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [isImageEnlarged, setIsImageEnlarged] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

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
      
      // Show/hide scroll to top button
      if (currentScrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
      
      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  const scrollToTop = () => {
    // Add animation class
    const button = document.querySelector('.scroll-to-top');
    if (button) {
      button.classList.add('clicked');
      setTimeout(() => {
        button.classList.remove('clicked');
      }, 600);
    }
    
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  const toggleImageSize = () => {
    setIsImageEnlarged(!isImageEnlarged);
  };

  const handleModalImageClick = () => {
    const images = projectsData[selectedProject].images;
    if (selectedImage < images.length - 1) {
      setSelectedImage(selectedImage + 1);
    } else {
      setIsImageEnlarged(false);
    }
  };

  const handleMobileMenuToggle = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileMenuClose = () => {
    setIsMobileMenuOpen(false);
  };


  const projectsData = [
    {
      title: "My Portfolio Website",
      shortDescription: "Creative notebook-style portfolio",
      description: "A unique portfolio website with notebook paper design, interactive book sections, and creative animations. Features a hand-drawn aesthetic with modern React functionality.",
      role: "Designer & Frontend Developer",
      technologies: ["React", "CSS3", "Framer Motion", "Creative Design"],
      images: ["https://via.placeholder.com/600x400/96ceb4/ffffff?text=Portfolio+Website", "https://via.placeholder.com/600x400/4ecdc4/ffffff?text=Portfolio+Website+2"],
      category: "design",
      liveLink: "https://yonavin.github.io/portfolio/",
    },
    {
      title: "OMS Project",
      shortDescription: "Order Management System",
      description: "Comprehensive order management system with intuitive interface design, dashboard analytics, and streamlined workflow for efficient business operations.",
      role: "UI/UX Designer & Frontend Developer",
      technologies: ["React", "TypeScript", "Material-UI", "Chart.js"],
      images: [getImageUrl("/oms.png"), getImageUrl("/oms1.png"), getImageUrl("/oms2.png"), getImageUrl("/oms4.png")],
      category: "design",
      liveLink: "_",
    },
    {
      title: "Seven Luck Casino",
      shortDescription: "Responsive casino platform.",
      description: "SevenLuck Casino, operated by Grand Korean Leisure, approached us for a full rebrand and the creation of new digital products.",
      role: "UI/UX Designer & Frontend Developer",
      technologies: ["Vue.js", "CSS3", "Vuex", "Vue Router", "Vuex"],
      images: [getImageUrl("/sevenluck.png"), getImageUrl("/service.png"), getImageUrl("/mypass.png")],
      category: "design",
      liveLink: "_",
    },
    {
      title: "PriceGolf Market",
      shortDescription: "Golf equipment marketplace",
      description: "E-commerce platform for golf equipment with catalog, price comparison, reviews, and secure checkout.",
      role: "UI/UX Designer & Frontend Developer",
      technologies: ["UI/UX Design"],
      images: [getImageUrl("/pricegolf.png"), getImageUrl("/1price.png")],
      category: "design",
      liveLink: "https://apps.apple.com/kr/app/%ED%94%84%EB%9D%BC%EC%9D%B4%EC%8A%A4%EA%B3%A8%ED%94%84-%EC%A4%91%EA%B3%A0-%EC%8B%A0%ED%92%88-%EA%B3%A8%ED%94%84%EC%B1%84-%EC%98%A4%ED%94%88%EB%A7%88%EC%BC%93/id6529527881",
    },
    {
      title: "DataMon",
      shortDescription: "Data monitoring platform",
      description: "Enterprise data management platform with real-time dashboards, alerts, and advanced reporting tools.",
      role: "Full Stack Developer",
      technologies: ["UI/UX Design"],
      images: [getImageUrl("/datamon.png"), getImageUrl("/data1.png"), getImageUrl("/data2.png")],
      category: "code",
      liveLink: "https://www.driven.co.kr/page/sub02_5",
    },
    {
      title: "Studio 21",
      shortDescription: "Creative studio management",
      description: "Studio management system with project tracking, client management, resource planning, and automated billing.",
      role: "Backend Developer & System Architect",
        technologies: ["UI/UX Design"],
        images: [getImageUrl("/studio21.png"), getImageUrl("/1.png"), getImageUrl("/2.png")],
      category: "code",
      liveLink: "https://apps.apple.com/kr/app/studio-21/id1352380483?l=en-GB",
    },
    {
      title: "Tech In",
      shortDescription: "Technology innovation hub",
      description: "Innovation platform linking startups with investors and mentors through profiles, pitch decks, networking, and smart matching.",
      role: "Full Stack Developer",
      technologies: ["UI/UX Design"],
      images: [getImageUrl("/teachin.png"), getImageUrl("/tech1.png")],
      category: "code",
      liveLink: "https://apps.apple.com/kr/app/teach-in/id1573203601",
    },
    {
      title: "Art Collection",
      shortDescription: "Illustrations",
      description: "Digital art collection featuring fantasy characters, imaginative environments, and detailed concept illustrations.",
      role: "Illustrator",
      technologies: ["Procreate", "Photoshop"],
      images: [getImageUrl("/art1.png"), getImageUrl("/art2.png"), getImageUrl("/art3.png")],
      category: "code",
      liveLink: "_",  
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
          {/* Desktop Navigation */}
          <div className="nav-links">
            <a href="#home" className="nav-link" onClick={handleMobileMenuClose}>
              <img src={`${process.env.PUBLIC_URL}/home.svg`} alt="" className="nav-icon" />
              Home
              <img src={getImageUrl("/line.svg")} alt="" className="nav-line" />
            </a>
            <a href="#about" className="nav-link" onClick={handleMobileMenuClose}>
              <img src={getImageUrl("/about.svg")} alt="" className="nav-icon" />
              About
              <img src={getImageUrl("/line.svg")} alt="" className="nav-line" />
            </a>
            <a href="#skills" className="nav-link" onClick={handleMobileMenuClose}>
              <img src={getImageUrl("/skillsicon.svg")} alt="" className="nav-icon" />
              Skills
              <img src={getImageUrl("/line.svg")} alt="" className="nav-line" />
            </a>
            <a href="#projects" className="nav-link" onClick={handleMobileMenuClose}>
              <img src={getImageUrl("/projectsicon.svg")} alt="" className="nav-icon" />
              Projects
              <img src={getImageUrl("/line.svg")} alt="" className="nav-line" />
            </a>
            <a href="#certificates" className="nav-link" onClick={handleMobileMenuClose}>
              <img src={getImageUrl("/awards.svg")} alt="" className="nav-icon" />
              Certificates
              <img src={getImageUrl("/line.svg")} alt="" className="nav-line" />
            </a>
            <a href="#interests" className="nav-link" onClick={handleMobileMenuClose}>
              <img src={getImageUrl("/fun.svg")} alt="" className="nav-icon" />
              Interests
              <img src={getImageUrl("/line.svg")} alt="" className="nav-line" />
            </a>
            <a href="#contact" className="nav-link" onClick={handleMobileMenuClose}>
              <img src={getImageUrl("/email1.svg")} alt="" className="nav-icon" />
              Contact
              <img src={getImageUrl("/line.svg")} alt="" className="nav-line" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="mobile-menu-btn" onClick={handleMobileMenuToggle}>
            <img src={getImageUrl("/menu.svg")} alt="Menu" className="menu-icon" />
          </button>

          {/* Mobile Menu Overlay */}
          {isMobileMenuOpen && (
            <div className="mobile-menu-overlay" onClick={handleMobileMenuClose}>
              <div className="mobile-menu" onClick={(e) => e.stopPropagation()}>
                <div className="mobile-menu-header">
                  <h3>Menu</h3>
                  <button className="mobile-menu-close" onClick={handleMobileMenuClose}>
                    ×
                  </button>
                </div>
                <div className="mobile-menu-links">
                  <a href="#home" className="mobile-nav-link" onClick={handleMobileMenuClose}>
                    <img src={getImageUrl("/home.svg")} alt="" className="mobile-nav-icon" />
                    Home
                  </a>
                  <a href="#about" className="mobile-nav-link" onClick={handleMobileMenuClose}>
                    <img src={getImageUrl("/about.svg")} alt="" className="mobile-nav-icon" />
                    About
                  </a>
                  <a href="#skills" className="mobile-nav-link" onClick={handleMobileMenuClose}>
                    <img src={getImageUrl("/skillsicon.svg")} alt="" className="mobile-nav-icon" />
                    Skills
                  </a>
                  <a href="#projects" className="mobile-nav-link" onClick={handleMobileMenuClose}>
                    <img src={getImageUrl("/projectsicon.svg")} alt="" className="mobile-nav-icon" />
                    Projects
                  </a>
                  <a href="#certificates" className="mobile-nav-link" onClick={handleMobileMenuClose}>
                    <img src={getImageUrl("/awards.svg")} alt="" className="mobile-nav-icon" />
                    Certificates
                  </a>
                  <a href="#interests" className="mobile-nav-link" onClick={handleMobileMenuClose}>
                    <img src={getImageUrl("/fun.svg")} alt="" className="mobile-nav-icon" />
                    Interests
                  </a>
                  <a href="#contact" className="mobile-nav-link" onClick={handleMobileMenuClose}>
                    <img src={getImageUrl("/email1.svg")} alt="" className="mobile-nav-icon" />
                    Contact
                  </a>
                </div>
              </div>
            </div>
          )}
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
                  <p>Hi! I'm Alyona — a designer and aspiring frontend developer. I've been working with web design and interfaces for over 3 years, and recently I've been diving deeper into development to bring ideas to life not just in mockups, but in code <img src={getImageUrl("/code.svg")} alt="Code" style={{ width: '30px', height: '30px' }} /></p>
                  <p>I love finding the balance between aesthetics and usability: creating projects that look and work equally well. I'm currently actively developing my skills in JavaScript, HTML, CSS and React, learning through practice and building a portfolio of real projects.</p>
                </div>
              </Page>
              
              <Page number="2">
              <div className="about-content">
              <p>My goal is to work on products where user experience and attention to detail matter. I'm open to new opportunities, especially international ones, and I'm always ready for new challenges.</p>
              <p>Besides work, I love motorcycles <img src={getImageUrl("/bike.svg")} alt="Bike" style={{ width: '30px', height: '30px' }} /> and sports <img src={getImageUrl("/sport.svg")} alt="Sport" style={{ width: '30px', height: '30px' }} /></p>
              </div>
                <div className="image-page" style={{ alignItems: 'flex-end', paddingBottom: '20px' }}>
                  <img src="https://via.placeholder.com/400x300/4ecdc4/ffffff?text=Image+1" alt="Placeholder 1" style={{ width: '90%', height: '100%', objectFit: 'cover' }} />
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
                  <span className="question-marker">
                    <img src={getImageUrl("/color.svg")} alt="Color" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <span className="question-text">Favorite color:</span>
                  <span className="answer-text">Blue (like the sky on a clear day!)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">
                    <img src={getImageUrl("/book.svg")} alt="Subject" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <span className="question-text">Favorite subject:</span>
                  <span className="answer-text">Computer Science (now it's my life <img src={getImageUrl("/smile.svg")} alt="Smile" style={{ width: '20px', height: '20px' }} />)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">
                    <img src={getImageUrl("/music.svg")} alt="Song" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <span className="question-text">Favorite song:</span>
                  <span className="answer-text">Bon Jovi - It's My Life</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">
                    <img src={getImageUrl("/hobby.svg")} alt="Hobbies" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <span className="question-text">Hobbies:</span>
                  <span className="answer-text">Programming, drawing, riding a motorcycle</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">
                    <img src={getImageUrl("/motto.svg")} alt="Motto" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <span className="question-text">My motto:</span>
                  <span className="answer-text">"Code should be beautiful and work!"</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">
                    <img src={getImageUrl("/dream.svg")} alt="Dream" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <span className="question-text">Dream:</span>
                  <span className="answer-text">Create an app that millions will use</span>
                </div>
                
                
                <div className="questionnaire-item">
                  <span className="question-marker">
                    <img src={getImageUrl("/food.svg")} alt="Food" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <span className="question-text">Favorite food:</span>
                  <span className="answer-text">Carrots (especially with butter!)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">
                    <img src={getImageUrl("/travel.svg")} alt="Travel" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <span className="question-text">Want to visit:</span>
                  <span className="answer-text">Iceland (inspire creativity in nature)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">
                    <img src={getImageUrl("/tech.svg")} alt="Tech" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <span className="question-text">Favorite technology:</span>
                  <span className="answer-text">React (creating magic on the web!)</span>
                </div>
                
                <div className="questionnaire-item">
                  <span className="question-marker">
                    <img src={getImageUrl("/goal.svg")} alt="Goal" style={{ width: '20px', height: '20px' }} />
                  </span>
                  <span className="question-text">Goal for the year:</span>
                  <span className="answer-text">Learn AI and create a smart app</span>
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
            <div className="skill-category-container skill-left">
              <img src={getImageUrl("/skills.svg")} alt="" className="skills-svg" />
              <div className="skills-content">
                <h3 className="skill-category-title">
                  <img src={getImageUrl("/design.svg")} alt="Design" style={{ width: '30px', height: '30px', marginRight: '10px', verticalAlign: 'middle' }} />
                  Design
                </h3>
                <div className="skill-cards">
                  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '10px' }}>
                    <img src={getImageUrl("/fugma.svg")} alt="Figma" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                    <span className="skill-name">Figma</span>
                  </div>
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/ai.svg")} alt="Illustrator" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">Illustrator</span>
                    </div>
                    <div className="skill-note">Vector Graphics</div>
                  </div>
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/psd.svg")} alt="Photoshop" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">Photoshop</span>
                    </div>
                    <div className="skill-note">Image Editing</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Frontend Skills */}
            <div className="skill-category-container">
              <img src={getImageUrl("/skills2.svg")} alt="" className="skills-svg" />
              <div className="skills-content">
                <h3 className="skill-category-title">
                  <img src={getImageUrl("/front.svg")} alt="Frontend" style={{ width: '30px', height: '30px', marginRight: '10px', verticalAlign: 'middle' }} />
                  Frontend
                </h3>
                <div className="skill-cards">
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/react.svg")} alt="React" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">React</span>
                    </div>
                    <div className="skill-note">Frontend Framework</div>
                  </div>
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/js.svg")} alt="JavaScript" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">JavaScript</span>
                    </div>
                    <div className="skill-note">Programming</div>
                  </div>
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/ts.svg")} alt="TypeScript" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">TypeScript</span>
                    </div>
                    <div className="skill-note">Type Safety</div>
                  </div>
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/css.svg")} alt="CSS" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">CSS/SASS</span>
                    </div>
                    <div className="skill-note">Styling</div>
                  </div>
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/html.svg")} alt="HTML" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">HTML5</span>
                    </div>
                    <div className="skill-note">Markup</div>
                  </div>
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/next.svg")} alt="Next.js" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">Next.js</span>
                    </div>
                    <div className="skill-note">Full Stack</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Tools Skills */}
            <div className="skill-category-container skill-right">
              <img src={getImageUrl("/skills3.svg")} alt="" className="skills-svg" />
              <div className="skills-content">
                <h3 className="skill-category-title">
                  <img src={getImageUrl("/tool.svg")} alt="Tools" style={{ width: '30px', height: '30px', marginRight: '10px', verticalAlign: 'middle' }} />
                  Tools
                </h3>
                <div className="skill-cards">
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/git.svg")} alt="Git" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">Git</span>
                    </div>
                    <div className="skill-note">Version Control</div>
                  </div>
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/node.svg")} alt="Node.js" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">Node.js</span>
                    </div>
                    <div className="skill-note">Backend</div>
                  </div>
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/vscode.svg")} alt="VS Code" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">VS Code</span>
                    </div>
                    <div className="skill-note">Code Editor</div>
                  </div>
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/fugma.svg")} alt="Figma" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">Figma</span>
                    </div>
                    <div className="skill-note">Design Tool</div>
                  </div>
                  <div className="skill-card">
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginBottom: '5px' }}>
                      <img src={getImageUrl("/api.svg")} alt="Postman" style={{ width: '20px', height: '20px', marginBottom: '5px' }} />
                      <span className="skill-name">Postman</span>
                    </div>
                    <div className="skill-note">API Testing</div>
                  </div>
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
                    <img src={getImageUrl("/project.svg")} alt="" className="project-svg" />
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
                      onClick={toggleImageSize}
                      style={{
                        cursor: 'pointer',
                        transition: 'all 0.3s ease'
                      }}
                    />
                  </div>
                  
                  {/* Модальное окно для увеличенного изображения */}
                  {isImageEnlarged && (
                    <div 
                      className="image-modal-overlay"
                      onClick={handleModalImageClick}
                      style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        right: 0,
                        bottom: 0,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 1000,
                        cursor: 'pointer',
                        borderRadius: '8px',
                        boxShadow: '0 10px 30px rgba(0, 0, 0, 0.3)',
                        overflow: 'hidden'
                      }}
                    >
                      <img
                        src={projectsData[selectedProject].images[selectedImage]}
                        alt={projectsData[selectedProject].title}
                        style={{
                          maxWidth: '90%',
                          maxHeight: '90%',
                          objectFit: 'contain',
                          cursor: 'pointer',
                          border: '3px solid #fff',
                          borderRadius: '12px',
                          boxShadow: '0 8px 25px rgba(0, 0, 0, 0.4)',
                          backgroundColor: '#fff',
                          padding: '10px'
                        }}
                        onClick={(e) => { e.stopPropagation(); handleModalImageClick(); }}
                      />
                    </div>
                  )}

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
                    {projectsData[selectedProject].liveLink && (
                      <a
                        href={projectsData[selectedProject].liveLink}
                        className="view-project-btn"
                        target="_blank"
                        rel="noreferrer"
                      >
                        View Project
                      </a>
                    )}
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

        {/* Certificates Section */}
        <motion.section 
          id="certificates"
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <h2 className="section-title">Certificates</h2>
          <div className="certificates-container">
            <img src={getImageUrl("/cert1.svg")} alt="Certificate 1" className="certificate-svg" />
            <img src={getImageUrl("/cert2.svg")} alt="Certificate 2" className="certificate-svg" />
          </div>
        </motion.section>

        {/* Interests Section */}
        <motion.section 
          id="interests"
          className="section"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <h2 className="section-title">Interests</h2>
          <div className="interests-container">
            <img src="https://via.placeholder.com/800x600/4ecdc4/ffffff?text=Interests+Image" alt="Interests" style={{ width: '100%', maxWidth: '800px', height: 'auto', display: 'block', margin: '0 auto' }} />
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
                <img src={getImageUrl("/contact.svg")} alt="" className="contact-svg" />
                <div className="contact-content">
                  <p className="contact-text">
                    I'm always open to new opportunities and collaborations. 
                    Feel free to reach out if you'd like to work together or just say hello!
                  </p>
                  <div className="contact-details">
                    <div className="contact-item">
                      <span className="contact-label">Email:</span>
                      <a href="mailto:alenafil93@gmail.com" className="contact-link">
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
                <a href="mailto:alenafil93@gmail.com" className="sns-icon-link">
                  <img src={getImageUrl("/icons/email.svg")} alt="Email" className="sns-icon-img" />
                </a>
                <a href="https://www.linkedin.com/in/yonavin" target="_blank" rel="noopener noreferrer" className="sns-icon-link">
                  <img src={getImageUrl("/icons/linkedin.svg")} alt="LinkedIn" className="sns-icon-img" />
                </a>
                <a href="https://github.com/YonaVin" target="_blank" rel="noopener noreferrer" className="sns-icon-link">
                  <img src={getImageUrl("/icons/github.svg")} alt="GitHub" className="sns-icon-img" />
                </a>
                <a href="https://77388.notion.site/Hello-I-m-Alyona-c708d71b4a8644258648229e226b0840?source=copy_link" target="_blank" rel="noopener noreferrer" className="sns-icon-link">
                  <img src={getImageUrl("/icons/notion.svg")} alt="Notion" className="sns-icon-img" />
                </a>
              </div>
            </div>
          </div>
        </motion.section>
      </motion.div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <motion.button
          className="scroll-to-top"
          onClick={scrollToTop}
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.5 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <img src={getImageUrl("/up.svg")} alt="Scroll to top" />
        </motion.button>
      )}
    </div>
  );
}

export default App;
