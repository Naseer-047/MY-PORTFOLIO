
      document.addEventListener("DOMContentLoaded", function () {
        // Initialize everything
        initLoader();
        initTheme();
        initNavigation();
        initTypewriter();
        initScrollAnimations();
        initHeroAnimation();
        initMobileNavigation(); // NEW: Initialize mobile navigation
        initScrollProgress();
        initBackToTop();
        initFormSubmission();
        initViewMoreProjects();
        initFloatingElements();
      });

      function initHeroAnimation() {
        // subtle floating animation for the profile card
        const profile = document.querySelector(".profile-card");
        if (!profile || typeof gsap === "undefined") return;

        gsap.to(profile, {
          y: -8,
          duration: 3.5,
          ease: "sine.inOut",
          repeat: -1,
          yoyo: true,
        });
      }

      function initLoader() {
        const loader = document.getElementById("loader");
        const loaderText = document.querySelector(".loader-text");
        const loaderSubtitle = document.querySelector(".loader-subtitle");
        const progressBar = document.querySelector(".loader-progress-bar");

        // Animate loader text
        gsap.to(loaderText, {
          duration: 1.5,
          scale: 1.2,
          rotation: 360,
          ease: "power2.inOut",
          repeat: 1,
          yoyo: true,
        });

        // Animate progress bar
        gsap.to(progressBar, {
          width: "100%",
          duration: 2,
          ease: "power2.inOut",
          delay: 0.5,
          onComplete: () => {
            // Animate subtitle
            gsap.to(loaderSubtitle, {
              duration: 0.5,
              opacity: 1,
              onComplete: () => {
                // Hide loader
                setTimeout(() => {
                  gsap.to(loader, {
                    duration: 0.8,
                    opacity: 0,
                    onComplete: () => {
                      loader.style.display = "none";
                      // Animate hero section
                      animateHero();
                    },
                  });
                }, 1000);
              },
            });
          },
        });
      }

      function initTheme() {
        const themeToggle = document.getElementById("themeToggle");
        const mobileThemeToggle = document.getElementById("mobileThemeToggle");

        // Check saved theme
        let savedTheme = localStorage.getItem("theme");
        // Default to light if not set
        if (!savedTheme) {
          savedTheme = "light";
          localStorage.setItem("theme", "light");
        }
        if (savedTheme === "dark") {
          document.body.classList.add("dark");
        } else {
          document.body.classList.remove("dark");
        }

        // reflect initial aria state on the toggle
        if (themeToggle) {
          themeToggle.setAttribute(
            "aria-pressed",
            document.body.classList.contains("dark") ? "true" : "false",
          );
        }
        if (mobileThemeToggle) {
          mobileThemeToggle.setAttribute(
            "aria-pressed",
            document.body.classList.contains("dark") ? "true" : "false",
          );
        }

        // Toggle theme with animation and update aria state
        function toggleTheme() {
          gsap.to(document.body, {
            duration: 0.45,
            ease: "power2.inOut",
            onStart: () => {
              document.body.classList.toggle("dark");
              const isDarkNow = document.body.classList.contains("dark");
              
              // Update both theme toggles
              if (themeToggle) {
                themeToggle.setAttribute(
                  "aria-pressed",
                  isDarkNow ? "true" : "false",
                );
              }
              if (mobileThemeToggle) {
                mobileThemeToggle.setAttribute(
                  "aria-pressed",
                  isDarkNow ? "true" : "false",
                );
              }
              
              localStorage.setItem("theme", isDarkNow ? "dark" : "light");
            },
          });
        }

        // Add event listeners to both theme toggles
        if (themeToggle) {
          themeToggle.addEventListener("click", toggleTheme);
        }
        if (mobileThemeToggle) {
          mobileThemeToggle.addEventListener("click", toggleTheme);
        }
      }

      function initNavigation() {
        const navItems = document.querySelectorAll(".nav-item");
        const navIndicator = document.getElementById("navIndicator");
        const sections = document.querySelectorAll("section");

        // Set initial active nav item
        updateNavIndicator("home");

        // Nav item click handlers with rolling animation
        navItems.forEach((item) => {
          const text = item.querySelector(".nav-text:first-child");
          const clone = item.querySelector(".nav-text.clone");

          // Hover animation
          item.addEventListener("mouseenter", () => {
            gsap.to(text, {
              duration: 0.3,
              y: -30,
              ease: "power2.out",
            });
            gsap.to(clone, {
              duration: 0.3,
              y: -30,
              ease: "power2.out",
            });
          });

          item.addEventListener("mouseleave", () => {
            gsap.to(text, {
              duration: 0.3,
              y: 0,
              ease: "power2.out",
            });
            gsap.to(clone, {
              duration: 0.3,
              y: 30,
              ease: "power2.out",
            });
          });

          // Click handler
          item.addEventListener("click", () => {
            const targetId = item.getAttribute("data-target");
            scrollToSection(targetId);
          });
        });

        // Button hover animations
        document.querySelectorAll(".btn").forEach((btn) => {
          const text = btn.querySelector(".btn-text:first-child");
          const clone = btn.querySelector(".btn-text.clone");

          btn.addEventListener("mouseenter", () => {
            gsap.to(text, {
              duration: 0.3,
              y: -24,
              ease: "power2.out",
            });
            gsap.to(clone, {
              duration: 0.3,
              y: -24,
              ease: "power2.out",
            });
          });

          btn.addEventListener("mouseleave", () => {
            gsap.to(text, {
              duration: 0.3,
              y: 0,
              ease: "power2.out",
            });
            gsap.to(clone, {
              duration: 0.3,
              y: 24,
              ease: "power2.out",
            });
          });
        });

        // Update nav indicator on scroll
        window.addEventListener("scroll", updateActiveSection);

        // Header scroll effect
        window.addEventListener("scroll", () => {
          const header = document.getElementById("header");
          if (window.scrollY > 100) {
            header.classList.add("scrolled");
          } else {
            header.classList.remove("scrolled");
          }
        });
      }

      function updateActiveSection() {
        const sections = document.querySelectorAll("section");
        const scrollPosition = window.scrollY + 100;

        sections.forEach((section) => {
          const sectionTop = section.offsetTop;
          const sectionHeight = section.clientHeight;
          const sectionId = section.getAttribute("id");

          if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
          ) {
            updateNavIndicator(sectionId);
            updateMobileNavActive(sectionId);
          }
        });
      }

      function updateNavIndicator(sectionId) {
        const navItems = document.querySelectorAll(".nav-item");
        const navIndicator = document.getElementById("navIndicator");
        const activeItem = document.querySelector(
          `.nav-item[data-target="${sectionId}"]`,
        );

        if (activeItem) {
          const rect = activeItem.getBoundingClientRect();
          const headerRect = document
            .getElementById("header")
            .getBoundingClientRect();

          gsap.to(navIndicator, {
            duration: 0.3,
            left: rect.left - headerRect.left,
            width: rect.width,
            ease: "power2.out",
          });

          navItems.forEach((item) => {
            if (item.getAttribute("data-target") === sectionId) {
              item.classList.add("active");
            } else {
              item.classList.remove("active");
            }
          });
        }
      }

      function scrollToSection(sectionId) {
        const section = document.getElementById(sectionId);
        if (section) {
          window.scrollTo({
            top: section.offsetTop,
            behavior: "smooth",
          });

          // Close mobile menu if open
          closeMobileMenu();
        }
      }

      function initTypewriter() {
        const typewriter = document.getElementById("typewriter");
        if (!typewriter) return;

        const texts = [
          "Information Science Student",
          "Full Stack Developer",
          "Engineering Student",
          "Tech Enthusiast",
          "Problem Solver",
          "UI/UX Designer",
          "JavaScript Developer",
        ];
        let textIndex = 0;
        let charIndex = 0;
        let isDeleting = false;
        let isPaused = false;

        function type() {
          if (isPaused) return;

          const currentText = texts[textIndex];

          if (isDeleting) {
            typewriter.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
          } else {
            typewriter.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
          }

          let speed = isDeleting ? 50 : 100;

          if (!isDeleting && charIndex === currentText.length) {
            isPaused = true;
            setTimeout(() => {
              isPaused = false;
              isDeleting = true;
              type();
            }, 2000);
            return;
          } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            textIndex = (textIndex + 1) % texts.length;
            speed = 500;
          }

          setTimeout(type, speed);
        }

        // Start typing after hero animation
        setTimeout(type, 2000);
      }

      function animateHero() {
        const heroText = document.querySelector(".hero-text h1");
        const spans = heroText.querySelectorAll("span");
        const subtitle = document.querySelector(".hero-text .section-subtitle");
        const buttons = document.querySelector(".hero-buttons");

        // Animate name
        gsap.fromTo(
          spans,
          { opacity: 0, y: 100 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            stagger: 0.2,
            ease: "power4.out",
            delay: 0.5,
          },
        );

        // Animate subtitle
        gsap.fromTo(
          subtitle,
          { opacity: 0, y: 50 },
          {
            opacity: 1,
            y: 0,
            duration: 1,
            delay: 1.2,
            ease: "power2.out",
          },
        );

        // Animate buttons
        gsap.fromTo(
          buttons.children,
          { opacity: 0, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.2,
            delay: 1.8,
            ease: "power2.out",
          },
        );

        // Animate profile image (subtle fade + scale)
        const profileCard = document.querySelector(".profile-card");
        gsap.fromTo(
          profileCard,
          { opacity: 0, scale: 0.95 },
          {
            opacity: 1,
            scale: 1,
            duration: 0.9,
            delay: 0.6,
            ease: "power2.out",
          },
        );
      }

      function initScrollAnimations() {
        // Initialize GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Animate section headings
        gsap.utils.toArray(".section-heading").forEach((heading) => {
          gsap.from(heading, {
            scrollTrigger: {
              trigger: heading,
              start: "top 80%",
              end: "bottom 20%",
              toggleActions: "play none none reverse",
            },
            y: 100,
            opacity: 0,
            duration: 1,
            ease: "power3.out",
          });
        });

        // Animate cards
        gsap.utils
          .toArray(
            ".stat-card, .skill-category, .project-card, .achievement-card, .highlight-card, .tool-card",
          )
          .forEach((card) => {
            gsap.from(card, {
              scrollTrigger: {
                trigger: card,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
              y: 50,
              opacity: 0,
              duration: 0.8,
              ease: "power2.out",
            });
          });

        // Animate timeline items (use fromTo so CSS-hidden items animate to visible)
        gsap.utils.toArray(".timeline-item").forEach((item, i) => {
          gsap.fromTo(
            item,
            { x: i % 2 === 0 ? -100 : 100, opacity: 0 },
            {
              scrollTrigger: {
                trigger: item,
                start: "top 85%",
                end: "bottom 15%",
                toggleActions: "play none none reverse",
              },
              x: 0,
              opacity: 1,
              duration: 1,
              ease: "power3.out",
              delay: i * 0.2,
            },
          );
        });

        // Animate skill bars
        gsap.utils.toArray(".skill-progress").forEach((bar) => {
          const width = bar.getAttribute("data-width");
          gsap.to(bar, {
            scrollTrigger: {
              trigger: bar,
              start: "top 85%",
              end: "bottom 15%",
              toggleActions: "play none none reverse",
            },
            width: `${width}%`,
            duration: 1.5,
            ease: "power2.out",
          });
        });

        // Animate contact items
        gsap.utils.toArray(".contact-item").forEach((item, i) => {
          gsap.from(item, {
            scrollTrigger: {
              trigger: item,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse",
            },
            x: -50,
            opacity: 0,
            duration: 0.8,
            ease: "power2.out",
            delay: i * 0.1,
          });
        });

        // Animate social links
        gsap.utils.toArray(".social-link").forEach((link, i) => {
          gsap.from(link, {
            scrollTrigger: {
              trigger: link,
              start: "top 90%",
              end: "bottom 10%",
              toggleActions: "play none none reverse",
            },
            scale: 0,
            rotation: 180,
            opacity: 0,
            duration: 0.6,
            ease: "back.out(1.7)",
            delay: i * 0.1,
          });
        });
      }

      // NEW: Mobile Navigation Functions
      function initMobileNavigation() {
        const mobileMenuToggle = document.getElementById("mobileMenuToggle");
        const mobileNavOverlay = document.getElementById("mobileNavOverlay");
        const mobileNavMenu = document.getElementById("mobileNavMenu");
        const mobileNavLinks = document.querySelectorAll(".mobile-nav-link");

        // Toggle mobile menu
        function toggleMobileMenu() {
          mobileMenuToggle.classList.toggle("active");
          mobileNavOverlay.classList.toggle("active");
          mobileNavMenu.classList.toggle("active");
          
          // Prevent body scroll when menu is open
          document.body.style.overflow = mobileNavMenu.classList.contains("active") ? "hidden" : "";
        }

        // Close mobile menu
        function closeMobileMenu() {
          mobileMenuToggle.classList.remove("active");
          mobileNavOverlay.classList.remove("active");
          mobileNavMenu.classList.remove("active");
          document.body.style.overflow = "";
        }

        // Update active mobile nav link
        function updateMobileNavActive(sectionId) {
          mobileNavLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("data-target") === sectionId) {
              link.classList.add("active");
            }
          });
        }

        // Event listeners
        if (mobileMenuToggle) {
          mobileMenuToggle.addEventListener("click", toggleMobileMenu);
        }

        if (mobileNavOverlay) {
          mobileNavOverlay.addEventListener("click", closeMobileMenu);
        }

        // Mobile nav link clicks
        mobileNavLinks.forEach(link => {
          link.addEventListener("click", (e) => {
            e.preventDefault();
            const targetId = link.getAttribute("data-target");
            scrollToSection(targetId);
            closeMobileMenu();
          });
        });

        // Close menu on escape key
        document.addEventListener("keydown", (e) => {
          if (e.key === "Escape" && mobileNavMenu.classList.contains("active")) {
            closeMobileMenu();
          }
        });

        // Expose closeMobileMenu function globally
        window.closeMobileMenu = closeMobileMenu;
        window.updateMobileNavActive = updateMobileNavActive;
      }

      function initScrollProgress() {
        const progressBar = document.querySelector(".scroll-progress-bar");

        window.addEventListener("scroll", () => {
          const windowHeight =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;
          const scrolled = (window.scrollY / windowHeight) * 100;

          gsap.to(progressBar, {
            width: `${scrolled}%`,
            duration: 0.3,
            ease: "power2.out",
          });

          // Show/hide scroll indicator
          const scrollIndicator = document.getElementById("scrollIndicator");
          if (window.scrollY > 100) {
            scrollIndicator.style.opacity = "0";
          } else {
            scrollIndicator.style.opacity = "0.7";
          }
        });
      }

      function initBackToTop() {
        const backToTop = document.getElementById("backToTop");

        window.addEventListener("scroll", () => {
          if (window.scrollY > 500) {
            backToTop.classList.add("visible");
          } else {
            backToTop.classList.remove("visible");
          }
        });

        backToTop.addEventListener("click", () => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
      }

      function initFormSubmission() {
        const contactForm = document.getElementById("contactForm");

        contactForm.addEventListener("submit", function (e) {
          e.preventDefault();

          const submitBtn = this.querySelector('button[type="submit"]');
          const originalContent = submitBtn.innerHTML;

          // Show loading state
          submitBtn.innerHTML =
            '<i class="fas fa-spinner fa-spin"></i> SENDING...';
          submitBtn.disabled = true;

          // Simulate API call
          setTimeout(() => {
            // Show success animation
            submitBtn.innerHTML = '<i class="fas fa-check"></i> SENT!';

            // Add confetti effect
            createConfetti();

            // Reset form
            this.reset();

            // Reset button after 2 seconds
            setTimeout(() => {
              submitBtn.innerHTML = originalContent;
              submitBtn.disabled = false;
            }, 2000);
          }, 1500);
        });
      }

      // Create a project-card element matching existing layout
      function createProjectCard(title, techs, description) {
        const card = document.createElement("div");
        card.className = "project-card";

        const h3 = document.createElement("h3");
        h3.textContent = title;
        card.appendChild(h3);

        const techWrap = document.createElement("div");
        techWrap.className = "project-tech";
        techs.forEach((t) => {
          const span = document.createElement("span");
          span.className = "tech-tag";
          span.textContent = t;
          techWrap.appendChild(span);
        });
        card.appendChild(techWrap);

        const p = document.createElement("p");
        p.className = "project-description";
        p.textContent = description;
        card.appendChild(p);

        const a = document.createElement("a");
        a.href = "#";
        a.className = "btn btn-secondary";
        a.style.marginTop = "20px";
        a.style.width = "auto";
        a.innerHTML = `
                <i class="fas fa-external-link-alt"></i>
                <span>
                    <div class="btn-text">VIEW PROJECT</div>
                    <div class="btn-text clone">VIEW PROJECT</div>
                </span>`;
        card.appendChild(a);

        return card;
      }

      function initViewMoreProjects() {
        const btn = document.getElementById("viewMoreBtn");
        if (!btn) return;

        const projectsGrid = document.querySelector(".projects-grid");
        let extraAdded = false;
        let extraElements = [];

        btn.addEventListener("click", function (e) {
          e.preventDefault();

          const primaryText = btn.querySelector(".btn-text");
          const cloneText = btn.querySelector(".btn-text.clone");

          if (!extraAdded) {
            // Create 3 extra projects
            const p1 = createProjectCard(
              "Campus Analytics Dashboard",
              ["React", "D3.js", "PostgreSQL"],
              "Data visualization dashboard for campus metrics and analytics.",
            );
            const p2 = createProjectCard(
              "Mobile Attendance App",
              ["React Native", "Firebase"],
              "Mobile app for students to mark attendance and receive updates.",
            );
            const p3 = createProjectCard(
              "AI Tutor Chatbot",
              ["Python", "TensorFlow", "Flask"],
              "An intelligent chatbot to assist students with course queries and practice problems.",
            );

            extraElements = [p1, p2, p3];
            extraElements.forEach((el) => projectsGrid.appendChild(el));

            // Animate them into view
            gsap.from(extraElements, {
              y: 30,
              opacity: 0,
              stagger: 0.1,
              duration: 0.6,
              ease: "power2.out",
            });

            primaryText.textContent = "VIEW LESS";
            cloneText.textContent = "VIEW LESS";
            extraAdded = true;
          } else {
            // Remove appended elements
            extraElements.forEach((el) => el.remove());
            extraElements = [];
            primaryText.textContent = "VIEW MORE";
            cloneText.textContent = "VIEW MORE";
            extraAdded = false;
          }
        });
      }

      function initFloatingElements() {
        const container = document.querySelector(".floating-elements");

        // Create additional floating elements
        for (let i = 0; i < 8; i++) {
          const element = document.createElement("div");
          element.className = "floating-element";

          // Random properties
          const size = Math.random() * 150 + 50;
          const colors = [
            "var(--primary)",
            "var(--secondary)",
            "var(--accent)",
            "var(--success)",
          ];
          const color = colors[Math.floor(Math.random() * colors.length)];

          element.style.width = `${size}px`;
          element.style.height = `${size}px`;
          element.style.background = color;
          element.style.top = `${Math.random() * 100}%`;
          element.style.left = `${Math.random() * 100}%`;
          element.style.animationDelay = `${Math.random() * -20}s`;
          element.style.animationDuration = `${Math.random() * 20 + 20}s`;

          container.appendChild(element);
        }

        // Create larger decorative background spheres
        const sphereColors = [
          "radial-gradient(circle at 30% 30%, rgba(139,92,246,0.9), rgba(139,92,246,0.2))",
          "radial-gradient(circle at 60% 40%, rgba(59,130,246,0.9), rgba(59,130,246,0.18))",
          "radial-gradient(circle at 40% 70%, rgba(6,182,212,0.9), rgba(6,182,212,0.12))",
          "radial-gradient(circle at 70% 20%, rgba(16,185,129,0.9), rgba(16,185,129,0.12))",
        ];

        // (removed background spheres)
      }

      function createConfetti() {
        const colors = ["#8B5CF6", "#3B82F6", "#06B6D4", "#10B981"];

        for (let i = 0; i < 100; i++) {
          const confetti = document.createElement("div");
          confetti.style.position = "fixed";
          confetti.style.width = "10px";
          confetti.style.height = "10px";
          confetti.style.background =
            colors[Math.floor(Math.random() * colors.length)];
          confetti.style.borderRadius = "50%";
          confetti.style.left = `${Math.random() * 100}vw`;
          confetti.style.top = "0";
          confetti.style.zIndex = "9999";
          confetti.style.pointerEvents = "none";

          document.body.appendChild(confetti);

          // Animate confetti
          gsap.to(confetti, {
            y: window.innerHeight,
            x: Math.random() * 400 - 200,
            rotation: Math.random() * 360,
            duration: Math.random() * 2 + 1,
            ease: "power2.out",
            onComplete: () => confetti.remove(),
          });
        }
      }

      // Parallax effect for floating elements
      window.addEventListener("mousemove", (e) => {
        const x = (e.clientX / window.innerWidth) * 20 - 10;
        const y = (e.clientY / window.innerHeight) * 20 - 10;

        gsap.to(".floating-element", {
          x: x,
          y: y,
          duration: 1,
          ease: "power2.out",
        });
      });

      // Initialize scroll indicator visibility
      window.dispatchEvent(new Event("scroll"));
