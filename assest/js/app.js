// DOM Elements
const navItems = document.querySelectorAll('.nav-item');
const sections = document.querySelectorAll('.section');
const hamburgerMenu = document.getElementById('hamburgerMenu');
const navLinks = document.getElementById('navLinks');
const backToTop = document.querySelector('.back-to-top');
const progressBar = document.querySelector('.progress-bar');
const typewriterText = document.querySelector('.typewriter-text');
const projectsGrid = document.querySelector('.projects-grid');
const timeline = document.querySelector('.timeline');
const certificatesGrid = document.querySelector('.certificates-grid');

// Typewriter text
const typewriterWords = [
    "Web Developer",
    "AI & ML Enthusiast",
    "Problem Solver",
    "Java Developer",
    "Tech Explorer"
];

// Projects data
const projects = [
    {
        title: "Book-Store",
        description: "Developed a full-featured BookStore e-commerce platform using the MERN stack. Implemented secure user authentication and real-time cart management.",
        technologies: ["React", "Node.js", "SQL"],
        link: "https://github.com/KapilSehrawat2005/Book-Store",
        image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Research Mate",
        description: "A platform where users can upload research papers or extract from Google Scholar using SerpAPI. Integrated with Gemini API for interactive paper analysis.",
        technologies: ["Python", "Streamlit", "Gemini API", "SerpAPI"],
        link: "https://github.com/KapilSehrawat2005/Research-Mate",
        image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "SVSU Alumni Portal",
        description: "Full-stack web application for alumni networking, featuring registration, gallery, and stories sections.",
        technologies: ["HTML", "CSS", "JavaScript", "Node.js", "MySQL"],
        link: "#",
        image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Agriculture Assistant",
        description: "Console-based ML application that predicts optimal crops based on land conditions like soil type, humidity, and temperature.",
        technologies: ["Python", "Machine Learning"],
        link: "https://github.com/KapilSehrawat2005/Agriculture-Assistant/",
        image: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Spotify Clone",
        description: "Frontend clone of Spotify with responsive design and interactive UI components.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://kapilsehrawat2005.github.io/Spotify-Clone/#",
        image: "https://images.unsplash.com/photo-1470225620780-dba8ba36b745?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    },
    {
        title: "Personal Portfolio",
        description: "Modern portfolio website showcasing skills, projects, and experience with smooth animations.",
        technologies: ["HTML", "CSS", "JavaScript"],
        link: "https://kapilsehrawat2005.github.io/Kapil-Portfolio/",
        image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&auto=format&fit=crop&w=600&q=80"
    }
];

// Experience data
const experiences = [
    {
        title: "Software Engineer Intern",
        company: "Qloron Pvt Ltd",
        duration: "Jan 2026 - Present · 2 mos · Remote",
        description: "Ongoing Internship focused on software development and contributing to real-world projects.",
        link: "#",
        ongoing: true
    },
    {
        title: "Digital Innovation Cell Internship",
        company: "Shri Vishwakarma Skill University",
        duration: "6 Months (On-Site)",
        description: "Worked under ERP developers on university portal development. Gained hands-on experience in web scraping, backend integration, and responsive design.",
        link: "https://www.linkedin.com/posts/kapil-sehrawat-318814288_internship-webdevelopment-digitalinnovationcell-activity-7384960545516314624-nh8_?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEXjTcQBIm-qXhEYVNBV3OdfMXvKoryKjro"
    },
    {
        title: "IBM SkillsBuild Summer Internship",
        company: "IBM",
        duration: "6 Weeks (Remote)",
        description: "Frontend web development internship focusing on HTML, CSS, JavaScript, Node.js, and database connectivity.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7233723306825134081/"
    },
    {
        title: "YBI Foundation AI & ML Internship",
        company: "YBI Foundation",
        duration: "1 Month (Remote)",
        description: "Focused on AI & ML concepts including data preprocessing, model training, and evaluation techniques.",
        link: "https://www.linkedin.com/feed/update/urn:li:activity:7242473242320379904/"
    }
];

// Certificates data
const certificates = [
    {
        title: "Project Management Fundamentals",
        issuer: "Professional Certification",
        description: "Developed strong understanding of project planning, execution, and risk management. Gained skills in team collaboration and workflow optimization.",
        link: "https://www.credly.com/badges/23a192bf-00ad-47e1-85b1-eb6a94e02c07/linked_in?t=sgj5fq"
    },
    {
        title: "Web Development Fundamentals",
        issuer: "Professional Certification",
        description: "Acquired expertise in HTML, CSS, JavaScript, and responsive design. Learned to build dynamic and user-friendly web applications.",
        link: "https://www.credly.com/badges/d23868b3-7eb4-41f4-a11d-fbf5ef9b9f68"
    }
];

// Typewriter Effect
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeWriter() {
    const currentWord = typewriterWords[wordIndex];
    
    if (isDeleting) {
        typewriterText.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;
    } else {
        typewriterText.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;
    }
    
    if (!isDeleting && charIndex === currentWord.length) {
        isDeleting = true;
        setTimeout(typeWriter, 1500);
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % typewriterWords.length;
        setTimeout(typeWriter, 300);
    } else {
        setTimeout(typeWriter, isDeleting ? 40 : 80);
    }
}

// Initialize Typewriter
typeWriter();

// Navigation
function navigateToSection(target) {
    // Update active nav item
    navItems.forEach(nav => nav.classList.remove('active'));
    const activeNav = document.querySelector(`.nav-item[data-target="${target}"]`);
    if (activeNav) {
        activeNav.classList.add('active');
    }
    
    // Show target section
    sections.forEach(section => {
        section.classList.remove('active');
        if (section.id === target) {
            section.classList.add('active');
        }
    });
    
    // Close mobile menu if open
    if (window.innerWidth <= 1200) {
        navLinks.classList.remove('active');
        hamburgerMenu.classList.remove('active');
    }
    
    // Scroll to top of section
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

navItems.forEach(item => {
    item.addEventListener('click', () => {
        const target = item.getAttribute('data-target');
        navigateToSection(target);
    });
});

// Home page buttons functionality
document.querySelectorAll('.btn-primary[data-target], .btn-secondary[data-target]').forEach(button => {
    button.addEventListener('click', (e) => {
        e.preventDefault();
        const target = button.getAttribute('data-target');
        navigateToSection(target);
    });
});

// Hamburger Menu Toggle
hamburgerMenu.addEventListener('click', (e) => {
    e.stopPropagation();
    hamburgerMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (window.innerWidth <= 1200) {
        const isClickInsideNav = navLinks.contains(e.target) || hamburgerMenu.contains(e.target);
        
        if (!isClickInsideNav && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    }
});

// Close mobile menu when clicking on nav item
document.querySelectorAll('.nav-item').forEach(item => {
    item.addEventListener('click', () => {
        if (window.innerWidth <= 1200) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
    });
});

// Back to Top Button
window.addEventListener('scroll', () => {
    // Show/hide back to top button
    if (window.scrollY > 300) {
        backToTop.style.display = 'flex';
    } else {
        backToTop.style.display = 'none';
    }
    
    // Update progress bar
    const scrollTop = document.documentElement.scrollTop;
    const scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrollProgress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${scrollProgress}%`;
});

backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Generate Projects
function generateProjects() {
    projectsGrid.innerHTML = '';
    
    projects.forEach(project => {
        const projectCard = document.createElement('div');
        projectCard.className = 'project-card';
        
        projectCard.innerHTML = `
            <div class="project-image">
                <img src="${project.image}" alt="${project.title}" loading="lazy">
            </div>
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="project-tech">
                    ${project.technologies.map(tech => 
                        `<span class="tech-tag">${tech}</span>`
                    ).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.link}" target="_blank" class="project-link">
                        <i class="fas fa-external-link-alt"></i>
                        <span>View Project</span>
                    </a>
                </div>
            </div>
        `;
        
        projectsGrid.appendChild(projectCard);
    });
}

// Generate Experience Timeline
function generateTimeline() {
    timeline.innerHTML = '';
    
    experiences.forEach((exp, index) => {
        const timelineItem = document.createElement('div');
        timelineItem.className = 'timeline-item';
        
        timelineItem.innerHTML = `
            <div class="timeline-dot"></div>
            <div class="timeline-content">
                <h3>${exp.title}${exp.ongoing ? '<span class="ongoing-dot"></span>' : ''}</h3>
                <p class="text-secondary">${exp.company} • ${exp.duration}</p>
                <p>${exp.description}</p>
                ${exp.link !== '#' ? `
                <a href="${exp.link}" target="_blank" class="project-link">
                    <i class="fas fa-external-link-alt"></i>
                    <span>View Details</span>
                </a>
                ` : ''}
            </div>
        `;
        
        timeline.appendChild(timelineItem);
    });
}

// Generate Certificates
function generateCertificates() {
    certificatesGrid.innerHTML = '';
    
    certificates.forEach(cert => {
        const certCard = document.createElement('div');
        certCard.className = 'certificate-card';
        
        certCard.innerHTML = `
            <h3>${cert.title}</h3>
            <p class="text-secondary">${cert.issuer}</p>
            <p>${cert.description}</p>
            <a href="${cert.link}" target="_blank" class="project-link">
                <i class="fas fa-external-link-alt"></i>
                <span>View Certificate</span>
            </a>
        `;
        
        certificatesGrid.appendChild(certCard);
    });
}

// Parallax Effect
window.addEventListener('scroll', () => {
    const scrolled = window.scrollY;
    const blobs = document.querySelectorAll('.gradient-blob');
    
    blobs.forEach((blob, index) => {
        const speed = 0.2 + (index * 0.1);
        const yPos = -(scrolled * speed);
        blob.style.transform = `translateY(${yPos}px)`;
    });
});

// Intersection Observer for animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
        }
    });
}, observerOptions);

// Observe all project cards, skill items, etc.
document.querySelectorAll('.project-card, .skill-category, .about-card, .certificate-card, .timeline-item').forEach(el => {
    observer.observe(el);
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    generateProjects();
    generateTimeline();
    generateCertificates();
    
    // Ensure mobile menu closes when resizing
    window.addEventListener('resize', () => {
        if (window.innerWidth > 1200 && navLinks.classList.contains('active')) {
            navLinks.classList.remove('active');
            hamburgerMenu.classList.remove('active');
        }
        
        // Toggle logo visibility based on screen size
        const logo = document.getElementById('logo');
        if (window.innerWidth > 1200) {
            logo.style.display = 'none';
        } else {
            logo.style.display = 'flex';
        }
    });
    
    // Initial logo visibility setup
    const logo = document.getElementById('logo');
    if (window.innerWidth > 1200) {
        logo.style.display = 'none';
    } else {
        logo.style.display = 'flex';
    }
    
    // Add animation to skill items
    const skillItems = document.querySelectorAll('.skill-item');
    skillItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.05}s`;
    });
});

// Add CSS for animate-in class
const style = document.createElement('style');
style.textContent = `
    .animate-in {
        animation: fadeInUp 0.6s ease-out forwards;
    }
    
    @keyframes fadeInUp {
        from {
            opacity: 0;
            transform: translateY(30px);
        }
        to {
            opacity: 1;
            transform: translateY(0);
        }
    }
    
    .text-secondary {
        color: var(--text-secondary) !important;
    }
`;
document.head.appendChild(style);
