// Navigation mobile
const hamburger = document.querySelector(".hamburger")
const navMenu = document.querySelector(".nav-menu")

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active")
  navMenu.classList.toggle("active")
})

// Fermer le menu mobile lors du clic sur un lien
document.querySelectorAll(".nav-link").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active")
    navMenu.classList.remove("active")
  }),
)

// Smooth scrolling pour les liens de navigation
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    // Don't prevent default for modal trigger links
    if (this.getAttribute("onclick")) {
      return
    }

    e.preventDefault()
    const target = document.querySelector(this.getAttribute("href"))
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      })
    }
  })
})

// Données des projets
const projectsData = {
  project1: {
    title: "Application Web de Recommandation avec AI",
    description:
      "Développement d’un site web dynamique de recommandations (hôtels, restaurants, salles de réunion) en utilisant HTML5, CSS3, JavaScript, Bootstrap, PHP, MySQL et Python avec JSON. J’ai implémenté un index inversé pour l’indexation des données et l’algorithme A* pour générer automatiquement des recommandations pertinentes. Le site fonctionne de manière optimale.",
    technologies: ["PHP", "PYTHON", "MySQL", "BOOTSTRAP", "CSS","JAVASCRIPT","JSON"],
    features: [
      "Recommandations intelligentes avec A*",
      "Indexation optimisée avec index inversé",
      "Base de données relationnelle MySQL",
      "Intégration Python pour traitement des données",
      "Système de recherche avancée",
    ],
    images: [
      "public/main1.png",
      "public/signup.jpeg",
      "public/login.jpeg",
      "public/photo.jpeg",
      "public/recommandation.jpeg",
      "public/meilleur.jpeg",
      "public/profile.jpeg",
    ],
    githubLink: "https://github.com/FediBHF/Site-web-de-recommandations-hotels-restaurants-et-salles-de-reunion.git",
    liveLink: "https://gestion-app-demo.com",
  },
  project2: {
    title: "Jeux video avec Utinty",
    description:
      "Jeu vidéo d’action développé avec Unity, intégrant un système de combat dynamique. Le gameplay inclut une intelligence artificielle permettant le respawn stratégique des ennemis, des objets de soin (medkits), ainsi que des pouvoirs spéciaux pour renforcer le joueur. Le jeu propose un système de suivi ennemi avancé et une mécanique de Game Over pour une expérience immersive et compétitive.",
    technologies: ["Unity", "C#"],
    features: [
      "Système de combat dynamique (attaques du joueur contre les ennemis)",
      "Respawn intelligent des ennemis",
      "Objets de soin",
      "Pouvoirs spéciaux",
      "Gestion de la difficulté",
    ],
    images: [
      "public/first.jpeg",
      "public/second.jpeg",
      "public/third.jpeg",
      "public/four.jpeg",
    ],
    githubLink: "https://github.com/FediBHF/RPG-FightingGame-2D",
    liveLink: "https://ecommerce-demo.com",
  },
  project3: {
    title: "Pierre, feuille, ciseaux",
    description:
      "Jeu Tic-Tac-Toe développé en Python avec une intelligence artificielle utilisant l’algorithme Min-Max pour choisir les coups optimaux. Le programme permet à un joueur d’affronter l’IA, avec détection automatique de la victoire, défaite ou match nul.",
    technologies: ["Python","A*"],
    features: [
      "Mode joueur vs IA",
      "Algorithme Min-Max pour décisions optimales",
      "Détection automatique de victoire/défaite/nul",
      "IA capable de bloquer les menaces de l’adversaire",
    ],
    images: [
      "public/tictactoe.png",
      "public/t1.png",
      "public/t2.png",
      "public/t3.png",
      "public/t4.png",
    ],
    githubLink: "https://github.com/FediBHF/Jeu-du-Morpion-en-Python-avec-IA-imbattable-utilisant-l-algorithme-MinMax..git",
    liveLink: "https://taskapp-demo.com",
  },
}

