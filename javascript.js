window.addEventListener("scroll", () => {
	const navbar = document.querySelector(".nav");
	if (window.scrollY > 50) {
		navbar.classList.add("scrolled");
	} else {
		navbar.classList.remove("scrolled");
	}
});

// --- Typewriter Effect ---
const typewriterText = "Pedro Alves";
const typewriterElement = document.getElementById("typewriter");
let charIndex = 0;
let isDeleting = false;

const typeAnimation = () => {
	const currentText = typewriterText.substring(0, charIndex);
	typewriterElement.textContent = currentText;

	if (!isDeleting && charIndex < typewriterText.length) {
		charIndex++;
		setTimeout(typeAnimation, 150);
	} else if (isDeleting && charIndex > 0) {
		charIndex--;
		setTimeout(typeAnimation, 100);
	} else if (!isDeleting && charIndex === typewriterText.length) {
		isDeleting = true;
		setTimeout(typeAnimation, 5000); // Stay for 5 seconds
	} else {
		isDeleting = false;
		setTimeout(typeAnimation, 500);
	}
};

typewriterElement.textContent = ""; // Clear initial text
typeAnimation();

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

// Initial check
initSwiper();

// Handle resize
window.addEventListener("resize", initSwiper);
