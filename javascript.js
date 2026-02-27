// --- Language Swapping ---
const translations = {
	pt: {
		title: "Pedro Alves | Desenvolvedor Full Stack",
		nav_about: "Sobre",
		nav_projects: "Projetos",
		nav_skills: "Habilidades",
		nav_contact: "Contato",
		hero_accent: "DEVELOPER",
		hero_p: "Resolvo problemas com código e entrego produtos que fazem sentido para quem usa",
		hero_btn: "PROJETOS",
		about_title: "SOBRE MIM",
		about_name: "Pedro",
		about_p:
			"Estudante de <strong>Engenharia de Software</strong> na <strong>Brigham Young University</strong>, apaixonado por construir tecnologias significativas e colaborar com equipes motivadas. Com experiência em projetos freelance, desenvolvo aplicações web <strong>Full Stack</strong> modernas utilizando <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong> e <strong>PostgreSQL</strong>. Focado em criar interfaces responsivas, código limpo e soluções escaláveis.",
		about_resume: "CURRÍCULO",
		about_resume_link:
			"https://drive.google.com/file/d/1tOE-ryRV-SCRF2QCrfNirsfUJOG3gG6b/view?usp=sharing",
		projects_title: "PROJETOS",
		project1_title: "Opine Agora SC",
		project1_p:
			"Portal de notícias robusto com CMS personalizado, sistema de comentários moderado e painel administrativo completo.",
		project2_title: "Abbracci Psicologia",
		project2_p:
			"Plataforma para serviços de Psicologia do Trabalho com animações fluidas e design focado em conversão.",
		project3_title: "MovieFlix",
		project3_p:
			"Plataforma de streaming de filmes com catálogo dinâmico, sistema de favoritos e busca avançada. Design focado em experiência imersiva.",
		project4_title: "PsicoAdmin",
		project4_p:
			"Sistema de gestão para psicólogos com agenda dinâmica, automação de pagamentos via Pix e dashboard financeiro.",
		project_status: "Em Desenvolvimento",
		project5_title: "Arquiteto & Designer",
		project5_p:
			"Landing Page de alta conversão com Glassmorphism, efeitos Parallax e lógica TypeScript para cálculo de experiência.",
		project_btn: "Ver projeto",
		skills_title: "HABILIDADES",
		skills_p:
			"Principais ferramentas e tecnologias que impulsionam meus projetos:",
		contact_title: "FALE COMIGO",
		email_label: "E-mail",
		skill_typescript: "TypeScript",
		seo_description:
			"Portfolio de Pedro Alves, Desenvolvedor Full Stack especializado em Next.js, TypeScript e Supabase. Criando soluções digitais robustas e escaláveis.",
		og_description:
			"Desenvolvedor Full Stack focado em interfaces modernas, responsivas e de alta performance.",
		footer: "Copyright © 2026 - Pedro Alves.",
	},
	en: {
		title: "Pedro Alves | Full Stack Developer",
		nav_about: "About",
		nav_projects: "Projects",
		nav_skills: "Skills",
		nav_contact: "Contact",
		hero_accent: "DEVELOPER",
		hero_p: "I solve problems with code and deliver products that make sense for those who use them.",
		hero_btn: "PROJECTS",
		about_title: "ABOUT ME",
		about_name: "Pedro",
		about_p:
			"Software Engineering student at <strong>Brigham Young University</strong>, passionate about building meaningful technology and collaborating with driven teams. With experience in freelance projects, I develop modern <strong>Full Stack</strong> web applications using <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong>, and <strong>PostgreSQL</strong>. Focused on creating responsive interfaces, clean code, and scalable solutions.",
		about_resume: "RESUME",
		about_resume_link:
			"https://drive.google.com/file/d/1JrOxzB8R4WX4jMDLhoQV2fAWJurcDQuy/view?usp=sharing",
		projects_title: "PROJECTS",
		project1_title: "Opine Agora SC",
		project1_p:
			"Robust news portal with custom CMS, moderated comment system and complete admin panel.",
		project2_title: "Abbracci Psychology",
		project2_p:
			"Platform for Occupational Psychology services with fluid animations and design focused on conversion.",
		project3_title: "MovieFlix",
		project3_p:
			"Movie streaming platform with dynamic catalog, favorites system and advanced search. Design focused on immersive experience.",
		project4_title: "PsicoAdmin",
		project4_p:
			"Management system for psychologists with dynamic agenda, Pix payment automation and financial dashboard.",
		project_status: "In Development",
		project5_title: "Architect & Designer",
		project5_p:
			"High-conversion Landing Page with Glassmorphism, Parallax effects and TypeScript logic for calculating experience.",
		project_btn: "View Project",
		skills_title: "SKILLS",
		skills_p: "Main tools and technologies that power my projects:",
		contact_title: "GET IN TOUCH",
		email_label: "Email",
		skill_typescript: "TypeScript",
		seo_description:
			"Portfolio of Pedro Alves, Full Stack Developer specialized in Next.js, TypeScript and Supabase. Creating robust and scalable digital solutions.",
		og_description:
			"Full Stack Developer focused on modern, responsive and high-performance interfaces.",
		footer: "Copyright © 2026 - Pedro Alves.",
	},
	es: {
		title: "Pedro Alves | Desarrollador Full Stack",
		nav_about: "Sobre",
		nav_projects: "Proyectos",
		nav_skills: "Habilidades",
		nav_contact: "Contacto",
		hero_accent: "DEVELOPER",
		hero_p: "Resuelvo problemas con código y entrego productos que tienen sentido para quienes los usan.",
		hero_btn: "PROYECTOS",
		about_title: "SOBRE MÍ",
		about_name: "Pedro",
		about_p:
			"Estudiante de <strong>Ingeniería de Software</strong> en la <strong>Brigham Young University</strong>, apasionado por construir tecnología significativa y colaborar con equipos motivados. Con experiencia en proyectos freelance, desarrollo aplicaciones web <strong>Full Stack</strong> modernas utilizando <strong>React</strong>, <strong>Next.js</strong>, <strong>TypeScript</strong>, <strong>Tailwind CSS</strong> y <strong>PostgreSQL</strong>. Enfocado en crear interfaces responsivas, código limpio y soluciones escalables.",
		about_resume: "CURRÍCULUM",
		about_resume_link:
			"https://drive.google.com/file/d/1xDvyK4jugPrX52DCvupxX11zuFzrnKWE/view?usp=sharing",
		projects_title: "PROYECTOS",
		project1_title: "Opine Agora SC",
		project1_p:
			"Portal de noticias robusto con CMS personalizado, sistema de comentarios moderado y panel de administración completo.",
		project2_title: "Abbracci Psicología",
		project2_p:
			"Plataforma para servicios de Psicología del Trabajo con animaciones fluidas y diseño enfocado a la conversión.",
		project3_title: "MovieFlix",
		project3_p:
			"Plataforma de streaming de películas con catálogo dinámico, sistema de favoritos y búsqueda avanzada. Diseño centrado en una experiencia inmersiva.",
		project4_title: "PsicoAdmin",
		project4_p:
			"Sistema de gestión para psicólogos con agenda dinámica, automatización de pagos vía Pix y panel financiero.",
		project_status: "En Desarrollo",
		project5_title: "Arquitecto & Diseñador",
		project5_p:
			"Landing Page de alta conversión con Glassmorphism, efectos Parallax y lógica TypeScript para el cálculo de la experiencia.",
		project_btn: "Ver Proyecto",
		skills_title: "HABILIDADES",
		skills_p:
			"Principales herramientas y tecnologías que impulsan mis proyectos:",
		contact_title: "CONTÁCTAME",
		email_label: "Correo",
		skill_typescript: "TypeScript",
		seo_description:
			"Portafolio de Pedro Alves, Desarrollador Full Stack especializado en Next.js, TypeScript y Supabase. Creando soluciones digitales robustas y escalables.",
		og_description:
			"Desarrollador Full Stack enfocado en interfaces modernas, responsivas y de alto rendimiento.",
		footer: "Copyright © 2026 - Pedro Alves.",
	},
};