// Données des certificats
const certificatesData = {
  cert1: {
    title: "Certification JavaScript",
    issuer: "FreeCodeCamp",
    date: "2024",
    description:
      "Certification complète en JavaScript couvrant les concepts fondamentaux et avancés du langage, incluant ES6+, programmation asynchrone, et manipulation du DOM.",
    skills: ["JavaScript ES6+", "Programmation Asynchrone", "DOM Manipulation", "API Fetch", "Modules"],
    image: "public/javascript-certification-document.jpg",
  },
  cert2: {
    title: "Spring Boot Certification",
    issuer: "Oracle",
    date: "2024",
    description:
      "Certification officielle Oracle pour Spring Boot, couvrant le développement d'applications web, les API REST, la sécurité et l'intégration de bases de données.",
    skills: ["Spring Boot", "API REST", "Spring Security", "JPA/Hibernate", "Microservices"],
    image: "public/spring-boot-oracle-certification.jpg",
  },
  cert3: {
    title: "Web Development",
    issuer: "Coursera",
    date: "2023",
    description:
      "Certification complète en développement web couvrant HTML5, CSS3, JavaScript, et les frameworks modernes. Inclut des projets pratiques et des bonnes pratiques.",
    skills: ["HTML5", "CSS3", "Responsive Design", "JavaScript", "Git/GitHub"],
    image: "public/web-development-certificate-coursera.jpg",
  },
}

// Fonction pour ouvrir le modal des projets
function openProjectModal(projectId) {
  const project = projectsData[projectId]
  if (!project) return

  const modalContent = document.getElementById("modalContent")
  modalContent.innerHTML = `
        <h2>${project.title}</h2>
        <div class="project-modal-content">
            <div class="project-images">
                ${project.images.map((img) => `<img src="${img}" alt="${project.title}" class="project-modal-image">`).join("")}
            </div>
            <div class="project-details">
                <p class="project-modal-description">${project.description}</p>
                
                <div class="project-modal-section">
                    <h3>Technologies utilisées</h3>
                    <div class="tech-tags">
                        ${project.technologies.map((tech) => `<span class="tech-tag">${tech}</span>`).join("")}
                    </div>
                </div>
                
                <div class="project-modal-section">
                    <h3>Fonctionnalités principales</h3>
                    <ul class="features-list">
                        ${project.features.map((feature) => `<li>${feature}</li>`).join("")}
                    </ul>
                </div>
                
                <div class="project-links">
                    <a href="${project.githubLink}" target="_blank" class="btn btn-primary">
                        <i class="fab fa-github"></i> Voir sur GitHub
                    </a>
                    <a href="${project.liveLink}" target="_blank" class="btn btn-secondary">
                        <i class="fas fa-external-link-alt"></i> Voir le site
                    </a>
                </div>
            </div>
        </div>
    `

  if (!document.getElementById("projectModalStyles")) {
    const style = document.createElement("style")
    style.id = "projectModalStyles"
    style.textContent = `
            .project-modal-content {
                display: grid;
                gap: 2rem;
            }
            
            .project-images {
                display: grid;
                gap: 1rem;
            }
            
            .project-modal-image {
                width: 100%;
                border-radius: var(--border-radius);
                box-shadow: var(--shadow-soft);
                transition: var(--transition);
            }
            
            .project-modal-image:hover {
                transform: scale(1.02);
                box-shadow: var(--shadow-glow);
            }
            
            .project-modal-description {
                font-size: 1.1rem;
                line-height: 1.7;
                color: var(--text-secondary);
                margin-bottom: 2rem;
            }
            
            .project-modal-section {
                margin-bottom: 2rem;
            }
            
            .project-modal-section h3 {
                color: var(--primary-color);
                margin-bottom: 1rem;
                font-size: 1.2rem;
                font-weight: 700;
            }
            
            .tech-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            
            .tech-tags .tech-tag {
                background: var(--background-glass);
                backdrop-filter: blur(10px);
                border: 1px solid var(--border-glass);
                color: var(--primary-color);
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-weight: 600;
                transition: var(--transition);
            }
            
            .tech-tags .tech-tag:hover {
                background: var(--primary-gradient);
                color: var(--text-white);
                transform: translateY(-2px);
            }
            
            .features-list {
                list-style: none;
                padding: 0;
            }
            
            .features-list li {
                padding: 0.8rem 0;
                border-bottom: 1px solid var(--border-color);
                color: var(--text-secondary);
                position: relative;
                padding-left: 2rem;
            }
            
            .features-list li:before {
                content: "✓";
                color: var(--primary-color);
                font-weight: bold;
                position: absolute;
                left: 0;
                top: 0.8rem;
            }
            
            .project-links {
                display: flex;
                gap: 1rem;
                flex-wrap: wrap;
            }
            
            @media (max-width: 768px) {
                .project-links {
                    flex-direction: column;
                }
            }
        `
    document.head.appendChild(style)
  }

  document.getElementById("projectModal").style.display = "block"
  document.body.style.overflow = "hidden" // Prevent background scrolling
}

function openCVModal() {
  document.getElementById("cvModal").style.display = "block"
  document.body.style.overflow = "hidden"
}