let currentLang = localStorage.getItem("lang") || "pt";

const updateLanguage = (lang) => {
	document.querySelectorAll("[data-i18n]").forEach((el) => {
		const key = el.getAttribute("data-i18n");
		if (translations[lang][key]) {
			if (el.tagName === "TITLE") {
				document.title = translations[lang][key];
			} else if (el.tagName === "INPUT" || el.tagName === "TEXTAREA") {
				el.placeholder = translations[lang][key];
			} else if (el.tagName === "META") {
				el.setAttribute("content", translations[lang][key]);
			} else {
				el.innerHTML = translations[lang][key];
			}
		}
	});

	// Update links with data-i18n-link
	document.querySelectorAll("[data-i18n-link]").forEach((el) => {
		const key = el.getAttribute("data-i18n-link");
		if (translations[lang][key]) {
			el.href = translations[lang][key];
		}
	});

	document.getElementById("current-lang").textContent = lang.toUpperCase();
	localStorage.setItem("lang", lang);
	currentLang = lang;
};

// --- Navbar Scroll Effect ---
window.addEventListener("scroll", () => {
	const navbar = document.querySelector(".nav");
	if (window.scrollY > 50) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});

// --- Typewriter Effect ---
const typewriterElement = document.getElementById("typewriter");
let charIndex = 0;
let isDeleting = false;