function openAllCertificatesModal() {
  document.getElementById("certificatesModal").style.display = "block"
  document.body.style.overflow = "hidden"
}

function openCertificateImageModal(certId) {
  const certificate = certificatesData[certId]
  if (!certificate) return

  const modalContent = document.getElementById("certificateImageContent")
  modalContent.innerHTML = `
        <div class="certificate-image-content">
            <h2>${certificate.title}</h2>
            <div class="certificate-full-image">
                <img src="${certificate.image}" alt="${certificate.title}" class="full-certificate-image">
            </div>
            <div class="certificate-actions">
                <a href="${certificate.image}" class="btn btn-primary" download="${certificate.title.replace(/\s+/g, "_")}.pdf">
                    <i class="fas fa-download"></i>
                    Télécharger PDF
                </a>
                <p class="certificate-info">${certificate.issuer} - ${certificate.date}</p>
            </div>
        </div>
    `

  if (!document.getElementById("certificateImageModalStyles")) {
    const style = document.createElement("style")
    style.id = "certificateImageModalStyles"
    style.textContent = `
            .certificate-image-modal .modal-content {
                max-width: 90vw;
                max-height: 90vh;
                padding: 2rem;
            }
            
            .certificate-image-content {
                text-align: center;
            }
            
            .certificate-image-content h2 {
                color: var(--primary-color);
                margin-bottom: 2rem;
                font-size: 1.8rem;
            }
            
            .certificate-full-image {
                margin-bottom: 2rem;
                border-radius: var(--border-radius);
                overflow: hidden;
                box-shadow: var(--shadow-soft);
            }
            
            .full-certificate-image {
                width: 100%;
                height: auto;
                max-height: 70vh;
                object-fit: contain;
                transition: var(--transition);
            }
            
            .full-certificate-image:hover {
                transform: scale(1.02);
            }
            
            .certificate-actions {
                display: flex;
                flex-direction: column;
                align-items: center;
                gap: 1rem;
            }
            
            .certificate-info {
                color: var(--text-secondary);
                font-size: 1.1rem;
                font-weight: 500;
            }
            
            @media (max-width: 768px) {
                .certificate-image-modal .modal-content {
                    padding: 1rem;
                    margin: 1rem;
                }
                
                .full-certificate-image {
                    max-height: 60vh;
                }
            }
        `
    document.head.appendChild(style)
  }

  document.getElementById("certificateImageModal").style.display = "block"
  document.body.style.overflow = "hidden"
}

function openCertificateModal(certId) {
  const certificate = certificatesData[certId]
  if (!certificate) return

  // Create certificate modal if it doesn't exist
  let certificateModal = document.getElementById("certificateModal")
  if (!certificateModal) {
    certificateModal = document.createElement("div")
    certificateModal.id = "certificateModal"
    certificateModal.className = "modal"
    certificateModal.innerHTML = `
      <div class="modal-content">
        <span class="close">&times;</span>
        <div id="certificateModalContent"></div>
      </div>
    `
    document.body.appendChild(certificateModal)
  }

  const modalContent = document.getElementById("certificateModalContent")
  modalContent.innerHTML = `
        <h2>${certificate.title}</h2>
        <div class="certificate-modal-content">
            <div class="certificate-image">
                <img src="${certificate.image}" alt="${certificate.title}" class="certificate-modal-image">
            </div>
            <div class="certificate-details">
                <div class="certificate-info">
                    <p><strong>Organisme :</strong> ${certificate.issuer}</p>
                    <p><strong>Date :</strong> ${certificate.date}</p>
                </div>
                
                <p class="certificate-description">${certificate.description}</p>
                
                <div class="certificate-skills">
                    <h3>Compétences acquises</h3>
                    <div class="skills-tags">
                        ${certificate.skills.map((skill) => `<span class="skill-tag">${skill}</span>`).join("")}
                    </div>
                </div>
            </div>
        </div>
    `

  if (!document.getElementById("certificateModalStyles")) {
    const style = document.createElement("style")
    style.id = "certificateModalStyles"
    style.textContent = `
            .certificate-modal-content {
                display: grid;
                gap: 2rem;
            }
            
            .certificate-modal-image {
                width: 100%;
                border-radius: var(--border-radius);
                box-shadow: var(--shadow-soft);
                transition: var(--transition);
            }
            
            .certificate-modal-image:hover {
                transform: scale(1.02);
                box-shadow: var(--shadow-glow);
            }
            
            .certificate-info {
                background: var(--background-glass);
                backdrop-filter: blur(10px);
                border: 1px solid var(--border-glass);
                padding: 1.5rem;
                border-radius: var(--border-radius);
                margin-bottom: 1rem;
            }
            
            .certificate-info p {
                margin-bottom: 0.5rem;
                color: var(--text-secondary);
                font-weight: 500;
            }
            
            .certificate-description {
                font-size: 1.1rem;
                line-height: 1.7;
                color: var(--text-secondary);
                margin-bottom: 2rem;
            }
            
            .certificate-skills h3 {
                color: var(--primary-color);
                margin-bottom: 1rem;
                font-weight: 700;
            }
            
            .skills-tags {
                display: flex;
                flex-wrap: wrap;
                gap: 0.5rem;
            }
            
            .skills-tags .skill-tag {
                background: var(--background-glass);
                backdrop-filter: blur(10px);
                border: 1px solid var(--border-glass);
                color: var(--primary-color);
                padding: 0.5rem 1rem;
                border-radius: 20px;
                font-weight: 600;
                transition: var(--transition);
            }
            
            .skills-tags .skill-tag:hover {
                background: var(--primary-gradient);
                color: var(--text-white);
                transform: translateY(-2px);
            }
            
            @media (min-width: 768px) {
                .certificate-modal-content {
                    grid-template-columns: 1fr 1fr;
                    align-items: start;
                }
            }
        `
    document.head.appendChild(style)
  }

  certificateModal.style.display = "block"
  document.body.style.overflow = "hidden" // Prevent background scrolling
}