const typeAnimation = () => {
	const fullText = "Pedro Alves";
	const firstName = "Pedro ";
	let displayText = "";

	if (!isDeleting) {
		if (charIndex < firstName.length) {
			displayText = fullText.substring(0, charIndex);
		} else {
			displayText =
				firstName +
				`<span class="accent">${fullText.substring(firstName.length, charIndex)}</span>`;
		}
		charIndex++;
	} else {
		if (charIndex > firstName.length) {
			displayText =
				firstName +
				`<span class="accent">${fullText.substring(firstName.length, charIndex)}</span>`;
		} else {
			displayText = fullText.substring(0, charIndex);
		}
		charIndex--;
	}

	typewriterElement.innerHTML = displayText;

	let typeSpeed = isDeleting ? 100 : 150;

	if (!isDeleting && charIndex === fullText.length + 1) {
		typeSpeed = 5000;
		isDeleting = true;
	} else if (isDeleting && charIndex === 0) {
		isDeleting = false;
		typeSpeed = 500;
	}

	setTimeout(typeAnimation, typeSpeed);
};

typeAnimation();

// --- Language Switcher UI ---
const langBtn = document.getElementById("lang-btn");
const langSwitcher = document.querySelector(".lang-switcher");
const langOptions = document.querySelectorAll(".lang-dropdown li");

langBtn.addEventListener("click", (e) => {
	e.stopPropagation();
	langSwitcher.classList.toggle("active");
});

langOptions.forEach((option) => {
	option.addEventListener("click", () => {
		const lang = option.getAttribute("data-lang");
		updateLanguage(lang);
		langSwitcher.classList.remove("active");
	});
});

document.addEventListener("click", () => {
	langSwitcher.classList.remove("active");
});

// --- Hamburger Menu ---
const hamburger = document.getElementById("hamburger");
const navLinks = document.querySelector(".nav__link");

hamburger.addEventListener("click", () => {
	hamburger.classList.toggle("active");
	navLinks.classList.toggle("active");
});

document.querySelectorAll(".nav__link a").forEach((link) => {
	link.addEventListener("click", () => {
		hamburger.classList.remove("active");
		navLinks.classList.remove("active");
	});
});

// --- Scroll to Top ---
const scrollBtn = document.getElementById("scrollToTop");

window.addEventListener("scroll", () => {
	if (window.scrollY > 300) {
		scrollBtn.classList.add("show");
	} else {
		scrollBtn.classList.remove("show");
	}
});

scrollBtn.addEventListener("click", () => {
	window.scrollTo({ top: 0, behavior: "smooth" });
});

// --- Enhanced Particles ---
const canvas = document.getElementById("bgCanvas");
const ctx = canvas.getContext("2d");

const setCanvas = () => {
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};

const createParticles = () => {
	const count = Math.floor((canvas.width * canvas.height) / 15000);
	return Array.from({ length: count }, () => {
		const isAccent = Math.random() > 0.8;
		return {
			x: Math.random() * canvas.width,
			y: Math.random() * canvas.height,
			r: Math.random() * 2 + 0.5,
			dx: (Math.random() - 0.5) * 0.4,
			dy: (Math.random() - 0.5) * 0.4,
			color: isAccent
				? "rgba(255, 82, 97, 0.4)"
				: "rgba(255, 255, 255, 0.2)",
		};
	});
};

setCanvas();
let particles = createParticles();

const animate = () => {
	ctx.clearRect(0, 0, canvas.width, canvas.height);

	for (const p of particles) {
		ctx.beginPath();
		ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
		ctx.fillStyle = p.color;
		ctx.fill();

		p.x += p.dx;
		p.y += p.dy;

		if (p.x < 0 || p.x > canvas.width) p.dx *= -1;
		if (p.y < 0 || p.y > canvas.height) p.dy *= -1;
	}

	requestAnimationFrame(animate);
};

animate();

window.addEventListener("resize", () => {
	setCanvas();
	particles = createParticles();
});

// --- Section Reveals ---
const reveals = document.querySelectorAll(".reveal");

window.addEventListener("scroll", () => {
	const windowHeight = window.innerHeight;
	const revealPoint = 100;

	reveals.forEach((reveal) => {
		const revealTop = reveal.getBoundingClientRect().top;
		if (revealTop < windowHeight - revealPoint) {
			reveal.classList.add("active");
		}
	});
});

// --- Swiper Initialization ---
let swiperInstance = null;

const initSwiper = () => {
	const isMobile = window.innerWidth <= 768;

	if (!isMobile && !swiperInstance) {
		swiperInstance = new Swiper(".projects__swiper", {
			slidesPerView: 1,
			spaceBetween: 30,
			loop: true,
			pagination: {
				el: ".projects__pagination",
				clickable: true,
			},
			navigation: {
				nextEl: ".projects__next",
				prevEl: ".projects__prev",
			},
			breakpoints: {
				768: {
					slidesPerView: 2,
					spaceBetween: 30,
				},
				1024: {
					slidesPerView: 3,
					spaceBetween: 40,
				},
			},
			autoplay: {
				delay: 5000,
				disableOnInteraction: false,
			},
		});
	} else if (isMobile && swiperInstance) {
		swiperInstance.destroy(true, true);
		swiperInstance = null;
	}
};

// Initial calls
initSwiper();
updateLanguage(currentLang);

// Handle resize
window.addEventListener("resize", initSwiper);