document.addEventListener("click", (event) => {
  // Close button functionality
  if (event.target.classList.contains("close")) {
    event.target.closest(".modal").style.display = "none"
    document.body.style.overflow = "auto" // Restore scrolling
  }

  // Click outside modal to close
  if (event.target.classList.contains("modal")) {
    event.target.style.display = "none"
    document.body.style.overflow = "auto" // Restore scrolling
  }
})

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    const openModals = document.querySelectorAll(".modal[style*='block']")
    openModals.forEach((modal) => {
      modal.style.display = "none"
    })
    document.body.style.overflow = "auto" // Restore scrolling
  }
})

const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1"
      entry.target.style.transform = "translateY(0)"
      entry.target.classList.add("animate-in")
    }
  })
}, observerOptions)

// Observer tous les éléments avec animation
document.addEventListener("DOMContentLoaded", () => {
  const animatedElements = document.querySelectorAll(".quick-card, .project-card, .skill-tag")

  animatedElements.forEach((el, index) => {
    el.style.opacity = "0"
    el.style.transform = "translateY(30px)"
    el.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`
    observer.observe(el)
  })
})

window.addEventListener("scroll", () => {
  const scrolled = window.pageYOffset
  const rate = scrolled * -0.5

  const orbs = document.querySelectorAll(".gradient-orb")
  orbs.forEach((orb, index) => {
    const speed = (index + 1) * 0.1
    orb.style.transform = `translateY(${scrolled * speed}px)`
  })

  // Profile image parallax
  const parallax = document.querySelector(".profile-image")
  if (parallax) {
    const speed = scrolled * 0.05
    parallax.style.transform = `translateY(${speed}px)`
  }
})

// Navigation active avec smooth highlight
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]")
  const navLinks = document.querySelectorAll(".nav-link")

  let current = ""
  sections.forEach((section) => {
    const sectionTop = section.offsetTop
    const sectionHeight = section.clientHeight
    if (scrollY >= sectionTop - 200) {
      current = section.getAttribute("id")
    }
  })

  navLinks.forEach((link) => {
    link.classList.remove("active")
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active")
    }
  })
})

document.addEventListener("mousemove", (e) => {
  const cursor = document.querySelector(".cursor")
  if (!cursor) {
    const newCursor = document.createElement("div")
    newCursor.className = "cursor"
    newCursor.style.cssText = `
      position: fixed;
      width: 20px;
      height: 20px;
      background: var(--primary-gradient);
      border-radius: 50%;
      pointer-events: none;
      z-index: 9999;
      mix-blend-mode: difference;
      transition: transform 0.1s ease;
      opacity: 0;
    `
    document.body.appendChild(newCursor)
  }

  const cursorElement = document.querySelector(".cursor")
  cursorElement.style.left = e.clientX - 10 + "px"
  cursorElement.style.top = e.clientY - 10 + "px"
  cursorElement.style.opacity = "1"
})

// Hide cursor when leaving window
document.addEventListener("mouseleave", () => {
  const cursor = document.querySelector(".cursor")
  if (cursor) {
    cursor.style.opacity = "0"
  }
})
